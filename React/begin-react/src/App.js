import React, { useMemo, useReducer } from 'react';
//components
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';
// hooks

//styles
import './App.css';
//library
import produce from 'immer';

function countActiveUsers(users) {
  console.log('활성 사용자를 세는중...');
  return users.filter((user) => user.active).length;
}

const initialState = {
  inputs: {
    username: '',
    email: '',
  },
  users: [
    {
      id: 1,
      username: 'jong',
      email: 'jongjong@adfasdf.com',
      active: true,
    },
    {
      id: 2,
      username: 'woo',
      email: 'wowowowo@adfasdf.com',
      active: false,
    },
    {
      id: 3,
      username: 'hyuk',
      email: 'hyhyhyhy@adfasdf.com',
      active: false,
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER':
      return produce(state, (draft) => {
        draft.users.push(action.user);
      });
    case 'TOGGLE_USER':
      return produce(state, (draft) => {
        const user = draft.users.find((user) => user.id === action.id);
        user.action = !user.active;
      });
    case 'REMOVE_USER':
      return produce(state, (draft) => {
        const index = draft.users.findIndex((user) => user.id === action.id);
        draft.users.splice(index, 1);
      });
    default:
      return state;
  }
}
// UserDispatch라는 이름으로 내보냄
export const UserDispatch = React.createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { users } = state;

  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList users={users} />
      <div>활성사용자 수 : {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;
