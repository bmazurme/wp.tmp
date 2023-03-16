import React from 'react';

export default function Banner({ sidebar }: { sidebar: boolean }) {
  return (<div className="banner">{sidebar ? '' : 'Banner'}</div>);
}
