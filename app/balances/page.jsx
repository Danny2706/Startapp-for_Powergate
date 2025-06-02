import React from "react";
import { DashboardLayout } from "@/components/dashboard-layout";

const BalancesPage = () => {
  return (
    <DashboardLayout>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h1 className="text-2xl font-bold mb-6">Balances</h1>
        <p className="text-gray-500">
          View and manage your account balances here.
        </p>
      </div>
    </DashboardLayout>
  );
};

export default BalancesPage;
