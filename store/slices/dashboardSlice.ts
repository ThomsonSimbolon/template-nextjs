import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * Dashboard Slice - GLOBAL State
 * 
 * Purpose: Manage dashboard data (stats, transactions)
 * Why in Redux: Dashboard data is global, shared across dashboard pages
 * 
 * Note: This is MOCK data for UI demonstration purposes.
 * In a real application, this would fetch from backend API.
 */

interface Stat {
  id: string;
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
}

interface Transaction {
  id: string;
  user: string;
  amount: string;
  status: 'completed' | 'pending' | 'failed';
  date: string;
}

interface DashboardState {
  stats: Stat[];
  transactions: Transaction[];
  isLoading: boolean;
}

// Mock statistics data
const mockStats: Stat[] = [
  {
    id: '1',
    label: 'Total Revenue',
    value: '$45,231.89',
    change: '+20.1%',
    trend: 'up',
  },
  {
    id: '2',
    label: 'Active Users',
    value: '2,350',
    change: '+180',
    trend: 'up',
  },
  {
    id: '3',
    label: 'Transactions',
    value: '12,234',
    change: '+19%',
    trend: 'up',
  },
  {
    id: '4',
    label: 'Avg. Order Value',
    value: '$89.00',
    change: '-4%',
    trend: 'down',
  },
];

// Mock transactions data
const mockTransactions: Transaction[] = [
  {
    id: '1',
    user: 'Alice Johnson',
    amount: '$120.00',
    status: 'completed',
    date: '2024-01-15',
  },
  {
    id: '2',
    user: 'Bob Smith',
    amount: '$89.50',
    status: 'pending',
    date: '2024-01-15',
  },
  {
    id: '3',
    user: 'Charlie Brown',
    amount: '$250.00',
    status: 'completed',
    date: '2024-01-14',
  },
  {
    id: '4',
    user: 'Diana Prince',
    amount: '$45.00',
    status: 'failed',
    date: '2024-01-14',
  },
  {
    id: '5',
    user: 'Ethan Hunt',
    amount: '$199.99',
    status: 'completed',
    date: '2024-01-13',
  },
  {
    id: '6',
    user: 'Fiona Gallagher',
    amount: '$75.50',
    status: 'pending',
    date: '2024-01-13',
  },
  {
    id: '7',
    user: 'George Miller',
    amount: '$310.00',
    status: 'completed',
    date: '2024-01-12',
  },
  {
    id: '8',
    user: 'Hannah Baker',
    amount: '$55.00',
    status: 'completed',
    date: '2024-01-12',
  },
];

const initialState: DashboardState = {
  stats: mockStats,
  transactions: mockTransactions,
  isLoading: false,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setStats: (state, action: PayloadAction<Stat[]>) => {
      state.stats = action.payload;
    },
    
    setTransactions: (state, action: PayloadAction<Transaction[]>) => {
      state.transactions = action.payload;
    },
    
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    
    // In a real app, you might have actions like:
    // fetchDashboardData (async thunk)
    // updateStat
    // addTransaction
    // etc.
  },
});

export const { setStats, setTransactions, setLoading } = dashboardSlice.actions;
export default dashboardSlice.reducer;

// Export types for use in components
export type { Stat, Transaction };
