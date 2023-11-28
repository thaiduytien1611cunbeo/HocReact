import React from "react";

const Histories = React.memo(function Histories({
  histories,
  total,
  handleHistories,
}) {
  console.log("history");
  return (
    <>
      <h2>Lịch Sử</h2>
      {histories.map((item, index) => (
        <h3 key={index}>{item}</h3>
      ))}

      <h2>Total :{total}</h2>

      <button onClick={handleHistories}>Xóa lịch sử</button>
    </>
  );
});

export default Histories;
