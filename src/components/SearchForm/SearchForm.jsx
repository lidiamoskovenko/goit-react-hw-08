import { useId } from 'react';
import { useDispatch, useSelector } from "react-redux";
import css from './SearchForm.module.css'
import { filterNumber } from "../../redux/contact/filter";
import {  selectFilter } from "../../redux/contact/selector";
export const SearchBar = () => {
  const searchId = useId();
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  const handleFilterChange = (evt) => {
    dispatch(filterNumber(evt.target.value));
  }
  return (
    <div className={css.searchForm}>
      <label htmlFor={searchId} className={css.searchLabel}>Filter</label>
      <input className={css.searchInput}
        type="text"
        name="search"
        id={searchId}
        placeholder="Search"
        onChange={handleFilterChange}
        value={value}
      />
    </div>
  );
};

