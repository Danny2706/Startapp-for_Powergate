import CreditCardInfo from "./overview/credit-card-info";
import ExpensesBreakdown from "./overview/expenses-breakdown";
import GoalsCard from "./overview/goals-card";
import RecentTransactions from "./overview/recent-transactions";
import Statistics from "./overview/statistics";
import { TotalBalance } from "./overview/total-balance";
import { UpcomingBills } from "./overview/upcoming-bills";

export function OverviewContent() {
  return (
    <div className="space-y-6">
      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <TotalBalance/>
        <GoalsCard/>
        <UpcomingBills/>
      </div>

      {/* Credit Card */}
      <CreditCardInfo/>

      {/* Recent Transactions and Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RecentTransactions/>
        <Statistics/>
      </div>

      {/* Expenses Breakdown */}
      <ExpensesBreakdown/>
    </div>
  );
}
