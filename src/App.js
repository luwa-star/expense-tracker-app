import React, { useState } from "react";
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const InitialExpenses = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 499,
    date: new Date(2020, 2, 21),
  },
  { id: "e2", title: "Laptop", amount: 1500, date: new Date(2022, 1, 14) },
  { id: "e3", title: "Samsung A30", amount: 658, date: new Date(2022, 0, 6) },
  { id: "e4", title: "YSL Handbag", amount: 650, date: new Date(2019, 6, 9) },
];
function App() {
  const [expenses, setExpenses] = useState(InitialExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div className="app">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
