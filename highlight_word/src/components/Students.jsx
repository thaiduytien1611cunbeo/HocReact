import React, { useState, useTransition } from "react";
import data from "./db.json";

const Students = () => {
  const [search, setSearch] = useState("");
  const [pending, startTransition] = useTransition();

  const handleSearch = (e) => {
    startTransition(() => {
      setSearch(e.target.value);
    });
  };

  return (
    <div>
      <input type="search" placeholder="search..." onChange={handleSearch} />
      <hr />

      {pending && (
        <h3>Đây là tác dụng khi dùng useTransition LOADING...........</h3>
      )}

      {data.map(({ id, fullName }) => {
        const position = fullName.toLowerCase().indexOf(search.toLowerCase());
        if (search && position != -1) {
          return (
            <h3 key={id}>
              {fullName.slice(0, position)}
              <span style={{ backgroundColor: "red" }}>
                {fullName.slice(position, position + search.length)}
              </span>
              {fullName.slice(position + search.length)}
            </h3>
          );
        }
        return <h3 key={id}>{fullName}</h3>;
      })}
    </div>
  );
};

export default Students;
