import "./App.css";
//import Test from "./test";
// import About from "./About";
import { Route, Routes } from "react-router-dom";

import React, { useState, useRef } from "react";
import Add from "./Add";
import "./Media.css";
import { Button } from "react-bootstrap";

function Home() {
  const [Todo, setTodo] = useState(null);
  const [itemList, setItemList] = useState([]);

  function onChangeHandler(e) {
    setTodo(e.target.value);
  }
  function AddTodo() {
    setItemList([...itemList, { item: Todo, key: Date.now() }]);
    setTodo(" ");
  }

  return (
    <>
      <div className="container">
        <div className="input-field">
          <h5 className="h5-home">
            <span className="span-home">my</span>TodoList
          </h5>
          <input
            type="text"
            value={Todo}
            onChange={onChangeHandler}
            className="input"
            placeholder="write something here...."
          />
          <Button
            className="btn btn-primary-sm"
            id="btn"
            onClick={() => {
              AddTodo();
            }}
          >
            ADD
          </Button>
        </div>

        {itemList ? (
          <Add itemList={itemList} setItemList={setItemList} />
        ) : null}
      </div>
    </>
  );
}

export default Home;
