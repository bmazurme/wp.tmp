import React from 'react';

import Content from '../../components/Content';
import UiKit from '../../components/UiKit';
import withUser from '../../hoc/withUser';

function UiKitPage() {
  return (<Content children={<UiKit />} />);
}

export default withUser(UiKitPage, true);
