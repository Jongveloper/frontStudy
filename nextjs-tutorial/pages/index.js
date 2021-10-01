import { useEffect, useState } from 'react';
import Axios from 'axios';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ItemList from '../src/components/ItemList/ItemList';
import { Header, Divider } from 'semantic-ui-react';

export default function Home() {
  const [list, setList] = useState([]);
  const API_URL =
    'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

  function getData() {
    Axios.get(API_URL).then((res) => {
      setList(res.data);
    });
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Head>
        <title>HOME | Jongveloper</title>
      </Head>
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
    </div>
  );
}
