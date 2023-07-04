import React, { ReactNode } from 'react';

import ProjectUsersEdit from '../project-users-edit';
import ProjectEdit from '../project-edit';
import Notification from '../notification';
import History from '../history';
import Help from '../help';

export type TypeButton = {
  ariaLabel: string;
  className: string;
  node: ReactNode;
};

const buttons: TypeButton[] = [
  {
    ariaLabel: 'Users',
    className: 'button_square button_users',
    node: <ProjectUsersEdit />,
  },
  {
    ariaLabel: 'Menu',
    className: 'button_square button_menu',
    node: <ProjectEdit />,
  },
  {
    ariaLabel: 'Notification',
    className: 'button_square button_alarm',
    node: <Notification />,
  },
  {
    ariaLabel: 'History',
    className: 'button_square button_history',
    node: <History />,
  },
  {
    ariaLabel: 'Help',
    className: 'button_square button_help',
    node: <Help />,
  },
];

export default buttons;
