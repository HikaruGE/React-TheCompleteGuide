import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [addingExpenseFlag, setAddingExpenseFlag] = useState(false);
  const onChangeExpenseFlagHandler = () => {
    setAddingExpenseFlag((addingExpenseFlag) => !addingExpenseFlag);
  };

  return (
    <div className='new-expense'>
      {!addingExpenseFlag && (
        <button type='button' onClick={onChangeExpenseFlagHandler}>
          New Add Expense
        </button>
      )}
      {addingExpenseFlag && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onChangeExpenseFlag={onChangeExpenseFlagHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
