'use client';

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

/**
 * DashboardLayout Component
 * 
 * Pure composition component for dashboard pages.
 * 
 * Layout Responsibility:
 * - Handles layout composition ONLY
 * - Manages UI-only state (sidebar open/close on mobile)
 * - Does NOT access Redux
 * - Does NOT contain business logic
 * - All data flows via children or props
 * 
 * Structure:
 * - Fixed sidebar (responsive)
 * - Top navbar
 * - Main content area (scrollable)
 * 
 * CRITICAL: Sidebar width offsets prevent layout shift
 * - Mobile (<768px): ml-0 (sidebar hidden by default)
 * - Tablet (768-1279px): ml-[60px] (collapsed sidebar width)
 * - Desktop (>=1280px): ml-60 (240px sidebar width)
 */

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  // UI-only state: Sidebar open/close for mobile (LOCAL state, NOT Redux)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Content Area - Account for sidebar width to prevent layout shift */}
      {/* Mobile: no offset (sidebar is drawer) */}
      {/* Tablet: 60px offset (collapsed sidebar) */}
      {/* Desktop: 240px offset (expanded sidebar) */}
      <div className="flex-1 flex flex-col ml-0 md:ml-[60px] xl:ml-60">
        {/* Navbar */}
        <Navbar onMenuClick={() => setIsSidebarOpen(true)} />

        {/* Main Content */}
        <main className="flex-1 overflow-auto bg-app p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
