import React from "react";
import { Wallet } from "lucide-react";

export function BalancesPage({ isActive }) {
  return (
    <div
      className={`flex items-center px-4 py-3 text-sm ${
        isActive ? "bg-green-500 text-white" : "text-gray-300 hover:bg-gray-800"
      }`}
    >
      <Wallet className="h-5 w-5 mr-3" />
      Balances
    </div>
  );
}
