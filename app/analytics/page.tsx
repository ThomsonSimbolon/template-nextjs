'use client';

import DashboardLayout from '@/components/layout/DashboardLayout';
import ChartPlaceholder from '@/components/dashboard/ChartPlaceholder';
import Card from '@/components/ui/Card';

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-text-primary mb-2">Analytics</h1>
          <p className="text-text-secondary">Data insights and performance metrics</p>
        </div>

        {/* Chart Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <ChartPlaceholder title="Revenue Trend" height="300px" />
          <ChartPlaceholder title="User Growth" height="300px" />
        </div>

        {/* Large Chart */}
        <ChartPlaceholder title="Performance Metrics" height="400px" />

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <h3 className="text-lg font-semibold text-text-primary mb-2">Conversion Rate</h3>
            <p className="text-3xl font-bold text-text-primary mb-1">3.24%</p>
            <p className="text-success text-sm">↑ 0.3% from last week</p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-text-primary mb-2">Bounce Rate</h3>
            <p className="text-3xl font-bold text-text-primary mb-1">42.3%</p>
            <p className="text-danger text-sm">↑ 2.1% from last week</p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-text-primary mb-2">Avg. Session</h3>
            <p className="text-3xl font-bold text-text-primary mb-1">4m 32s</p>
            <p className="text-success text-sm">↑ 12s from last week</p>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
