import { Bell, Search } from "lucide-react";

export function TopBar() {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center">
        <h2 className="text-lg font-medium">Hello Mr.Admin</h2>
        <span className="text-xs text-gray-500 ml-2">» May 12, 2023</span>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search here"
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button className="p-2 rounded-md hover:bg-gray-100">
          <Bell className="h-5 w-5 text-gray-500" />
        </button>
      </div>
    </header>
  );
}
