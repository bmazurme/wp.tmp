import React from 'react';

import SearchForm from '../SearchForm';

export default function ProjectUsersEdit() {
  return (
    <>
      <h2 className="title">Add users</h2>
      <SearchForm searchType="user" />
    </>
  );
}
