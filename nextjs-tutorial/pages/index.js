import { useEffect, useState } from 'react';
import Axios from 'axios';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ItemList from '../src/components/ItemList/ItemList';
import { Header, Divider, Loader } from 'semantic-ui-react';

export default function Home() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  function getData() {
    Axios.get(API_URL).then((res) => {
      setList(res.data);
      setIsLoading(false);
    });
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Head>
        <title>HOME | Jongveloper</title>
        <meta name="description" content="next.js를 연습합니다."></meta>
      </Head>
      {isLoading && (
        <div style={{ padding: '300px 0' }}>
          <Loader inline="centered" active>
            Loading
          </Loader>
        </div>
      )}
      {!isLoading && (
        <>
          <Header as="h3" style={{ paddingTop: 40 }}>
            베스트 상품
          </Header>
          <Divider />
          <ItemList list={list.slice(0, 9)} />
          <Header as="h3" style={{ paddingTop: 40 }}>
            신상품
          </Header>
          <Divider />
          <ItemList list={list.slice(9)} />
        </>
      )}
    </div>
  );
}
