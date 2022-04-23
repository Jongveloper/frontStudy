import * as React from 'react';
import { FC, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logIn, logOut } from './actions/user';
import { RootState } from './reducers';
import { UserState } from './reducers/user';

const App: FC = () => {
  const { isLoggingIn, data } = useSelector<RootState, UserState>((state) => state.user);
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    dispatch(logIn({
      id: 'jong',
      password: 'password',
    }))
  }, [dispatch]);

  const onLogout = useCallback(() => {
    dispatch(logOut());
  }, [dispatch])

  return (
    <div>
      {isLoggingIn
        ? <div>로그인 중</div>
        : data
          ? <div>{data.nickname}</div>
          : '로그인이 필요합니다.'
      }
      {!data
        ? <button onClick={onClick}>로그인</button>
        : <button onClick={onLogout}>로그아웃</button>
      }
    </div>
  )
}

export default App;