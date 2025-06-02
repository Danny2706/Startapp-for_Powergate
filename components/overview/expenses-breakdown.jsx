import React from "react";
import { ArrowRight } from "lucide-react";

const ExpensesBreakdown = () => {
  const expenses = [
    {
      category: "Battery Inventory",
      amount: "$1,250.00",
      percentage: "45%",
      color: "bg-green-500",
    },
    {
      category: "Workshop Maintenance",
      amount: "$700.00",
      percentage: "25%",
      color: "bg-yellow-500",
    },
    {
      category: "Transportation & Delivery",
      amount: "$400.00",
      percentage: "15%",
      color: "bg-blue-500",
    },
    {
      category: "Electricity & Utilities",
      amount: "$300.00",
      percentage: "10%",
      color: "bg-red-500",
    },
    {
      category: "Recycling & Waste Management",
      amount: "$150.00",
      percentage: "5%",
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-medium text-gray-500">
          Expenses Breakdown
        </h3>
        <div className="text-xs text-gray-400">*Compare to last month</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {expenses.map((expense, index) => (
          <div key={index} className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">{expense.category}</p>
              <p className="text-lg font-bold">{expense.amount}</p>
              <p className="text-xs text-gray-400">{expense.percentage}</p>
            </div>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <ArrowRight className="h-4 w-4 text-gray-400" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpensesBreakdown;
