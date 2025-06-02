import React from "react";
import { DashboardLayout } from "@/components/dashboard-layout";

const ExpensesPage = () => {
  return (
    <DashboardLayout>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h1 className="text-2xl font-bold mb-6">Expenses</h1>
        <p className="text-gray-500">View and manage your expenses here.</p>
      </div>
    </DashboardLayout>
  );
};

export default ExpensesPage;
