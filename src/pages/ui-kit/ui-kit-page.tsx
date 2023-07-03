import React from 'react';

import Content from '../../components/content';
import UiKit from '../../layouts/ui-kit';
import withUser from '../../hocs/with-user';

function UiKitPage() {
  return (<Content children={<UiKit />} />);
}

export default withUser(UiKitPage, true);
