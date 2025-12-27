'use client';

import DashboardLayout from '@/components/layout/DashboardLayout';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-text-primary mb-2">Settings</h1>
          <p className="text-text-secondary">Manage your account and preferences</p>
        </div>

        {/* Profile Settings */}
        <Card>
          <h2 className="text-xl font-semibold text-text-primary mb-4">Profile Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1">
                Display Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 bg-elevated border border-border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 bg-elevated border border-border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="primary">Save Changes</Button>
              <Button variant="ghost">Cancel</Button>
            </div>
          </div>
        </Card>

        {/* Notification Settings */}
        <Card>
          <h2 className="text-xl font-semibold text-text-primary mb-4">Notifications</h2>
          <div className="space-y-3">
            {['Email Notifications', 'Push Notifications', 'SMS Alerts', 'Weekly Reports'].map((setting) => (
              <label key={setting} className="flex items-center justify-between py-2">
                <span className="text-text-secondary">{setting}</span>
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded border-border text-primary focus:ring-2 focus:ring-primary"
                  defaultChecked
                />
              </label>
            ))}
          </div>
        </Card>

        {/* Danger Zone */}
        <Card>
          <h2 className="text-xl font-semibold text-danger mb-4">Danger Zone</h2>
          <p className="text-text-muted text-sm mb-4">
            Once you delete your account, there is no going back. Please be certain.
          </p>
          <Button variant="danger">Delete Account</Button>
        </Card>
      </div>
    </DashboardLayout>
  );
}
