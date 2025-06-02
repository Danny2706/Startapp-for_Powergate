"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Wallet,
  ArrowLeftRight,
  Receipt,
  PieChart,
  Target,
  Settings,
  LogOut,
} from "lucide-react";

export function Sidebar({ activePage, setActivePage }) {
  const menuItems = [
    { name: "Overview", icon: LayoutDashboard, href: "/" },
    { name: "Balances", icon: Wallet, href: "/balances" },
    { name: "Transactions", icon: ArrowLeftRight, href: "/transactions" },
    { name: "Bills", icon: Receipt, href: "/bills" },
    { name: "Expenses", icon: PieChart, href: "/expenses" },
    { name: "Goals", icon: Target, href: "/goals" },
    { name: "Settings", icon: Settings, href: "/settings" },
  ];

  return (
    <div className="w-64 bg-gray-900 text-white flex flex-col h-full">
      <div className="p-4 border-b border-gray-800">
        <h1 className="text-xl font-bold">PowerGate</h1>
      </div>
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`flex items-center px-4 py-3 text-sm ${
                  activePage === item.name
                    ? "bg-green-500 text-white"
                    : "text-gray-300 hover:bg-gray-800"
                }`}
                onClick={() => setActivePage(item.name)}
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-800">
        <button
          className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 rounded-md"
          onClick={() => console.log("Logout clicked")}
        >
          <LogOut className="h-5 w-5 mr-3" />
          Logout
        </button>
      </div>
    </div>
  );
}
