import fetcher from "@utils/fetcher";
import axios from "axios";
import React, { FC, useCallback, useState } from 'react';
import { Navigate, Route, Routes } from "react-router";
import useSWR from "swr";
import { Channels, Chats, Header, LogOutButton, MenuScroll, ProfileImg, ProfileModal, RightMenu, WorkspaceName, Workspaces, WorkspaceWrapper } from "./styles";
import gravatar from 'gravatar';
import loadable from '@loadable/component';
import Menu from "@components/Menu";
const Channel = loadable(() => import('@pages/Channel'));
const DirectMessage = loadable(() => import('@pages/DirectMessage'));

// const Workspace: FC<React.PropsWithChildren<{}>> = ({ children }) => {
const Workspace: FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { data, error, mutate } = useSWR('http://localhost:3095/api/users', fetcher);

  const onLogout = useCallback(() => {
    axios.post('http://localhost:3095/api/users/logout', null, {
      withCredentials: true,
    })
      .then(() => {
        mutate(false, false);
      })
  }, [])
  const onClickUserProfile = useCallback(() => {
    setShowUserMenu((prev) => !prev)
  }, [])

  // return은 항상 hooks보다 아래에 있어야한다.
  if (!data) {
    return <Navigate replace to='/login' />
  }
  return (
    <div>
      <Header>
        <RightMenu>
          <span onClick={onClickUserProfile}>
            <ProfileImg src={gravatar.url(data.nickname, { s: '28px', d: 'retro' })} alt={data.email} />
            {showUserMenu &&
              <Menu style={{ right: 0, top: 38 }} show={showUserMenu} onCloseModal={onClickUserProfile}>
                <ProfileModal>
                  <img src={gravatar.url(data.nickname, { s: '28px', d: 'retro' })} alt={data.nickname} />
                  <div>
                    <span id="profile-name">{data.nickname}</span>
                    <span id="profile-active">Active</span>
                  </div>
                </ProfileModal>
                <LogOutButton onClick={onLogout}>로그아웃</LogOutButton>
              </Menu>
            }
          </span>
        </RightMenu>
      </Header>
      <WorkspaceWrapper>
        <Workspaces>test</Workspaces>
        <Channels>
          <WorkspaceName>Sleact</WorkspaceName>
          <MenuScroll>menu scroll</MenuScroll>
        </Channels>
        <Chats>
          <Routes>
            <Route path='/channel' element={<Channel />} />
            <Route path='/dm' element={<DirectMessage />} />
          </Routes>
        </Chats>
      </WorkspaceWrapper>
    </div>
  )
}

export default Workspace;