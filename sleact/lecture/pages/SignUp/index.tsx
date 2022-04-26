import useInput from "@hooks/useInput";
import React, { useCallback, useState } from "react";
import axios from 'axios';
import { Form, Header, Label, Input, Button, LinkContainer, Error, Success } from "./styles";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [mismatchError, setMisMatchError] = useState(false);
  const [signUpError, setSignUpError] = useState('');
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  // useCallback을 안감싸면 매번 리렌더링되기 때문에 디버깅이 힘듦
  // 함수 내부의 변수는 deps에 넣지 않지만 함수 외부의 변수를 사용할 땐 deps에 추가해줘야함
  // setPassword와 setMissMatchError를 넣지 않는 이유는 공식문서에서 이미 고정된 값이라고 말해주기 때문이다.
  const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setMisMatchError(e.target.value !== passwordCheck);
  }, [passwordCheck]);

  const onChangePasswordCheck = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(e.target.value);
    setMisMatchError(e.target.value !== password);
  }, [password]);

  const onSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, nickname, password, passwordCheck);
    if (!mismatchError && nickname) {
      console.log('서버로 회원가입하기');
      // 비동기 요청에서 setState하는 것은 비동기요청 전 초기화를 해주는게 좋다.
      setSignUpError('');
      setSignUpSuccess(false);
      axios.post('/api/users', {
        email,
        nickname,
        password
      }, { withCredentials: true })
        .then((response) => {
          console.log(response)
          setSignUpSuccess(true);
        })
        .catch((error) => {
          console.log(error.response)
          setSignUpError(error.response.data);
        })
        .finally(() => { });
    }
  }, [email, nickname, password, passwordCheck, mismatchError]);

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
        <Label id="nickname-label">
          <span>닉네임</span>
          <div>
            <Input type="text" id="nickname" name="nickname" value={nickname} onChange={onChangeNickname} />
          </div>
        </Label>
        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
          </div>
        </Label>
        <Label id="password-check-label">
          <span>비밀번호 확인</span>
          <div>
            <Input
              type="password"
              id="password-check"
              name="password-check"
              value={passwordCheck}
              onChange={onChangePasswordCheck}
            />
          </div>
          {mismatchError && <Error>비밀번호가 일치하지 않습니다.</Error>}
          {!nickname && <Error>닉네임을 입력해주세요.</Error>}
          {signUpError && <Error>{signUpError}</Error>}
          {signUpSuccess && <Success>회원가입되었습니다! 로그인해주세요.</Success>}
        </Label>
        <Button type="submit">회원가입</Button>
      </Form>
      <LinkContainer>
        이미 회원이신가요?&nbsp;
        <Link to='/login'>로그인 하러가기</Link>
      </LinkContainer>
    </div>
  );
}

export default SignUp;