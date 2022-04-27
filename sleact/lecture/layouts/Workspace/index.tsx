import fetcher from "@utils/fetcher";
import axios from "axios";
import React, { FC, useCallback } from 'react';
import { Navigate } from "react-router";
import useSWR from "swr";
import { Channels, Chats, Header, MenuScroll, ProfileImg, RightMenu, WorkspaceName, Workspaces, WorkspaceWrapper } from "./styles";
import gravatar from 'gravatar';

// const Workspace: FC<React.PropsWithChildren<{}>> = ({ children }) => {
const Workspace: FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const { data, error, mutate } = useSWR('http://localhost:3095/api/users', fetcher);

  const onLogout = useCallback(() => {
    axios.post('http://localhost:3095/api/users/logout', null, {
      withCredentials: true,
    })
      .then(() => {
        mutate(false, false);
      })
  }, [])

  // return은 항상 hooks보다 아래에 있어야한다.
  if (!data) {
    return <Navigate replace to='/login' />
  }
  return (
    <div>
      <Header>
        <RightMenu>
          <span>
            <ProfileImg src={gravatar.url(data.nickname, { s: '28px', d: 'retro' })} alt={data.email} />
          </span>
        </RightMenu>
      </Header>
      <button onClick={onLogout}>로그아웃</button>
      <WorkspaceWrapper>
        <Workspaces>test</Workspaces>
        <Channels>
          <WorkspaceName>Sleact</WorkspaceName>
          <MenuScroll>menu scroll</MenuScroll>
        </Channels>
        <Chats>Chats</Chats>
      </WorkspaceWrapper>
      {children}
    </div>
  )
}

export default Workspace;