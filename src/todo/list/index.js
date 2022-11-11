import axios from "axios";
import React, { useState } from "react";

function List({ todos, dateSave, toplam }) {
  const [search, setSearch] = useState("");

  const data = {
    Products: todos,
    Date: dateSave,
    TotalPrice: toplam,
  };
  console.log(data);

  const PostData = () => {
    try {
      var response = axios
        .post("https://localhost:44312/api/Invoice/add", data)
        .then(alert("Faturanız Kaydedilmiştir."));
    } catch (error) {
      console.log(response);
    }
  };

  const filtered = todos.filter((item) => {
    return item.ProductName.toLocaleLowerCase().includes(
      search.toLocaleLowerCase()
    );
  });

  return (
    <div className="row">
      <div className="col-6 offset-3">
        <hr />
      </div>
      <div className="col-6 offset-3">
        {filtered.length === 0 && (
          <div className="alert alert-danger mt-3">
            Herhangi bir fatura ürünü bulunamadi
          </div>
        )}

        <div>
          <div className="row mt-3">
            <div>
              <table className="table">
                <thead
                  style={{
                    border: "1px solid",
                  }}
                >
                  <tr>
                    <th scope="col">Ürün İsmi</th>
                    <th scope="col">Fiyat</th>
                    <th scope="col">Tarih: {dateSave}</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((todo, i) => {
                    return (
                      <>
                        <tr key={i}>
                          <td>{todo.ProductName}</td>
                          <td>{todo.Price} ₺</td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>

              <p
                style={{
                  fontSize: "15px",
                  textAlign: "end",
                  marginRight: "55px",
                  marginBottom: "2px",
                  textDecoration: "underline",
                  fontWeight: "bold",
                }}
              >
                toplam tutar :{toplam} ₺
              </p>
              <div
                style={{
                  textAlign: "end",
                  marginRight: "80px",
                }}
              >
                <button
                  onClick={PostData}
                  style={{ borderRadius: "5px", fontWeight: "bold" }}
                >
                  Kaydet
                </button>
              </div>
            </div>
          </div>
          <div className="text-end"></div>
        </div>
      </div>
    </div>
  );
}

export default List;
