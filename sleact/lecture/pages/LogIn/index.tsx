import useInput from '@hooks/useInput';
import { Button, Error, Form, Header, Input, Label, LinkContainer } from '@pages/SignUp/styles';
import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import useSWR from "swr";
import fetcher from "@utils/fetcher";

//mutate = 서버에 요청을 안보내고 데이터를 수정
const LogIn = () => {
  const { data, error, mutate } = useSWR('http://localhost:3095/api/users', fetcher,
    // {
    //   dedupingInterval: 100000,
    //   캐시의 유지 기간
    // }
  );
  const [logInError, setLogInError] = useState(false);
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const onSubmit = useCallback(
    (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      // pending
      setLogInError(false);
      axios
        .post(
          '/api/users/login',
          { email, password },
          {
            withCredentials: true,
          },
        )
        .then((response) => {
          // fulfilled
          mutate(response.data, false);
        })
        .catch((error) => {
          // rejected
          setLogInError(error.response?.data?.code === 401);
        });
    },
    [email, password],
  );

  if (data === undefined) {
    return <div>로딩중..</div>
  }

  if (data) {
    return <Navigate replace to='/workspace/sleact/channel/일반' />
  }

  // console.log(error, userData);
  // if (!error && userData) {
  //   console.log('로그인됨', userData);
  //   return <Navigate replace to="/workspace/sleact/channel/일반" />;
  // }

  return (
    <div id="container">
      <Header>Sleact</Header>
      <Form onSubmit={onSubmit}>
        <Label id="email-label">
          <span>이메일 주소</span>
          <div>
            <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail} />
          </div>
        </Label>
        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
          </div>
          {logInError && <Error>이메일과 비밀번호 조합이 일치하지 않습니다.</Error>}
        </Label>
        <Button type="submit">로그인</Button>
      </Form>
      <LinkContainer>
        아직 회원이 아니신가요?&nbsp;
        <Link to="/signup">회원가입 하러가기</Link>
      </LinkContainer>
    </div>
  );
};

export default LogIn;