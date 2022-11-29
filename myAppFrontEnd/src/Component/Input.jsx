import React from "react";
function Input({ data, settitle, data1 }) {
  function search(value) {
    data = data1;

    const x = data.filter((item) => {
      if (item.title.includes(value)) {
        return item.title;
      } 
    });
    settitle(x);
  }
  return (
    <>
      <input
        placeholder="search title"
        onChange={(event) => search(event.target.value)}
      />
    </>
  );
}
export default Input;
