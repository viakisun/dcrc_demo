'use client';

import React from 'react';

export default function SectorKE14Operations() {
  return (
    <div className="min-h-screen bg-gray-900 text-green-300 font-mono p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-cyan-300 mb-2">Sector KE-14 Operations</h1>
          <p className="text-lg text-gray-400">Detailed Sector Operations Center</p>
          <div className="mt-4 text-sm text-gray-500">
            Sector: <span className="text-blue-400">KE-14</span> | 
            Status: <span className="text-green-400">ACTIVE</span> | 
            Time: <span className="text-yellow-400">{new Date().toLocaleTimeString()}</span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Operations Panel */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/50 border border-cyan-300/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-cyan-300 mb-4">Sector Operations</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-700/50 p-4 rounded border border-gray-600">
                  <h3 className="text-sm font-medium text-gray-300 mb-2">Active Missions</h3>
                  <div className="text-2xl font-bold text-green-400">8</div>
                </div>
                <div className="bg-gray-700/50 p-4 rounded border border-gray-600">
                  <h3 className="text-sm font-medium text-gray-300 mb-2">Operators</h3>
                  <div className="text-2xl font-bold text-blue-400">6</div>
                </div>
                <div className="bg-gray-700/50 p-4 rounded border border-gray-600">
                  <h3 className="text-sm font-medium text-gray-300 mb-2">Comm Channels</h3>
                  <div className="text-2xl font-bold text-purple-400">12</div>
                </div>
                <div className="bg-gray-700/50 p-4 rounded border border-gray-600">
                  <h3 className="text-sm font-medium text-gray-300 mb-2">Alert Level</h3>
                  <div className="text-2xl font-bold text-yellow-400">GREEN</div>
                </div>
              </div>
            </div>

            {/* Operator Stations */}
            <div className="mt-6 bg-gray-800/50 border border-cyan-300/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-cyan-300 mb-4">Operator Stations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-700/50 p-4 rounded border border-gray-600">
                  <h3 className="text-sm font-medium text-cyan-300 mb-2">Station OPS-01</h3>
                  <p className="text-xs text-gray-400 mb-2">Flight Controller</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Status:</span>
                    <span className="text-green-400">● ACTIVE</span>
                  </div>
                </div>
                <div className="bg-gray-700/50 p-4 rounded border border-gray-600">
                  <h3 className="text-sm font-medium text-cyan-300 mb-2">Station OPS-02</h3>
                  <p className="text-xs text-gray-400 mb-2">Radar Controller</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Status:</span>
                    <span className="text-green-400">● ACTIVE</span>
                  </div>
                </div>
                <div className="bg-gray-700/50 p-4 rounded border border-gray-600">
                  <h3 className="text-sm font-medium text-cyan-300 mb-2">Station OPS-03</h3>
                  <p className="text-xs text-gray-400 mb-2">Data Analyst</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Status:</span>
                    <span className="text-yellow-400">● STANDBY</span>
                  </div>
                </div>
                <div className="bg-gray-700/50 p-4 rounded border border-gray-600">
                  <h3 className="text-sm font-medium text-cyan-300 mb-2">Station OPS-04</h3>
                  <p className="text-xs text-gray-400 mb-2">Comm Coordinator</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Status:</span>
                    <span className="text-green-400">● ACTIVE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Status Panel */}
          <div className="space-y-6">
            <div className="bg-gray-800/50 border border-cyan-300/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-cyan-300 mb-4">Sector Status</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Airspace</span>
                  <span className="text-green-400">● CLEAR</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Weather</span>
                  <span className="text-blue-400">● GOOD</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Radar Coverage</span>
                  <span className="text-green-400">● 100%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Comm Links</span>
                  <span className="text-green-400">● STABLE</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-cyan-300/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-cyan-300 mb-4">Recent Activity</h2>
              <div className="space-y-2 text-sm">
                <div className="text-gray-400">14:35 - Mission ALPHA-7 completed</div>
                <div className="text-gray-400">14:30 - New track detected</div>
                <div className="text-gray-400">14:28 - Comm check completed</div>
                <div className="text-gray-400">14:25 - Weather update received</div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-cyan-300/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-cyan-300 mb-4">Active Missions</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">ALPHA-7</span>
                  <span className="text-green-400">COMPLETE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">BETA-3</span>
                  <span className="text-blue-400">ACTIVE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">GAMMA-1</span>
                  <span className="text-yellow-400">STANDBY</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center text-sm text-gray-500">
          <p>ROKAF MCRC - Sector KE-14 Operations</p>
          <p>Classified System - Authorized Personnel Only</p>
        </footer>
      </div>
    </div>
  );
}
