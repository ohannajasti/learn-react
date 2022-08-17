import React, {useState} from "react";
import "./Expense.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterYearDataHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const fiteredExpenses = props.items.filter(function (expenses) {
    return expenses.date.getFullYear().toString() == filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterYearDataHandler}
      ></ExpensesFilter>
      <ExpenseChart expenses={fiteredExpenses}/>
      <ExpenseList items={fiteredExpenses}/>
      {/* // This is a shortcut expression. If expression 1 true it will run
      expression 2{fiteredExpenses.length === 0 && <p> No expense found.</p>}
      // Loop Expense Data
      {fiteredExpenses.length > 0 &&
        fiteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amout={expense.amout}
            date={expense.date}
          />
        ))} */}
      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenseItem> */}
    </Card>
  );
}

export default Expense;
