'use client';

import DashboardLayout from '@/components/layout/DashboardLayout';
import StatsCard from '@/components/dashboard/StatsCard';
import ChartPlaceholder from '@/components/dashboard/ChartPlaceholder';
import TransactionList from '@/components/dashboard/TransactionList';
import SkeletonCard from '@/components/ui/SkeletonCard';
import SkeletonChart from '@/components/ui/SkeletonChart';
import SkeletonTable from '@/components/ui/SkeletonTable';
import { useAppSelector } from '@/hooks/useAppDispatch';
import { useEffect, useState } from 'react';

export default function DashboardPage() {
  // Simulate loading state (in real app, this would be from API fetch)
  const [isLoading, setIsLoading] = useState(true);
  
  // Read data from dashboardSlice (READ-ONLY)
  const { stats, transactions } = useAppSelector((state) => state.dashboard);

  // Simulate API loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5s simulated loading

    return () => clearTimeout(timer);
  }, []);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="fade-in">
          <h1 className="text-3xl font-bold text-text-primary mb-2">Dashboard</h1>
          <p className="text-text-secondary">Welcome to your admin dashboard</p>
        </div>

        {/* Stats Grid - Show skeletons while loading */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {isLoading ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : (
            stats.map((stat, index) => (
              <div key={stat.id} className={`fade-in stagger-${index + 1}`}>
                <StatsCard
                  label={stat.label}
                  value={stat.value}
                  change={stat.change}
                  trend={stat.trend}
                />
              </div>
            ))
          )}
        </div>

        {/* Charts & Transactions Grid - Show skeletons while loading */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {isLoading ? (
            <>
              <SkeletonChart title="Revenue Trend" height="350px" />
              <SkeletonTable />
            </>
          ) : (
            <>
              <div className="fade-in">
                <ChartPlaceholder title="Revenue Trend" height="350px" />
              </div>
              <div className="fade-in">
                <TransactionList transactions={transactions} maxHeight="350px" />
              </div>
            </>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
