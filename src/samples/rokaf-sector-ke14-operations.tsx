import React, { useState, useEffect } from 'react';
import { 
  Target, Radio,
  AlertTriangle,
  Users, Settings,
  BarChart3,
  MessageSquare,
  Crosshair
} from 'lucide-react';

type OperatorStatus = 'ACTIVE' | 'STANDBY' | 'OFFLINE';
type Workload = 'HIGH' | 'MODERATE' | 'LOW' | 'NORMAL';
type TrackStatus = 'FRIENDLY' | 'UNKNOWN' | 'HOSTILE';

interface Operator {
  id: string;
  role: string;
  operator: string;
  station: string;
  responsibility: string;
  status: OperatorStatus;
  workload: Workload;
  commChannels: string[];
}

interface SectorTrack {
  id: string;
  callsign: string;
  type: string;
  position: { x: number; y: number };
  vector: { dx: number; dy: number };
  altitude: number;
  speed: number;
  heading: number;
  status: TrackStatus;
  mission: string;
  fuel: number | string;
  controller: string;
  pilot: string;
  commsFreq: string;
  squawk: string;
  lastContact: string;
}

import { Filter, Zap } from 'lucide-react';

const ROKAFSectorKE14Detail = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedOperator, setSelectedOperator] = useState('OPS-01');
  const [alertStatus, setAlertStatus] = useState('GREEN');
  const [selectedTrack, setSelectedTrack] = useState<SectorTrack | null>(null);
  const [filters, setFilters] = useState({
    friendly: true,
    unknown: true,
    hostile: false, // No hostile tracks in this sample
    air: true,
    helo: true,
  });

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFilters(prev => ({ ...prev, [name]: checked }));
  };

  const operatorStations: Operator[] = [
    {
      id: 'OPS-01',
      role: 'SECTOR COMMANDER',
      operator: 'CPT Park M.S.',
      station: 'COMMAND CONSOLE',
      responsibility: 'Overall Sector Control',
      status: 'ACTIVE',
      workload: 'MODERATE',
      commChannels: ['COMMAND', 'INTER-SECTOR', 'EMERGENCY']
    },
    {
      id: 'OPS-02', 
      role: 'RADAR CONTROLLER',
      operator: 'LT Kim J.W.',
      station: 'RADAR SCOPE A',
      responsibility: 'Primary Radar Monitoring',
      status: 'ACTIVE',
      workload: 'HIGH',
      commChannels: ['RADAR-NET', 'PILOT-COMMS', 'TRACKER']
    },
    {
      id: 'OPS-03',
      role: 'FLIGHT CONTROLLER', 
      operator: 'SrA Lee H.S.',
      station: 'FLIGHT CONTROL',
      responsibility: 'Aircraft Vectoring',
      status: 'ACTIVE',
      workload: 'HIGH',
      commChannels: ['AIR-GROUND', 'APPROACH', 'TOWER']
    },
    {
      id: 'OPS-04',
      role: 'DATA ANALYST',
      operator: 'SSG Choi M.K.',
      station: 'DATA TERMINAL',
      responsibility: 'Threat Analysis & Intel',
      status: 'ACTIVE', 
      workload: 'MODERATE',
      commChannels: ['INTEL-NET', 'DATA-LINK', 'FUSION']
    },
    {
      id: 'OPS-05',
      role: 'COMM COORDINATOR',
      operator: 'SrA Jung D.H.',
      station: 'COMMS CONSOLE',
      responsibility: 'Communications Management',
      status: 'ACTIVE',
      workload: 'MODERATE',
      commChannels: ['ALL-NETS', 'SATCOM', 'CRYPTO']
    },
    {
      id: 'OPS-06',
      role: 'BACKUP CONTROLLER',
      operator: 'A1C Park S.J.',
      station: 'BACKUP STATION',
      responsibility: 'Standby & Support',
      status: 'STANDBY',
      workload: 'LOW',
      commChannels: ['BACKUP-NET', 'TRAINING']
    }
  ];

  const sectorTracks: SectorTrack[] = [
    {
      id: 'KE14-001',
      callsign: 'VIPER-03',
      type: 'F-16C',
      position: { x: 180, y: 220 },
      vector: { dx: -5, dy: 8 },
      altitude: 25000,
      speed: 420,
      heading: 78,
      status: 'FRIENDLY',
      mission: 'CAP',
      fuel: 72,
      controller: 'OPS-03',
      pilot: 'CPT Kim D.W.',
      commsFreq: '251.75',
      squawk: '7701',
      lastContact: '30 sec ago'
    },
    {
      id: 'KE14-002', 
      callsign: 'CARGO-12',
      type: 'C-130J',
      position: { x: 220, y: 180 },
      vector: { dx: 12, dy: -3 },
      altitude: 15000,
      speed: 280,
      heading: 125,
      status: 'FRIENDLY',
      mission: 'TRANSPORT',
      fuel: 85,
      controller: 'OPS-02',
      pilot: 'MAJ Lee S.H.',
      commsFreq: '243.00',
      squawk: '7702',
      lastContact: '45 sec ago'
    },
    {
      id: 'KE14-003',
      callsign: 'UNKNOWN',
      type: '?',
      position: { x: 160, y: 160 },
      vector: { dx: 18, dy: 12 },
      altitude: 32000,
      speed: 540,
      heading: 45,
      status: 'UNKNOWN',
      mission: '?',
      fuel: '?',
      controller: 'OPS-04',
      pilot: '?',
      commsFreq: 'NO RESPONSE',
      squawk: '7600',
      lastContact: 'NO CONTACT'
    },
    {
      id: 'KE14-004',
      callsign: 'RESCUE-07',
      type: 'UH-60',
      position: { x: 200, y: 240 },
      vector: { dx: -2, dy: -6 },
      altitude: 2000,
      speed: 140,
      heading: 275,
      status: 'FRIENDLY',
      mission: 'SAR',
      fuel: 65,
      controller: 'OPS-03',
      pilot: 'CPT Yoon H.J.',
      commsFreq: '255.40',
      squawk: '7703',
      lastContact: '15 sec ago'
    },
    {
      id: 'KE14-005',
      callsign: 'HAWK-15',
      type: 'KAI-Surion',
      position: { x: 260, y: 200 },
      vector: { dx: 8, dy: -10 },
      altitude: 8000,
      speed: 160,
      heading: 310,
      status: 'FRIENDLY',
      mission: 'MEDEVAC',
      fuel: 78,
      controller: 'OPS-02',
      pilot: 'CPT Lim J.S.',
      commsFreq: '279.15',
      squawk: '7704',
      lastContact: '20 sec ago'
    }
  ];

  const [commLog] = useState([
    { time: new Date(), from: 'VIPER-03', to: 'OPS-03', message: 'Request vector to target area Alpha', priority: 'ROUTINE', channel: 'AIR-GROUND' },
    { time: new Date(Date.now() - 30000), from: 'OPS-04', to: 'INTEL-NET', message: 'Unknown track classification request - Squawk 7600', priority: 'PRIORITY', channel: 'DATA-LINK' },
    { time: new Date(Date.now() - 60000), from: 'CARGO-12', to: 'OPS-02', message: 'Requesting flight level change to FL200 due weather', priority: 'ROUTINE', channel: 'AIR-GROUND' },
    { time: new Date(Date.now() - 90000), from: 'OPS-01', to: 'MCRC', message: 'KE-14 sector status normal, 5 active tracks', priority: 'ROUTINE', channel: 'COMMAND' },
    { time: new Date(Date.now() - 120000), from: 'RESCUE-07', to: 'OPS-03', message: 'Medical emergency, requesting priority handling', priority: 'URGENT', channel: 'SAR-COORD' }
  ]);

  const filteredTracks = sectorTracks.filter(track => {
    if (track.status === 'FRIENDLY' && !filters.friendly) return false;
    if (track.status === 'UNKNOWN' && !filters.unknown) return false;
    if (track.status === 'HOSTILE' && !filters.hostile) return false;
    const type = track.type.toLowerCase();
    if ((type.includes('f-16') || type.includes('c-130')) && !filters.air) return false;
    if ((type.includes('uh-60') || type.includes('surion')) && !filters.helo) return false;
    return true;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const renderOperatorStation = (operator: Operator) => {
    const isSelected = selectedOperator === operator.id;
    const statusColors: Record<OperatorStatus, string> = {
      'ACTIVE': 'border-green-500 bg-green-900/20',
      'STANDBY': 'border-yellow-500 bg-yellow-900/20',
      'OFFLINE': 'border-red-500 bg-red-900/20'
    };

    const workloadColors: Record<Workload, string> = {
      'HIGH': 'text-red-400',
      'MODERATE': 'text-yellow-400', 
      'LOW': 'text-green-400',
      'NORMAL': 'text-green-400'
    };

    return (
      <div 
        key={operator.id}
        className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
          isSelected ? 'border-blue-500 bg-blue-900/30' : statusColors[operator.status]
        }`}
        onClick={() => setSelectedOperator(operator.id)}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${
              operator.status === 'ACTIVE' ? 'bg-green-500 animate-pulse' :
              operator.status === 'STANDBY' ? 'bg-yellow-500' : 'bg-red-500'
            }`}></div>
            <span className="text-green-300 font-bold text-sm">{operator.id}</span>
          </div>
          <span className={`text-xs font-bold ${workloadColors[operator.workload]}`}>
            {operator.workload}
          </span>
        </div>
        
        <div className="space-y-1 text-xs">
          <div className="text-green-400 font-bold">{operator.role}</div>
          <div className="text-green-300">{operator.operator}</div>
          <div className="text-green-600">{operator.station}</div>
          <div className="text-blue-400">{operator.responsibility}</div>
          
          <div className="flex flex-wrap gap-1 mt-2">
            {operator.commChannels.slice(0, 2).map((channel: string) => (
              <span key={channel} className="bg-purple-900/50 text-purple-300 px-1 py-0.5 rounded text-[10px]">
                {channel}
              </span>
            ))}
            {operator.commChannels.length > 2 && (
              <span className="text-purple-400 text-[10px]">+{operator.commChannels.length - 2}</span>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderTrack = (track: SectorTrack) => {
    const colors: Record<TrackStatus, string> = {
      'FRIENDLY': 'text-green-400 bg-green-900/30 border-green-400',
      'UNKNOWN': 'text-yellow-400 bg-yellow-900/30 border-yellow-400',
      'HOSTILE': 'text-red-400 bg-red-900/30 border-red-400'
    };

    return (
      <div key={track.id} className="absolute">
        <div 
          className={`absolute ${colors[track.status]} border-2 rounded-lg p-2 text-[10px] font-mono transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:bg-opacity-80 transition-all shadow-lg min-w-24`}
          style={{ 
            left: `${track.position.x}px`, 
            top: `${track.position.y}px`
          }}
          onClick={() => setSelectedTrack(track)}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-[9px] font-bold">{track.callsign}</span>
            <span className="text-[8px] text-blue-400">{track.controller}</span>
          </div>
          <div className="space-y-0.5">
            <div>{track.type}</div>
            <div>FL{Math.floor(track.altitude/100)}</div>
            <div>{track.speed}kt</div>
            <div>HDG {track.heading.toString().padStart(3, '0')}</div>
            <div className="text-purple-400">SQ {track.squawk}</div>
          </div>
        </div>
        
        <svg 
          className="absolute pointer-events-none"
          style={{ 
            left: `${track.position.x}px`, 
            top: `${track.position.y}px`,
            transform: 'translate(-50%, -50%)'
          }}
          width="60" 
          height="60"
        >
          <defs>
            <marker id={`arrow-${track.id}`} markerWidth="6" markerHeight="4" 
              refX="5" refY="2" orient="auto">
              <polygon 
                points="0 0, 6 2, 0 4"
                fill={track.status === 'FRIENDLY' ? '#4ade80' : track.status === 'UNKNOWN' ? '#facc15' : '#f87171'}
              />
            </marker>
          </defs>
          <line 
            x1="30" 
            y1="30" 
            x2={30 + (track.speed / 30) * Math.cos(track.heading * Math.PI / 180)} 
            y2={30 + (track.speed / 30) * Math.sin(track.heading * Math.PI / 180)}
            stroke={track.status === 'FRIENDLY' ? '#4ade80' : track.status === 'UNKNOWN' ? '#facc15' : '#f87171'}
            strokeWidth="2"
            markerEnd={`url(#arrow-${track.id})`}
          />
        </svg>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-green-300 font-mono flex flex-col">
      {/* Header */}
      <header className="bg-gray-800/80 border-b border-green-800/50 p-3 flex justify-between items-center text-sm backdrop-blur-sm">
        <div className="flex items-center space-x-4">
          <h1 className="font-bold text-xl text-cyan-400">SECTOR KE-14 OPERATIONS</h1>
          <div className="text-xs">TIME: {currentTime.toLocaleTimeString('en-US', { hour12: false })}Z</div>
        </div>
        <div className={`border-2 p-2 rounded-lg ${
          alertStatus === 'GREEN' ? 'border-green-500' :
          alertStatus === 'YELLOW' ? 'border-yellow-500' : 'border-red-500'
        }`}>
          <div className="flex items-center space-x-2">
            <AlertTriangle className={`w-6 h-6 ${
              alertStatus === 'GREEN' ? 'text-green-500' :
              alertStatus === 'YELLOW' ? 'text-yellow-500' : 'text-red-500'
            }`} />
            <span className="font-bold text-lg">ALERT STATUS: {alertStatus}</span>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Settings className="w-5 h-5 cursor-pointer hover:text-cyan-300" />
          <Users className="w-5 h-5 cursor-pointer hover:text-cyan-300" />
          <BarChart3 className="w-5 h-5 cursor-pointer hover:text-cyan-300" />
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar: Operator Stations */}
        <aside className="w-1/4 bg-gray-800/50 border-r border-green-800/50 p-3 flex flex-col space-y-4">
          <div>
            <h2 className="text-lg font-bold text-center text-cyan-400 mb-3">OPERATOR STATIONS</h2>
            <div className="grid grid-cols-1 gap-3 max-h-96 overflow-y-auto">
              {operatorStations.map(renderOperatorStation)}
            </div>
          </div>
          <div className="flex-grow space-y-4">
            <div className="bg-gray-900/50 rounded p-2">
                <h3 className="text-cyan-400 font-bold text-sm mb-2 flex items-center"><Filter className="w-4 h-4 mr-2" />Filters</h3>
                <div className="space-y-1 text-xs">
                    <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" name="friendly" checked={filters.friendly} onChange={handleFilterChange} className="form-checkbox bg-gray-700 border-gray-600 text-green-500" />
                        <span>Friendly</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" name="unknown" checked={filters.unknown} onChange={handleFilterChange} className="form-checkbox bg-gray-700 border-gray-600 text-yellow-500" />
                        <span>Unknown</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" name="air" checked={filters.air} onChange={handleFilterChange} className="form-checkbox bg-gray-700 border-gray-600 text-blue-500" />
                        <span>Fixed-Wing</span>
                    </label>
                     <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" name="helo" checked={filters.helo} onChange={handleFilterChange} className="form-checkbox bg-gray-700 border-gray-600 text-purple-500" />
                        <span>Helicopters</span>
                    </label>
                </div>
            </div>
            <div className="bg-gray-900/50 rounded p-2">
                <h3 className="text-cyan-400 font-bold text-sm mb-2 flex items-center"><Zap className="w-4 h-4 mr-2" />Actions</h3>
                <div className="space-y-2">
                    <button disabled={!selectedTrack} className="w-full text-xs bg-blue-800 hover:bg-blue-700 text-white py-1 px-2 rounded disabled:bg-gray-600 disabled:cursor-not-allowed">VECTOR</button>
                    <button disabled={!selectedTrack} className="w-full text-xs bg-yellow-800 hover:bg-yellow-700 text-white py-1 px-2 rounded disabled:bg-gray-600 disabled:cursor-not-allowed">HANDOVER</button>
                    <button disabled={!selectedTrack || selectedTrack.status !== 'UNKNOWN'} className="w-full text-xs bg-red-800 hover:bg-red-700 text-white py-1 px-2 rounded disabled:bg-gray-600 disabled:cursor-not-allowed">WARN</button>
                </div>
            </div>
          </div>
        </aside>

        {/* Center: Tactical Map */}
        <main className="flex-1 bg-black/50 relative" style={{
          background: 'radial-gradient(circle, #001a00 1px, transparent 1px), repeating-linear-gradient(0deg, transparent, transparent 24px, #002a00 25px), repeating-linear-gradient(90deg, transparent, transparent 24px, #002a00 25px)',
          backgroundSize: '25px 25px, 100% 25px, 25px 100%',
        }}>
          {filteredTracks.map(renderTrack)}
        </main>

        {/* Right Sidebar: Track Details */}
        <aside className="w-1/4 bg-gray-800/50 border-l border-green-800/50 p-3 overflow-y-auto">
            <h2 className="text-lg font-bold text-center text-cyan-400 mb-3">TRACK DETAILS</h2>
            {selectedTrack ? (
              <div className="text-xs space-y-3">
                <h3 className={`font-bold text-base text-center mb-2 text-${selectedTrack.status === 'FRIENDLY' ? 'green' : selectedTrack.status === 'UNKNOWN' ? 'yellow' : 'red'}-400`}>
                  {selectedTrack.callsign} [{selectedTrack.id}]
                </h3>
                <div className="space-y-2">
                    <div className="p-2 bg-gray-900/50 rounded">
                        <div className="font-bold text-yellow-400 mb-1">Mission & Status</div>
                        <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                            <span>Status:</span> <span className={`font-bold text-${selectedTrack.status === 'FRIENDLY' ? 'green' : selectedTrack.status === 'UNKNOWN' ? 'yellow' : 'red'}-400`}>{selectedTrack.status}</span>
                            <span>Mission:</span> <span>{selectedTrack.mission}</span>
                            <span>Controller:</span> <span>{selectedTrack.controller}</span>
                            <span>Pilot:</span> <span>{selectedTrack.pilot}</span>
                        </div>
                    </div>
                     <div className="p-2 bg-gray-900/50 rounded">
                        <div className="font-bold text-yellow-400 mb-1">Flight Data</div>
                        <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                            <span>Altitude:</span> <span>{selectedTrack.altitude} ft</span>
                            <span>Speed:</span> <span>{selectedTrack.speed} kts</span>
                            <span>Heading:</span> <span>{selectedTrack.heading}°</span>
                            <span>Fuel:</span> <span>{selectedTrack.fuel}{typeof selectedTrack.fuel === 'number' && '%'}</span>
                        </div>
                    </div>
                    <div className="p-2 bg-gray-900/50 rounded">
                        <div className="font-bold text-yellow-400 mb-1">System & Comms</div>
                         <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                            <span>Squawk:</span><span className="text-purple-400">{selectedTrack.squawk}</span>
                            <span>Comm Freq:</span><span>{selectedTrack.commsFreq}</span>
                            <span>Last Ping:</span><span>{selectedTrack.lastContact}</span>
                        </div>
                    </div>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500 pt-10">No Track Selected</div>
            )}
        </aside>
      </div>

      {/* Footer / Comms Log */}
      <footer className="h-40 bg-gray-800/80 border-t border-green-800/50 p-3 flex flex-col backdrop-blur-sm">
        <h2 className="text-lg font-bold text-cyan-400 mb-2 flex items-center"><MessageSquare className="w-5 h-5 mr-2" />COMMS LOG</h2>
        <div className="flex-1 overflow-y-auto text-xs space-y-1">
          {commLog.map((log, index) => (
            <div key={index} className="flex space-x-2 items-start">
              <span className="text-gray-500">{log.time.toLocaleTimeString('en-US', { hour12: false })}</span>
              <span className={`font-bold w-24 ${log.priority === 'URGENT' ? 'text-red-500' : log.priority === 'PRIORITY' ? 'text-yellow-500' : 'text-green-500'}`}>{log.from} &gt; {log.to}</span>
              <p className="flex-1 text-gray-300">{log.message}</p>
              <span className="text-purple-400 text-[10px]">({log.channel})</span>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default ROKAFSectorKE14Detail;