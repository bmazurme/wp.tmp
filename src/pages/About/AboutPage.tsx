import React from 'react';

import Content from '../../components/Content';
import About from '../../components/About';
import withUser from '../../hoc/withUser';

function AboutPage() {
  return (<Content children={<About />} />);
}

export default withUser(AboutPage, true);
