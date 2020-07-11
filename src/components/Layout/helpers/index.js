import Resumes from 'pages/Resumes';
import Resume from 'pages/Resume';
import Settings from 'pages/Settings';

export const routes = [
  {
    titles: [
      'Резюме',
      'Все',
    ],
    path: '/dashboard',
    Component: Resumes,
  },
  {
    titles: [
      'Резюме',
    ],
    path: '/resume/:id',
    Component: Resume,
  },
  {
    titles: [
      'Настройки',
    ],
    path: '/settings',
    Component: Settings,
  },
  {
    titles: [
      'Резюме',
      'Избранное',
    ],
    path: '/favorite',
    Component: Resumes,
  },
  {
    titles: [
      'Резюме',
      'Отклоненные',
    ],
    path: '/declined',
    Component: Resumes,
  },
  {
    titles: [
      'Резюме',
      'Архив',
    ],
    path: '/archive',
    Component: Resumes,
  },
];
