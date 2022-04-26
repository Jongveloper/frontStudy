import fetcher from "@utils/fetcher";
import axios from "axios";
import React, { FC, useCallback } from 'react';
import { Navigate } from "react-router";
import useSWR from "swr";

// const Workspace: FC<React.PropsWithChildren<{}>> = ({ children }) => {
const Workspace: FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const { data, error, mutate } = useSWR('http://localhost:3095/api/users', fetcher);

  const onLogout = useCallback(() => {
    axios.post('http://localhost:3095/api/users/logout', null, {
      withCredentials: true,
    })
      .then(() => {
        mutate();
      })
  }, [])

  // return은 항상 hooks보다 아래에 있어야한다.
  if (!data) {
    return <Navigate replace to='/login' />
  }
  return (
    <div>
      <button onClick={onLogout}>로그아웃</button>
      {children}
    </div>
  )
}

export default Workspace;