import React from "react";

export function TotalBalance() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-sm font-medium text-gray-500 mb-2">Total Balance</h3>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-2xl font-bold">$240,399</p>
        </div>
        <div className="text-xs text-gray-500">All Accounts</div>
      </div>
    </div>
  );
}
