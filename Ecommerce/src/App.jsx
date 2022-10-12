import "./App.css";
import Search from "./components/Search";
import Card from "./components/Card";
import Filter from "./components/Filter";
import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import {  Container } from "@chakra-ui/react"

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [state, setState] = useState({
    men: false,
    women: false,
    jewelery: false,
    electronics: false,
  });
  
  const [sort,setSort] = useState('');

  const handleChange = (e, name) => {
    const checked = e.target.checked;
    setState((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <Container className="App">
    
      <Search search={search} setSearch={setSearch} />

      <div className="submain">
        <Filter state={state} handleChange={handleChange} setSort={setSort} />

        <div  className="productmain">
          {data
            .filter(
              (d) =>
                d.title.toLowerCase().includes(search.toLowerCase())
               )
            .filter(
              (d) =>
                (state.men && d.category === "men's clothing") ||
                (state.women && d.category === "women's clothing") ||
                (state.jewelery && d.category === "jewelery") ||
                (state.electronics && d.category === "electronics") ||
                (!state.men &&
                  !state.women &&
                  !state.jewelery &&
                  !state.electronics &&
                  d.category.includes(""))
            )
            .sort( (a, b) => (sort === 'name' &&( a.title > b.title ? 1 : -1)) || (sort === 'price' &&(a.price > b.price ? 1 : -1)))
            .map((d) => (
              <Card
                id={d.id}
                key={d.id}
                title={d.title}
                price={d.price}
                description={d.description}
                image={d.image}
              />
            ))}
        </div>
      </div >
    </Container>
  );
}

export default App
