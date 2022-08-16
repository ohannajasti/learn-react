import React, {useState} from "react";
import "./Expense.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const [expenseItems, setExpenseItems] = useState(props.items);

  const filterYearDataHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    setExpenseItems(props.items.filter(function(expenses){
      return expenses.date.getFullYear() == filteredYear
    }));
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterYearDataHandler}
      ></ExpensesFilter>
      {expenseItems.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amout={expense.amout}
          date={expense.date}
        />
      ))}
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
