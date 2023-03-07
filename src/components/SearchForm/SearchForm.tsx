import React, { FormEvent, ChangeEvent } from 'react';

export default function SearchForm({ handleSubmit, handleChange }
  : {
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void,
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
  }) {
  return (
    <form className="search-form__box" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        name="searchWord"
        type="text"
        className="input search-form__input"
        placeholder="Search"
      />
      <button aria-label="Search" type="submit" className="button search-form__button" />
    </form>
  );
}
