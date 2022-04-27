import fetcher from "@utils/fetcher";
import axios from "axios";
import React, { FC, useCallback, useState } from 'react';
import { Navigate, Route, Routes } from "react-router";
import useSWR from "swr";
import { Button, Input, Label } from "@pages/SignUp/styles";
import { AddButton, Channels, Chats, Header, LogOutButton, MenuScroll, ProfileImg, ProfileModal, RightMenu, WorkspaceButton, WorkspaceName, Workspaces, WorkspaceWrapper } from "./styles";
import gravatar from 'gravatar';
import loadable from '@loadable/component';
import Menu from "@components/Menu";
import { Link } from "react-router-dom";
import { IUser } from "@typings/db";
import useInput from "@hooks/useInput";
import Modal from "@components/Modal";
import { toast } from "react-toastify";
const Channel = loadable(() => import('@pages/Channel'));
const DirectMessage = loadable(() => import('@pages/DirectMessage'));

// const Workspace: FC<React.PropsWithChildren<{}>> = ({ children }) => {
const Workspace: FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showCreateWorkspaceModal, setShowCreateWorkspaceModal] = useState(false);
  const [newWorkspace, onChangeNewWorkspace, setNewWorkspace] = useInput('');
  const [newUrl, onChangeNewUrl, setNewUrl] = useInput('');

  const { data: userData, error, mutate } = useSWR<IUser | false>('http://localhost:3095/api/users', fetcher);

  const onLogout = useCallback(() => {
    axios.post('http://localhost:3095/api/users/logout', null, {
      withCredentials: true,
    })
      .then(() => {
        mutate(false, false);
      })
  }, [])
  const onClickUserProfile = useCallback((e: any) => {
    e.stopPropagation();
    setShowUserMenu((prev) => !prev);
  }, [])

  const onClickCreateWorkspace = useCallback(() => {
    setShowCreateWorkspaceModal(true);
  }, [])

  const onCreateWorkspace = useCallback((e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newWorkspace || !newWorkspace.trim()) return;
    if (!newUrl || !newUrl.trim()) return;
    if (!newWorkspace) return;
    axios.post('http://localhost:3095/api/workspaces', {
      workspace: newWorkspace,
      url: newUrl
    }, {
      withCredentials: true,
    })
      .then(() => {
        mutate(false, false);
        setShowCreateWorkspaceModal(false);
        setNewWorkspace('');
        setNewUrl('');
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.response?.data, { position: 'bottom-center' });
      });
  }, [newWorkspace, newUrl]);

  const onCloseModal = useCallback(() => {
    setShowCreateWorkspaceModal(false);
  }, [])


  const MenuStyle = {
    right: 0,
    top: 38
  }


  // return은 항상 hooks보다 아래에 있어야한다.
  if (!userData) {
    return <Navigate replace to='/login' />
  }
  return (
    <div>
      <Header>
        <RightMenu>
          <span onClick={onClickUserProfile}>
            <ProfileImg src={gravatar.url(userData.nickname, { s: '28px', d: 'retro' })} alt={userData.email} />
            {showUserMenu &&
              <Menu style={MenuStyle} show={showUserMenu} onCloseModal={onClickUserProfile}>
                <ProfileModal>
                  <img src={gravatar.url(userData.nickname, { s: '28px', d: 'retro' })} alt={userData.nickname} />
                  <div>
                    <span id="profile-name">{userData.nickname}</span>
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
        <Workspaces>{userData?.Workspaces.map((ws) => {
          return (
            <Link key={ws.id} to={'/workspace/${123}/channel/일반'}>
              <WorkspaceButton>{ws.name.slice(0, 1).toUpperCase()}</WorkspaceButton>
            </Link>
          )
        })}
          <AddButton onClick={onClickCreateWorkspace}>+</AddButton>
        </Workspaces>
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
      <Modal show={showCreateWorkspaceModal} onCloseModal={onCloseModal}>
        <form onSubmit={onCreateWorkspace}>
          <Label id="workspace-label">
            <span>워크스페이스 이름</span>
            <Input id="workspace" value={newWorkspace} onChange={onChangeNewWorkspace} />
          </Label>
          <Label id="workspace-url-label">
            <span>워크스페이스 url</span>
            <Input id="workspace" value={newUrl} onChange={onChangeNewUrl} />
          </Label>
          <Button type='submit'>생성하기</Button>
        </form>
      </Modal>
    </div>
  )
}

export default Workspace;