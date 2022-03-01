import { someImage, someImageH, someImageU } from '../mock/someImage';

export const mockContacts = [
  {
    otherUserId: 0,
    name: 'pessoa 1',
    image: someImage,
    lastMessage: {
      id: 0,
      text: 'certo então!',
      userId: 1,
    },
  },
  {
    otherUserId: 1,
    name: 'pessoa 2',
    image: someImageU,
    lastMessage: {
      id: 0,
      text: 'pois é né',
      userId: 1,
    },
  },
  {
    otherUserId: 2,
    name: 'pessoa 3',
    image: someImageH,
    lastMessage: {
      id: 0,
      text: 'pra tu ve como são as coisas',
      userId: 1,
    },
  },
];
