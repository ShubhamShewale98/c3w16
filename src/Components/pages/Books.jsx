import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { BookCard } from "./BookCard";
import styled, { css } from "styled-components";

export const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);


`;

const Books = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getdata()  
  }, []);
const getdata=async ()=>{
  try{
    let res = await fetch("http://localhost:8080/books");
      let data = await res.json();
      setData(data)
  }catch(error){
    console.log(error)
  }
}
console.log("setdata",data);

  return (
    <>
      <h1>Books</h1>
      <Grid data-testid="books-container">
        {data.map((element)=>(
 <BookCard {...element}/>
        )) 
          }
      </Grid>
    </>
  );
};
export default Books;
