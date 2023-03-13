import React, { ReactNode } from 'react';

import ProjectUsersEdit from '../ProjectUsersEdit';
import ProjectEdit from '../ProjectEdit';
import Notification from '../Notification';
import History from '../History';
import Help from '../Help';

export type TypeButton = {
  ariaLabel: string;
  className: string;
  node: ReactNode;
};

const buttons: TypeButton[] = [
  {
    ariaLabel: 'Users',
    className: 'button_users',
    node: <ProjectUsersEdit />,
  },
  {
    ariaLabel: 'Menu',
    className: 'button_menu',
    node: <ProjectEdit />,
  },
  {
    ariaLabel: 'Notification',
    className: 'button_alarm',
    node: <Notification />,
  },
  {
    ariaLabel: 'History',
    className: 'button_history',
    node: <History />,
  },
  {
    ariaLabel: 'Help',
    className: 'button_help',
    node: <Help />,
  },
];

export default buttons;
