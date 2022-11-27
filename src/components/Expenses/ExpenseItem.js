import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [counter, setCounter] = useState(0);
  //console.log("counter = " + counter);
  //const [title, setTitle] = useState(props.title);

  let title = props.title;
  if (counter > 0) title = title + " updated " + counter;

  console.log("expense item component rendered");

  const buttonClikHandler = () => {
    setCounter((prevState) => prevState + 1);
    //setTitle("updated title " + counter);
    console.log(counter);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={buttonClikHandler}>change title</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
