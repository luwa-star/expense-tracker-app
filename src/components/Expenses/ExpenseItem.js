import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import "./ExpenseItem.css";
const ExpenseItem= (props) =>{
  //card is a custom component
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item--description">
        <h2>{props.title}</h2>
        <div className="expense-item--amount">${props.amount} </div>
      </div>
    </Card>
    </li>
  );
}

export default ExpenseItem;
