'use client';

import React from 'react';

export default function RadarControllerWorkstation() {
  return (
    <div className="min-h-screen bg-gray-900 text-green-300 font-mono p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-cyan-300 mb-2">Radar Controller Workstation</h1>
          <p className="text-lg text-gray-400">Advanced Radar Control & Monitoring System</p>
          <div className="mt-4 text-sm text-gray-500">
            Station: <span className="text-blue-400">RADAR-01</span> | 
            Status: <span className="text-green-400">ACTIVE</span> | 
            Time: <span className="text-yellow-400">{new Date().toLocaleTimeString()}</span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Radar Display */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/50 border border-cyan-300/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-cyan-300 mb-4">Radar Display</h2>
              <div className="bg-black border border-gray-600 rounded-lg p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 border-2 border-cyan-300 rounded-full mx-auto mb-4 animate-pulse"></div>
                  <p className="text-gray-400">Radar Sweep Active</p>
                  <p className="text-sm text-gray-500">360° Coverage</p>
                </div>
              </div>
            </div>

            {/* Track Information */}
            <div className="mt-6 bg-gray-800/50 border border-cyan-300/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-cyan-300 mb-4">Active Tracks</h2>
              <div className="space-y-3">
                <div className="bg-gray-700/50 p-3 rounded border border-gray-600">
                  <div className="flex justify-between items-center">
                    <span className="text-cyan-300 font-medium">TRK-001</span>
                    <span className="text-green-400">FRIENDLY</span>
                  </div>
                  <p className="text-sm text-gray-400">Altitude: 3,500ft | Speed: 180kts</p>
                </div>
                <div className="bg-gray-700/50 p-3 rounded border border-gray-600">
                  <div className="flex justify-between items-center">
                    <span className="text-cyan-300 font-medium">TRK-002</span>
                    <span className="text-yellow-400">UNKNOWN</span>
                  </div>
                  <p className="text-sm text-gray-400">Altitude: 2,100ft | Speed: 95kts</p>
                </div>
                <div className="bg-gray-700/50 p-3 rounded border border-gray-600">
                  <div className="flex justify-between items-center">
                    <span className="text-cyan-300 font-medium">TRK-003</span>
                    <span className="text-green-400">FRIENDLY</span>
                  </div>
                  <p className="text-sm text-gray-400">Altitude: 5,200ft | Speed: 220kts</p>
                </div>
              </div>
            </div>
          </div>

          {/* Control Panel */}
          <div className="space-y-6">
            <div className="bg-gray-800/50 border border-cyan-300/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-cyan-300 mb-4">Radar Controls</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Range</span>
                  <span className="text-blue-400">50nm</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Mode</span>
                  <span className="text-green-400">SEARCH</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Power</span>
                  <span className="text-green-400">100%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Frequency</span>
                  <span className="text-yellow-400">2.8GHz</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-cyan-300/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-cyan-300 mb-4">System Status</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Primary Radar</span>
                  <span className="text-green-400">● ONLINE</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Secondary Radar</span>
                  <span className="text-green-400">● ONLINE</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">IFF System</span>
                  <span className="text-green-400">● ACTIVE</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Data Link</span>
                  <span className="text-green-400">● CONNECTED</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-cyan-300/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-cyan-300 mb-4">Alerts</h2>
              <div className="space-y-2 text-sm">
                <div className="text-yellow-400">⚠ Low altitude track detected</div>
                <div className="text-blue-400">ℹ Weather update available</div>
                <div className="text-green-400">✓ System check completed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center text-sm text-gray-500">
          <p>ROKAF DCRC - Radar Controller Workstation</p>
          <p>Classified System - Authorized Personnel Only</p>
        </footer>
      </div>
    </div>
  );
}
