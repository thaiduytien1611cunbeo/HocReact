import React from "react";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams);

  const handleFilter = (e) => {
    e.preventDefault();
    const form = Object.fromEntries([...new FormData(e.target)]);
    console.log(form);
    setSearchParams(form);
  };
  return (
    <div>
      <h1>Products</h1>
      <h2>Category : {searchParams.get("category")}</h2>
      <h2>query : {searchParams.get("query")}</h2>
      <form action="" onSubmit={handleFilter}>
        <select name="category">
          <option value="">All</option>
          <option value="computer">computer</option>
          <option value="phone">phone</option>
        </select>
        <input type="search" name="query" placeholder="query..." />
        <button>Filter</button>
      </form>
      <p style={{ height: "1000px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus odit
        eos similique veniam non itaque architecto tenetur iste vitae? Pariatur.
      </p>
    </div>
  );
};

export default Products;
