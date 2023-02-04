import React from "react";
import "./Main.css";
import Product from "../Products/Product";

function Main() {
  return (
    <main>
      <div className="main-menu">
        <div className="main-list">Гаджетыт аксессуары</div>
        <div className="main-list">Бытовая техника</div>
        <div className="main-list">Прочее</div>
      </div>
      <div className="main-product">
        {products.map((item) => (
          <Product name={item.name} price={item.price} image={item.image} />
        ))}
      </div>
    </main>
  );
}

export default Main;

const products = [
    {
      name: "MacBook",
      price: 100000,
      image: "http://intocode.ru/d/react-project-1/images/1.jpg",
    },
    {
      id: 2,
      name: "Galaxy",
      price: 35999,
      left: 11,
      image: "http://intocode.ru/d/react-project-1/images/2.jpg",
    },
    {
      id: 3,
      name: "Скутер",
      price: 65500,
      left: 0,
      image: "http://intocode.ru/d/react-project-1/images/3.jpg",
    },
    {
      id: 4,
      name: "Монитор Samsung",
      price: 12000,
      left: 7,
      image: "http://intocode.ru/d/react-project-1/images/4.jpg",
    },
    {
      id: 5,
      name: "Респераторная маска",
      price: 500,
      left: 24,
      image: "http://intocode.ru/d/react-project-1/images/5.jpg",
    },
    {
      id: 6,
      name: "Стиральная машина",
      price: 100000,
      left: 0,
      image: "http://intocode.ru/d/react-project-1/images/6.jpg",
    },
  ];
