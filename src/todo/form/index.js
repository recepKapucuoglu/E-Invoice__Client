import React, { useState } from "react";
import { useEffect } from "react";

function Form({ setTodos, todos, dateSave, setdateSave, toplam, settoplam }) {
  const [form, setForm] = useState({
    ProductName: "",
    Price: "",
  });

  const onChangePrice = (e) =>
    setForm({
      ...form,
      Price: e.target.value,
    });
  const onChangeProduct = (e) =>
    setForm({ ...form, ProductName: e.target.value });

  const onClickAddNew = () => {
    setTodos([...todos, form]);
    setForm({ ProductName: "", Price: "" });
  };

  useEffect(() => {
    var t = 0;
    todos.map((element) => (t += Number(element.Price)));
    settoplam(t);
    console.log(toplam);
  }, [onClickAddNew]);

  return (
    <>
      <div className="row mt-3">
        <div className=" col-6 offset-3 ">
          <input
            type="date"
            placeholder="Lütfen fatura tarihi giriniz"
            id="example"
            className="form-control"
            value={dateSave}
            onChange={(e) => setdateSave(e.target.value)}
          />{" "}
        </div>
      </div>
      <div className="row mt-3">
        <div className=" col-6 offset-3 ">
          <div className="mb-3">
            <input
              type="text"
              placeholder="Lütfen ürün ismini giriniz..."
              className="form-control"
              value={form.ProductName}
              onChange={onChangeProduct}
            />
          </div>
          <div className="mb-3">
            <input
              onChange={onChangePrice}
              value={form.Price}
              className="form-control"
              placeholder="Lütfen ürün fiyatını giriniz..."
            ></input>
          </div>
          <div>
            <button className="btn btn-dark me-2" onClick={onClickAddNew}>
              <i className="fa fa-plus"></i> ekle
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
