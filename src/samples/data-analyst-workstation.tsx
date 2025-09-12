'use client';

import React from 'react';

export default function DataAnalystWorkstation() {
  return (
    <div className="min-h-screen bg-gray-900 text-green-300 font-mono p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-cyan-300 mb-2">Data Analyst Workstation</h1>
          <p className="text-lg text-gray-400">Intelligence Analysis & Data Processing Center</p>
          <div className="mt-4 text-sm text-gray-500">
            Station: <span className="text-blue-400">ANALYST-01</span> | 
            Status: <span className="text-green-400">ACTIVE</span> | 
            Time: <span className="text-yellow-400">{new Date().toLocaleTimeString()}</span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Analysis Panel */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/50 border border-cyan-300/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-cyan-300 mb-4">Data Analysis Dashboard</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-700/50 p-4 rounded border border-gray-600">
                  <h3 className="text-sm font-medium text-gray-300 mb-2">Processed Reports</h3>
                  <div className="text-2xl font-bold text-green-400">1,247</div>
                </div>
                <div className="bg-gray-700/50 p-4 rounded border border-gray-600">
                  <h3 className="text-sm font-medium text-gray-300 mb-2">Active Analysis</h3>
                  <div className="text-2xl font-bold text-blue-400">23</div>
                </div>
                <div className="bg-gray-700/50 p-4 rounded border border-gray-600">
                  <h3 className="text-sm font-medium text-gray-300 mb-2">Threat Assessments</h3>
                  <div className="text-2xl font-bold text-yellow-400">8</div>
                </div>
                <div className="bg-gray-700/50 p-4 rounded border border-gray-600">
                  <h3 className="text-sm font-medium text-gray-300 mb-2">Data Sources</h3>
                  <div className="text-2xl font-bold text-purple-400">15</div>
                </div>
              </div>
            </div>

            {/* Analysis Results */}
            <div className="mt-6 bg-gray-800/50 border border-cyan-300/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-cyan-300 mb-4">Recent Analysis</h2>
              <div className="space-y-3">
                <div className="bg-gray-700/50 p-3 rounded border border-gray-600">
                  <div className="flex justify-between items-center">
                    <span className="text-cyan-300 font-medium">ANALYSIS-001</span>
                    <span className="text-green-400">COMPLETE</span>
                  </div>
                  <p className="text-sm text-gray-400">Pattern analysis of sector KE-14 activity</p>
                </div>
                <div className="bg-gray-700/50 p-3 rounded border border-gray-600">
                  <div className="flex justify-between items-center">
                    <span className="text-cyan-300 font-medium">ANALYSIS-002</span>
                    <span className="text-blue-400">IN PROGRESS</span>
                  </div>
                  <p className="text-sm text-gray-400">Threat correlation analysis</p>
                </div>
                <div className="bg-gray-700/50 p-3 rounded border border-gray-600">
                  <div className="flex justify-between items-center">
                    <span className="text-cyan-300 font-medium">ANALYSIS-003</span>
                    <span className="text-yellow-400">PENDING</span>
                  </div>
                  <p className="text-sm text-gray-400">Weather impact assessment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Analysis Tools */}
          <div className="space-y-6">
            <div className="bg-gray-800/50 border border-cyan-300/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-cyan-300 mb-4">Analysis Tools</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Pattern Recognition</span>
                  <span className="text-green-400">● ACTIVE</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Threat Assessment</span>
                  <span className="text-green-400">● ACTIVE</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Data Mining</span>
                  <span className="text-blue-400">● STANDBY</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Predictive Analysis</span>
                  <span className="text-green-400">● ACTIVE</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-cyan-300/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-cyan-300 mb-4">Data Sources</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">Radar Data</span>
                  <span className="text-green-400">ONLINE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Satellite Intel</span>
                  <span className="text-green-400">ONLINE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Field Reports</span>
                  <span className="text-blue-400">STANDBY</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Weather Data</span>
                  <span className="text-green-400">ONLINE</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-cyan-300/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-cyan-300 mb-4">Alerts</h2>
              <div className="space-y-2 text-sm">
                <div className="text-yellow-400">⚠ Unusual pattern detected</div>
                <div className="text-blue-400">ℹ New data available</div>
                <div className="text-green-400">✓ Analysis queue updated</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center text-sm text-gray-500">
          <p>ROKAF DCRC - Data Analyst Workstation</p>
          <p>Classified System - Authorized Personnel Only</p>
        </footer>
      </div>
    </div>
  );
}
