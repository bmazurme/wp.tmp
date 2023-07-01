import React from 'react';

import Content from '../../components/content';
import About from '../../layouts/about';
import withUser from '../../hocs/with-user';

function AboutPage() {
  return (<Content children={<About />} />);
}

export default withUser(AboutPage, true);
