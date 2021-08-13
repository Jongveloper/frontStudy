const quotes = [
  {
    quote: '삶이 있는 한 희망은 있다',
    author: '카케로',
  },
  {
    quote: '산다는것 그것은 치열한 전투이다.',
    author: '로망로망',
  },
  {
    quote: '하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다',
    author: '사무엘존슨',
  },
  {
    quote: '언제나 현재에 집중할수 있다면 행복할것이다.',
    author: '파울로 코엘료',
  },
  {
    quote:
      '진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해 ',
    author: '찰리 채플린',
  },
  {
    quote: '직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다 ',
    author: '엘버트 허버드',
  },
  {
    quote: '신은 용기있는자를 결코 버리지 않는다',
    author: '켄러',
  },
  {
    quote: '피할수 없으면 즐겨라 ',
    author: '로버트 엘리엇',
  },
  {
    quote: '자신감 있는 표정을 지으면 자신감이 생긴다',
    author: '찰스다윈',
  },
  {
    quote: '고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다',
    author: '괴테',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQoute = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQoute.quote;
author.innerText = todaysQoute.author;
