import React, { useEffect, useState } from 'react';
import styles from './maker.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import { useHistory } from 'react-router-dom';
const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: '1',
      name: 'jong',
      company: 'code',
      theme: 'light',
      title: 'Software Engineer',
      email: 'woochop123@gamil.com',
      message: 'go for it',
      fileName: 'jong',
      fileURL: null,
    },
    2: {
      id: '2',
      name: 'chu',
      company: 'code',
      theme: 'dark',
      title: 'Software Engineer',
      email: 'chu123@gamil.com',
      message: 'go go go',
      fileName: 'chu',
      fileURL: null,
    },
    3: {
      id: '3',
      name: 'joo',
      company: 'code',
      theme: 'colorful',
      title: 'Car Engineer',
      email: 'joo123@gamil.com',
      message: 'hohoho',
      fileName: 'joo',
      fileURL: null,
    },
  });

  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push('/');
      }
    });
  });

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };
  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
