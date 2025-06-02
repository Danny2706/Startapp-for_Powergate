import React from "react";
import {
  ChevronRight,
  BatteryCharging,
  Wrench,
  Car,
  Trash2,
} from "lucide-react";

const RecentTransactions = () => {
  const transactions = [
    {
      id: 1,
      name: "PowerMax 12V Battery",
      category: "Battery Sale",
      amount: "$160.00",
      date: "27 May 2025",
      icon: BatteryCharging,
    },
    {
      id: 2,
      name: "Battery Installation",
      category: "Service",
      amount: "$40.00",
      date: "26 May 2025",
      icon: Wrench,
    },
    {
      id: 3,
      name: "Battery Diagnostic Test",
      category: "Checkup",
      amount: "$20.00",
      date: "25 May 2025",
      icon: Car,
    },
    {
      id: 4,
      name: "Old Battery Recycling",
      category: "Eco Service",
      amount: "$10.00",
      date: "24 May 2025",
      icon: Trash2,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-500">
          Recent Transactions
        </h3>
        <button className="flex items-center text-xs text-gray-500 hover:text-gray-700">
          View All <ChevronRight className="h-3 w-3 ml-1" />
        </button>
      </div>

      <div className="space-y-1 mb-4">
        <button className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full mr-2">
          All
        </button>
        <button className="px-3 py-1 text-xs font-medium text-gray-500 hover:bg-gray-100 rounded-full mr-2">
          Revenue
        </button>
        <button className="px-3 py-1 text-xs font-medium text-gray-500 hover:bg-gray-100 rounded-full">
          Expenses
        </button>
      </div>

      <div className="space-y-4">
        {transactions.map((transaction) => {
          const Icon = transaction.icon;
          return (
            <div
              key={transaction.id}
              className="flex items-center justify-between"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center mr-3">
                  <Icon className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">{transaction.name}</p>
                  <p className="text-xs text-gray-500">
                    {transaction.category}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-right">
                  {transaction.amount}
                </p>
                <p className="text-xs text-gray-500 text-right">
                  {transaction.date}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentTransactions;
