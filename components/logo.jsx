import { Battery, Zap } from "lucide-react";

export function Logo({ className = "", showText = true }) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        <Battery className="h-8 w-8 text-green-600" />
        <Zap className="h-4 w-4 text-green-400 absolute top-1 left-2" />
      </div>
      {showText && (
        <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
          PowerGate
        </span>
      )}
    </div>
  );
}
