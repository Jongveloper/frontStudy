import React, { useEffect, useState } from 'react';
import styles from './maker.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import { useHistory } from 'react-router-dom';
const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
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
    {
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
    {
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
  ]);
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
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
