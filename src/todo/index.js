import React, { useState } from "react";
import Form from "./form";
import Header from "./header";
import List from "./list";

function Invoice() {
  const [todos, setTodos] = useState([]);
  const [dateSave, setdateSave] = useState("");
  const [toplam, settoplam] = useState([]);

  return (
    <div className="container flud">
      <Header></Header>{" "}
      <Form
        setTodos={setTodos}
        todos={todos}
        setdateSave={setdateSave}
        dateSave={dateSave}
        toplam={toplam}
        settoplam={settoplam}
      ></Form>
      <List
        setTodos={setTodos}
        todos={todos}
        setdateSave={setdateSave}
        dateSave={dateSave}
        toplam={toplam}
        settoplam={settoplam}
      ></List>
    </div>
  );
}

export default Invoice;
