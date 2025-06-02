import React from "react";
import { Pencil } from "lucide-react";

const GoalsCard = () => {
  const goalAmount = 20000;
  const currentAmount = 12500;
  const percentage = (currentAmount / goalAmount) * 100;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium text-gray-500">Goals</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <Pencil className="h-4 w-4" />
        </button>
      </div>

      <div className="flex items-center justify-between mb-4">
        <p className="text-2xl font-bold">${goalAmount.toLocaleString()}</p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>This month Target</span>
          <span className="font-medium">${currentAmount.toLocaleString()}</span>
        </div>

        <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-green-500 rounded-full"
            style={{ width: `${percentage}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-green-500 mr-1" />
            <span>{(currentAmount / 1000).toFixed(0)}K</span>
          </div>
          <div className="text-xs text-gray-500">Target vs Achievement</div>
          <div className="text-xs font-medium">
            ${goalAmount.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalsCard;
