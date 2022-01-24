import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //To set only a single state that hass all states with same data type in the same component
  /*const [userInput, setUserInput]=useState({
    enteredTitle:'',
    enteredAmount:'',
    enteredDate:'',
  });*/

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    /*setUserInput({ //the spreader is used to make sure othere data in the object is not lost
      ...userInput,
      enteredTitle:event.target.value,
    }) 
    //for safe practice use this alternative:
    setUserInput((prevState)=>{
return{...prevState, enteredTitle: event.target.value};
    });//this is to ensure your state only depends on the latest values*/
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    /*setUserInput({
      ...userInput,
      enteredAmount:event.target.value,
    });*/
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    /*setUserInput({
      ...userInput,
      enteredDate:event.target.value,
    });*/
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSubmitExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    //STYLE DATE PICKER
    <form className="expense-form" onSubmit={submitHandler}>
      <div className=" new-expense--controls">
        <div className="new-expense--details">
          <div className="new-expense--control">
            <label>Title</label> 
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense--control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense--control">
          <label>Date</label>
          <input
            className="new-expense--date"
            type="date"
            min="0.01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense--actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
