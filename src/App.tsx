import ExpanseList from "./expanse-tracker/components/ExpanseList";
import { useState } from "react";
import ExpenseFilter from "./expanse-tracker/components/ExpenseFilter";

function App() {
  const [selectedCategory, seSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 2, category: "Utilities" },
    { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    { id: 4, description: "ddd", amount: 10, category: "Utilities" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => seSelectedCategory(category)}
        ></ExpenseFilter>
      </div>
      <ExpanseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      ></ExpanseList>
    </>
  );
}

export default App;
