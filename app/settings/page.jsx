import React from "react";
import { DashboardLayout } from "@/components/dashboard-layout";

const SettingsPage = () => {
  return (
    <DashboardLayout>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>
        <p className="text-gray-500">Manage your account settings here.</p>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;
