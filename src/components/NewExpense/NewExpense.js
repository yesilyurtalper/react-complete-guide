import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDateHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        };
        console.log(expenseData);
        props.onNewExpenseAdded(expenseData);
        setIsEditing(false);
    }

    const cancelHandler = () => {
        setIsEditing(false);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    return(
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDateHandler} onCancelled={cancelHandler}></ExpenseForm>}
        </div>
    );
} 

export default NewExpense;