import ExpanseList from "./expanse-tracker/components/ExpanseList";
import { useState } from "react";
import ExpenseFilter from "./expanse-tracker/components/ExpenseFilter";
import ExpenseForm from "./expanse-tracker/components/ExpenseForm";
import categories from "./expanse-tracker/components/categories";

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
      <div className="mb-5">
        <ExpenseForm onSubmit={(data) => console.log(data)}></ExpenseForm>
      </div>
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
