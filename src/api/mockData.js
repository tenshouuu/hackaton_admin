export const getResumesResponse = ({ offset, limit }) => ({
  data: {
    offset,
    limit,
    total: 200,
    resumes: [
      {
        id: '1',
        name: 'John Brown',
        profile: 'Продавец',
        price: 40000,
        contacts: {
          email: 'example@mail.com',
          hh: 'https://hh.ru/',
        },
        status: '-',
        tags: ['касса', 'столовая'],
      },
      {
        id: '2',
        name: 'Mickle Nike',
        profile: 'Уборщик',
        price: 40000,
        contacts: {
          phone: '+79521624273',
          linkedin: 'https://www.linkedin.com/',
        },
        status: '-',
        tags: ['химчистка', 'уборка дворов'],
      },
      {
        id: '3',
        name: 'Maxim Hristofer',
        profile: 'Программист',
        price: 40000,
        contacts: {
          email: 'example@mail.com',
          phone: '+79521624273',
          linkedin: 'https://www.linkedin.com/',
        },
        status: '-',
        tags: ['JS', 'react'],
      },
    ],
  },
});
