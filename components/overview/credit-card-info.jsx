import React from "react";
import { ChevronRight } from "lucide-react";

const CreditCardInfo = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-500">Account Type</h3>
        <div className="flex space-x-1">
          {[1, 2, 3, 4].map((dot) => (
            <div
              key={dot}
              className={`h-1.5 w-1.5 rounded-full ${
                dot === 2 ? "bg-green-500" : "bg-gray-300"
              }`}
            />
          ))}
          <button className="ml-2">
            <ChevronRight className="h-4 w-4 text-gray-400" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-12 h-8 bg-gradient-to-r from-red-500 to-yellow-500 rounded-md flex items-center justify-center mr-3">
            <div className="w-4 h-4 bg-yellow-300 rounded-full opacity-80" />
            <div className="w-4 h-4 bg-red-500 rounded-full opacity-80 -ml-2" />
          </div>
          <div>
            <p className="text-sm font-medium">Credit Card</p>
            <p className="text-xs text-gray-500">**** **** **** 2598</p>
          </div>
        </div>
        <div className="text-lg font-bold">$25000</div>
      </div>
    </div>
  );
};

export default CreditCardInfo;
