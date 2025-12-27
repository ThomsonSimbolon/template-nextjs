'use client';

import React from 'react';
import ToggleTheme from '@/components/ui/ToggleTheme';
import { useAppSelector } from '@/hooks/useAppDispatch';

/**
 * Navbar Component
 * 
 * Top navigation bar with app controls and user info.
 * 
 * Layout Responsibility:
 * - Handles layout composition
 * - Manages UI-only state (dropdown open/close) - LOCAL state
 * - MAY read auth data from Redux (read-only, for display)
 * - Does NOT contain business logic
 * - No direct localStorage access
 */

interface NavbarProps {
  onMenuClick: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  // User data from Redux (read-only for display)
  const user = useAppSelector((state) => state.auth.user);
  
  // UI state: Dropdown open/close (LOCAL state, NOT Redux)
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);

  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
      {/* Left: Logo + Mobile Menu Toggle */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu Toggle - Only visible on mobile/tablet */}
        <button
          onClick={onMenuClick}
          className="xl:hidden p-2 rounded-lg hover:bg-elevated transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* App Name */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">Admin Dashboard</span>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-3">
        {/* Theme Toggle */}
        <ToggleTheme />

        {/* Notification Icon */}
        <button
          className="relative p-2 rounded-lg hover:bg-elevated transition-colors"
          aria-label="Notifications"
        >
          <svg className="w-5 h-5 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          {/* Notification Badge */}
          <span className="absolute top-1 right-1 w-2 h-2 bg-danger rounded-full" />
        </button>

        {/* User Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-elevated transition-colors"
          >
            {/* Avatar */}
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white text-sm font-semibold">
                {user?.name?.charAt(0) || 'U'}
              </span>
            </div>
            {/* User Info - Hidden on mobile */}
            <div className="hidden md:block text-left">
              <p className="text-sm font-medium text-text-primary">{user?.name || 'User'}</p>
              <p className="text-xs text-text-muted">{user?.role || 'Role'}</p>
            </div>
            {/* Chevron */}
            <svg
              className={`w-4 h-4 text-text-muted transition-transform ${
                isProfileOpen ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown Menu - Local state controlled */}
          {isProfileOpen && (
            <>
              {/* Backdrop - Click to close */}
              <div
                className="fixed inset-0 z-10"
                onClick={() => setIsProfileOpen(false)}
              />
              
              {/* Dropdown */}
              <div className="absolute right-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-lg z-20">
                <div className="p-3 border-b border-divider">
                  <p className="text-sm font-medium text-text-primary">{user?.name}</p>
                  <p className="text-xs text-text-muted">{user?.email}</p>
                </div>
                <div className="py-2">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-text-secondary hover:bg-elevated hover:text-text-primary transition-colors"
                  >
                    Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-text-secondary hover:bg-elevated hover:text-text-primary transition-colors"
                  >
                    Settings
                  </a>
                  <button
                    className="w-full text-left px-4 py-2 text-sm text-danger hover:bg-danger-soft transition-colors"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
