import React from "react";
import { ChevronRight } from "lucide-react";

export function UpcomingBills() {
  const bills = [
    {
      id: 1,
      date: { month: "May", day: 30 },
      provider: "PowerMax Batteries",
      plan: "Battery Replacement - Toyota Corolla",
      amount: "$120",
      dueDate: "Service Due - 30 May 2025",
    },
    {
      id: 2,
      date: { month: "Jun", day: 5 },
      provider: "VoltEdge Garage",
      plan: "Battery Maintenance Check - SUV",
      amount: "$45",
      dueDate: "Scheduled - 5 Jun 2025",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-500">Upcoming Services</h3>
        <button className="flex items-center text-xs text-gray-500 hover:text-gray-700">
          View All <ChevronRight className="h-3 w-3 ml-1" />
        </button>
      </div>

      <div className="space-y-4">
        {bills.map((bill) => (
          <div key={bill.id} className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex flex-col items-center justify-center w-10 h-10 bg-gray-100 rounded-md mr-3">
                <span className="text-xs">{bill.date.month}</span>
                <span className="text-sm font-bold">{bill.date.day}</span>
              </div>
              <div>
                <p className="text-sm font-medium">{bill.provider}</p>
                <p className="text-xs text-gray-500">{bill.plan}</p>
                <p className="text-xs text-gray-400">{bill.dueDate}</p>
              </div>
            </div>
            <div className="text-sm font-medium">{bill.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
