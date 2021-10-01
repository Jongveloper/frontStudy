import { Header } from 'semantic-ui-react';
import Gnb from './Gnb';

export default function Top() {
  return (
    <div>
      <div style={{ display: 'flex', paddingTop: 20 }}>
        <div style={{ flex: '100px 0 0' }}>
          <img
            src="/images/cute.jpeg"
            alt="logo"
            style={{
              display: 'block',
              width: 80,
              height: 80,
              borderRadius: '40px',
            }}
          />
        </div>
        <Header as="h1">종혁</Header>
      </div>
      <Gnb />
    </div>
  );
}
