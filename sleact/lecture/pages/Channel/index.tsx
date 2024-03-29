import ChatBox from "@components/ChatBox";
import ChatList from "@components/ChatList";
import useInput from "@hooks/useInput";
import React, { useCallback } from 'react';
import { Container, Header } from "./styles";


const Channel = () => {

  const [chat, onChangeChat, setChat] = useInput('');
  const onSubmitForm = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setChat('')
  }, [])
  return (
    <Container>
      <Header>채널!</Header>
      {/* <ChatList /> */}
      <ChatBox chat={chat} onChangeChat={onChangeChat} onSubmitForm={onSubmitForm} placeholder='내용을 입력하세요' />
    </Container>
  )
}

export default Channel;