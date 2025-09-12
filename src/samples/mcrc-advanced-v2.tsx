'use client';

import React from 'react';

export default function MCRCAdvancedV2() {
  return (
    <div className="min-h-screen bg-gray-900 text-green-300 font-mono p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-cyan-300 mb-2">ROKAF MCRC Advanced V2</h1>
          <p className="text-lg text-gray-400">Master Control & Reporting Center</p>
          <div className="mt-4 text-sm text-gray-500">
            Status: <span className="text-green-400">OPERATIONAL</span> | 
            Time: <span className="text-yellow-400">{new Date().toLocaleTimeString()}</span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Control Panel */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/50 border border-cyan-300/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-cyan-300 mb-4">Control Dashboard</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-700/50 p-4 rounded border border-gray-600">
                  <h3 className="text-sm font-medium text-gray-300 mb-2">Active Tracks</h3>
                  <div className="text-2xl font-bold text-green-400">24</div>
                </div>
                <div className="bg-gray-700/50 p-4 rounded border border-gray-600">
                  <h3 className="text-sm font-medium text-gray-300 mb-2">Threat Level</h3>
                  <div className="text-2xl font-bold text-yellow-400">BRAVO</div>
                </div>
                <div className="bg-gray-700/50 p-4 rounded border border-gray-600">
                  <h3 className="text-sm font-medium text-gray-300 mb-2">Sectors</h3>
                  <div className="text-2xl font-bold text-blue-400">9</div>
                </div>
                <div className="bg-gray-700/50 p-4 rounded border border-gray-600">
                  <h3 className="text-sm font-medium text-gray-300 mb-2">Operators</h3>
                  <div className="text-2xl font-bold text-purple-400">18</div>
                </div>
              </div>
            </div>
          </div>

          {/* Status Panel */}
          <div className="space-y-6">
            <div className="bg-gray-800/50 border border-cyan-300/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-cyan-300 mb-4">System Status</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Radar Systems</span>
                  <span className="text-green-400">● ONLINE</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Comm Systems</span>
                  <span className="text-green-400">● ONLINE</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">AI Analysis</span>
                  <span className="text-green-400">● ACTIVE</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Defense Grid</span>
                  <span className="text-yellow-400">● STANDBY</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-cyan-300/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-cyan-300 mb-4">Recent Activity</h2>
              <div className="space-y-2 text-sm">
                <div className="text-gray-400">14:32 - Track ID-2471 identified</div>
                <div className="text-gray-400">14:28 - Sector KE-12 status update</div>
                <div className="text-gray-400">14:25 - Comm channel established</div>
                <div className="text-gray-400">14:22 - Threat assessment complete</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center text-sm text-gray-500">
          <p>ROKAF DCRC - Drone Control and Reporting Center</p>
          <p>Classified System - Authorized Personnel Only</p>
        </footer>
      </div>
    </div>
  );
}
