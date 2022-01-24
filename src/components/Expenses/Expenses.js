import { useState } from "react/cjs/react.development";
import Card from "../UI/Card";

import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangehandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() ===filteredYear
  });//to filter by year



  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangehandler}
      />
      {/*{filteredExpenses.length=== 0 && (<p>No Expenses Found.</p>)}
      {filteredExpenses.length > 0 &&
      (
        filteredExpenses.map((expense) => (//to render expenses dynamically
          <ExpenseItem
          key= {expense.id} 
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
        )}*/}
        <ExpensesChart expenses={filteredExpenses}/>
     <ExpensesList items ={filteredExpenses} />
      

      
    </Card>
  );
};
export default Expenses;
