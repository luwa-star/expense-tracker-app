import './ExpenseDate.css'
const ExpenseDate= (props)=>{
    const month = props.date.toLocaleString("en-US", { month: "long" });
    const day = props.date.toLocaleString("en-US", { day: "2-digit" });
    const year = props.date.getFullYear();
    return(
<div className="expense-item--date">
        <div className="expense-item--month">{month}</div> 
        <div className="expense-item--year">{year}</div>
        <div className="expense-item-day">{day}</div>
      </div>
)
}
export default ExpenseDate;