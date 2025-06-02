import React from "react";
import { ChevronDown } from "lucide-react";

const Statistics = () => {
  // Sample data for the chart
  const weekData = [
    { day: "17 Sun", thisWeek: 25, lastWeek: 15 },
    { day: "18 Mon", thisWeek: 18, lastWeek: 22 },
    { day: "19 Tue", thisWeek: 30, lastWeek: 18 },
    { day: "20 Wed", thisWeek: 15, lastWeek: 20 },
    { day: "21 Thu", thisWeek: 25, lastWeek: 15 },
    { day: "22 Fri", thisWeek: 18, lastWeek: 22 },
    { day: "23 Sat", thisWeek: 22, lastWeek: 18 },
  ];

  // Find the maximum value for scaling
  const maxValue = Math.max(
    ...weekData.map((d) => Math.max(d.thisWeek, d.lastWeek))
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-medium text-gray-500">Statistics</h3>
        <button className="flex items-center text-xs font-medium px-2 py-1 border rounded-md">
          Weekly Comparison <ChevronDown className="h-3 w-3 ml-1" />
        </button>
      </div>

      <div className="flex items-center mb-4 space-x-4 text-xs">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-green-500 rounded-sm mr-1"></div>
          <span>This week</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-green-200 rounded-sm mr-1"></div>
          <span>Last week</span>
        </div>
      </div>

      <div className="h-48 flex items-end justify-between">
        {weekData.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex items-end h-36 space-x-1">
              <div
                className="w-4 bg-green-500 rounded-t"
                style={{ height: `${(item.thisWeek / maxValue) * 100}%` }}
              />
              <div
                className="w-4 bg-green-200 rounded-t"
                style={{ height: `${(item.lastWeek / maxValue) * 100}%` }}
              />
            </div>
            <div className="text-xs text-gray-500 mt-2">
              {item.day.split(" ")[0]}
            </div>
            <div className="text-xs text-gray-400">
              {item.day.split(" ")[1]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
