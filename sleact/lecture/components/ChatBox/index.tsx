import { ChatArea, Form, MentionsTextarea, SendButton, Toolbox, EachMention } from '@components/ChatBox/styles';
import { IUser } from '@typings/db';
import autosize from 'autosize';
import gravatar from 'gravatar';
import React, { FC, useCallback, useEffect, useRef } from 'react';
import { Mention, SuggestionDataItem } from 'react-mentions';
import { useParams } from 'react-router';
import useSWR from "swr";
import fetcher from '../../utils/fetcher';

interface Props {
  onSubmitForm: (e: any) => void;
  chat?: string;
  onChangeChat: (e: any) => void;
  placeholder: string;
  data?: IUser[];
}
const ChatBox: FC<Props> = ({ onSubmitForm, chat, onChangeChat, placeholder, data }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { workspace } = useParams<{ workspace: string }>();
  const { data: userData, error, mutate } = useSWR<IUser | false>('/api/users', fetcher);
  const { data: memberData } = useSWR<IUser[]>(userData ? `/api/workspaces/${workspace}/members` : null, fetcher)
  useEffect(() => {
    if (textareaRef.current) {
      autosize(textareaRef.current);
    }
  }, []);

  const onKeydownChat = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
        if (!e.shiftKey) {
          e.preventDefault();
          onSubmitForm(e);
        }
      }
    },
    [onSubmitForm],
  );

  const renderUserSuggestion: (
    suggestion: SuggestionDataItem,
    search: string,
    highlightedDisplay: React.ReactNode,
    index: number,
    focus: boolean,
  ) => React.ReactNode = useCallback(
    (member, search, highlightedDisplay, index, focus) => {
      if (!memberData) {
        return null;
      }
      return (
        <EachMention focus={focus}>
          <img src={gravatar.url(memberData[index].email, { s: '20px', d: 'retro' })} alt={memberData[index].nickname} />
          <span>{highlightedDisplay}</span>
        </EachMention>
      );
    },
    [memberData],
  );

  return (
    <ChatArea>
      <Form onSubmit={onSubmitForm}>
        <MentionsTextarea
          id="editor-chat"
          value={chat}
          onChange={onChangeChat}
          onKeyPress={onKeydownChat}
          placeholder={placeholder}
          inputRef={textareaRef}
          allowSuggestionsAboveCursor
        >
          <Mention
            appendSpaceOnAdd
            trigger="@"
            data={memberData?.map((v) => ({ id: v.id, display: v.nickname })) || []}
            renderSuggestion={renderUserSuggestion}
          />
        </MentionsTextarea>
        <Toolbox>
          <SendButton
            className={
              'c-button-unstyled c-icon_button c-icon_button--light c-icon_button--size_medium c-texty_input__button c-texty_input__button--send' +
              (chat?.trim() ? '' : ' c-texty_input__button--disabled')
            }
            data-qa="texty_send_button"
            aria-label="Send message"
            data-sk="tooltip_parent"
            type="submit"
            disabled={!chat?.trim()}
          >
            <i className="c-icon c-icon--paperplane-filled" aria-hidden="true" />
          </SendButton>
        </Toolbox>
      </Form>
    </ChatArea>
  );
};

export default ChatBox;