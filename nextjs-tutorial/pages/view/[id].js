import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Item from '../../src/components/Item/Item';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const [item, setItem] = useState({});
  const API_URL = `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  function getData() {
    axios.get(API_URL).then((res) => {
      setItem(res.data);
    });
  }

  useEffect(() => {
    if (id && id > 0) {
      getData();
    }
  }, [id]);

  return <Item item={item} />;
};

export default Post;
