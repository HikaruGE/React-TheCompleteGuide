import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

function dataToComponent(expense) {
  return (
    <li>
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    </li>
  );
}

function ExpenseList(props) {
  let res = props.expenses.map(dataToComponent);
  return <ul className='expense-list'>{res}</ul>;
}

export default ExpenseList;
