import React from "react";
import Input from "./Input";
import Search from "./Search";
import { useEffect, useState } from "react";

function Main() {
  const [Title, settitle] = useState([]);
  const [title1,settitle1]=useState([]);
  useEffect(() => {
    Data();
  }, []);
  async function Data() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const List = await response.json();
    console.log(List);
    settitle(List);
    settitle1(List);
  }
  return (
    <>
      <Input data={Title} settitle={settitle} data1={title1}/>
      <Search Title={Title} settitle={settitle}/>
    </>
  );
}
export default Main;
