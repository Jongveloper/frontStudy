import { ChatZone, Section, StickyHeader } from '@components/ChatList/styles';
import { IDM } from "@typings/db";
import React, { FC, useCallback, useRef } from 'react';
import Chat from '@components/Chat'
import { Scrollbars } from 'react-custom-scrollbars';

interface Props {
  chatSections: { [key: string]: IDM[] };
}

const ChatList: FC<Props> = ({ chatSections }) => {
  const scrollbarRef = useRef(null);
  const onScroll = useCallback(() => {

  }, [])

  // Object.entries => 객체를 배열로 바꿈
  return (
    <ChatZone>
      <Scrollbars ref={scrollbarRef} onScrollFrame={onScroll}>
        {Object.entries(chatSections).map(([date, chats]) => {
          return (
            <Section className={`section-${date}`} key={date}>
              <StickyHeader>
                <button>{date}</button>
              </StickyHeader>
              {chats.map((chat) => (
                <Chat key={chat.id} data={chat} />
              ))}
            </Section>
          )
        })}
      </Scrollbars>
    </ChatZone>
  );
};

export default ChatList;