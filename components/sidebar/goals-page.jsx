import { Target } from "lucide-react";

export function GoalsPage({ isActive }) {
  return (
    <div
      className={`flex items-center px-4 py-3 text-sm ${
        isActive ? "bg-green-500 text-white" : "text-gray-300 hover:bg-gray-800"
      }`}
    >
      <Target className="h-5 w-5 mr-3" />
      Goals
    </div>
  );
}
