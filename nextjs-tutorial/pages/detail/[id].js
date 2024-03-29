import Axios from 'axios';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/dist/shared/lib/head';
import { Loader } from 'semantic-ui-react';
import Item from '../../src/components/Item/Item';

const Post = ({ item, name }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div style={{ padding: '100px 0' }}>
        <Loader active inline="centered">
          Loading
        </Loader>
      </div>
    );
  }
  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>
          </Head>
          {name} 환경입니다.
          <Item item={item} />
        </>
      )}
    </>
  );
};

export default Post;

export async function getStaticPaths() {
  const apiURL = process.env.apiURL;
  const res = await Axios.get(apiURL);
  const data = res.data;
  return {
    paths: data.map((item) => ({
      params: {
        id: item.id.toString(),
      },
    })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const apiURL = `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await Axios.get(apiURL);
  const data = res.data;
  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}
