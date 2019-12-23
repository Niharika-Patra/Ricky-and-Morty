import React from "react";

import "./Filters.css";

const Filters = props => {
  return (
    <form onSubmit={props.handleSubmit} className="filter-form">
      <input
        name="name"
        type="text"
        className="filter-search"
        placeholder="Search by Name"
        onChange={props.handleChange}
        defaultValue={props.searchValue}
      />
      <input type="submit" value="Search" className="filter-submit" />
      <select
        name="sortById"
        className="filter-select"
        onChange={props.handleSelectChange}
        defaultValue={props.sortById}
      >
        <option value="">Sort by ID</option>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
    </form>
  );
};

export default Filters;
