import React, { useState, useEffect, useCallback } from 'react';
import { 
  Radar, Target, Plane, Activity, Settings, Flame, Zap, Skull, Crosshair, Radio, CloudRain
} from 'lucide-react';

type TrackStatus = 'FRIENDLY' | 'UNKNOWN' | 'HOSTILE';
type ThreatStatus = 'HIGH' | 'MEDIUM' | 'LOW';

interface Track {
  id: string;
  callsign: string;
  type: string;
  mission: string;
  position: { x: number; y: number };
  vector: { dx: number; dy: number };
  speed: number;
  altitude: number;
  status: TrackStatus;
  controller: string;
  fuel?: number | string;
  weapons?: string;
  pilot?: string;
  eta?: string;
}

interface GroundThreat {
  id: string;
  type: string;
  position: { x: number; y: number };
  range: number;
  status: string;
  threat: ThreatStatus;
}

const ROKAFMCRCAdvanced = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedGrid, setSelectedGrid] = useState('KE-12');
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);
  const [selectedThreat, setSelectedThreat] = useState<GroundThreat | null>(null);
  const [threatLevel] = useState('FPCON-BRAVO');
  const [radarMode, setRadarMode] = useState('WIDE_AREA');
  const [showTrails, setShowTrails] = useState(true);
  const [alertLevel, setAlertLevel] = useState('NORMAL');
  const [filters, setFilters] = useState({
    friendly: true,
    unknown: true,
    hostile: true,
    ground: true,
  });

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFilters(prev => ({ ...prev, [name]: checked }));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const gridSectors = [
    { id: 'IE-06', controller: 'LT Col Park S.H.', tracks: 8, threat: 'LOW', activity: 'NORMAL', color: 'green' },
    { id: 'IE-10', controller: 'MAJ Kim D.W.', tracks: 15, threat: 'LOW', activity: 'PATROL', color: 'green' },
    { id: 'IE-14', controller: 'CPT Lee J.S.', tracks: 12, threat: 'MEDIUM', activity: 'ALERT', color: 'yellow' },
    { id: 'JE-06', controller: 'MAJ Choi H.K.', tracks: 23, threat: 'LOW', activity: 'NORMAL', color: 'green' },
    { id: 'JE-10', controller: 'CPT Park J.H.', tracks: 31, threat: 'HIGH', activity: 'INTERCEPT', color: 'red' },
    { id: 'JE-14', controller: 'LT Kim M.J.', tracks: 18, threat: 'MEDIUM', activity: 'CAP', color: 'yellow' },
    { id: 'KE-06', controller: 'COL Jung S.M.', tracks: 45, threat: 'CRITICAL', activity: 'SCRAMBLE', color: 'red' },
    { id: 'KE-10', controller: 'MAJ Jung H.W.', tracks: 38, threat: 'HIGH', activity: 'VECTOR', color: 'red' },
    { id: 'KE-14', controller: 'CPT Park M.S.', tracks: 27, threat: 'MEDIUM', activity: 'MONITOR', color: 'yellow' },
    { id: 'LE-06', controller: 'LT Song K.Y.', tracks: 19, threat: 'LOW', activity: 'PATROL', color: 'green' },
    { id: 'LE-10', controller: 'CPT Kim J.H.', tracks: 33, threat: 'MEDIUM', activity: 'ALERT', color: 'yellow' },
    { id: 'LE-14', controller: 'MAJ Lee D.S.', tracks: 22, threat: 'LOW', activity: 'NORMAL', color: 'green' },
    { id: 'ME-06', controller: 'CPT Yoo H.J.', tracks: 14, threat: 'LOW', activity: 'SEARCH', color: 'green' },
    { id: 'ME-10', controller: 'MAJ Seo M.K.', tracks: 26, threat: 'MEDIUM', activity: 'TRACK', color: 'yellow' },
    { id: 'ME-14', controller: 'LT Col Lim J.W.', tracks: 17, threat: 'LOW', activity: 'NORMAL', color: 'green' }
  ];

  const activeTracks: Track[] = [
    { 
      id: 'KAF001', callsign: 'VIPER-01', type: 'F-16C', mission: 'CAP',
      position: { x: 420, y: 180 }, vector: { dx: -8, dy: 6 },
      speed: 420, altitude: 28000, status: 'FRIENDLY', controller: 'KE-10',
      fuel: 68, weapons: 'AIM-120C x4', pilot: 'CPT Kim S.H.', eta: '15:30Z'
    },
    { 
      id: 'UAV001', callsign: 'HAWK-01', type: 'MQ-9 Reaper', mission: 'ISR',
      position: { x: 340, y: 200 }, vector: { dx: 3, dy: -2 },
      speed: 135, altitude: 18000, status: 'FRIENDLY', controller: 'JE-14',
      fuel: 92, weapons: 'Hellfire x2', pilot: 'SGT Kim M.J.', eta: '18:45Z'
    },
    { 
      id: 'UNK001', callsign: 'UNKNOWN-1', type: '?', mission: '?',
      position: { x: 280, y: 160 }, vector: { dx: 18, dy: 12 },
      speed: 540, altitude: 32000, status: 'UNKNOWN', controller: 'JE-06',
      fuel: '?', weapons: '?', pilot: '?', eta: '?'
    },
    { 
      id: 'THR001', callsign: 'BANDIT-1', type: 'J-20?', mission: 'HOSTILE',
      position: { x: 250, y: 140 }, vector: { dx: 22, dy: 15 },
      speed: 620, altitude: 35000, status: 'HOSTILE', controller: 'JE-06',
      fuel: '?', weapons: 'UNKNOWN', pilot: '?', eta: '?'
    },
  ];

  const groundThreats: GroundThreat[] = [
    { id: 'SAM001', type: 'SA-21 GROWLER', position: { x: 230, y: 180 }, range: 400, status: 'ACTIVE', threat: 'HIGH' },
    { id: 'SAM002', type: 'SA-20 GARGOYLE', position: { x: 200, y: 200 }, range: 300, status: 'ACTIVE', threat: 'MEDIUM' },
    { id: 'RAD001', type: 'BIG BIRD RADAR', position: { x: 180, y: 160 }, range: 500, status: 'SCANNING', threat: 'LOW' },
    { id: 'AAA001', type: 'ZSU-23-4', position: { x: 260, y: 220 }, range: 25, status: 'STANDBY', threat: 'LOW' }
  ];

  const filteredTracks = activeTracks.filter(track => {
    if (track.status === 'FRIENDLY' && !filters.friendly) return false;
    if (track.status === 'UNKNOWN' && !filters.unknown) return false;
    if (track.status === 'HOSTILE' && !filters.hostile) return false;
    return true;
  });

  const filteredThreats = filters.ground ? groundThreats : [];

  const renderTrack = (track: Track) => {
    const colors: Record<TrackStatus, string> = {
      'FRIENDLY': 'text-green-400 bg-green-900/30 border-green-400',
      'UNKNOWN': 'text-yellow-400 bg-yellow-900/30 border-yellow-400',
      'HOSTILE': 'text-red-400 bg-red-900/30 border-red-400'
    };

    const shapes: Record<TrackStatus, string> = {
      'FRIENDLY': 'rounded-full',
      'UNKNOWN': 'rounded-sm',
      'HOSTILE': 'rounded-none rotate-45'
    };

    const vectorAngle = Math.atan2(track.vector.dy, track.vector.dx) * 180 / Math.PI;
    const vectorLength = Math.min(track.speed / 25, 25);

    return (
      <div key={track.id} className="absolute">
        <div 
          className={`absolute ${colors[track.status]} ${shapes[track.status]} border-2 p-1.5 text-[10px] font-mono transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:bg-opacity-80 transition-all shadow-lg`}
          style={{ 
            left: `${track.position.x}px`, 
            top: `${track.position.y}px`
          }}
          onClick={() => { setSelectedTrack(track); setSelectedThreat(null); }}
        >
          <div className="flex items-center space-x-1">
            <div className={`w-3 h-3 ${
              track.status === 'FRIENDLY' ? 'bg-green-400' : 
              track.status === 'UNKNOWN' ? 'bg-yellow-400' : 'bg-red-400'
            } ${shapes[track.status]}`}></div>
            <span className="text-[9px] font-bold">{track.callsign}</span>
          </div>
          <div className="text-[8px] mt-1">
            <div>{track.type}</div>
            <div>{track.altitude}ft</div>
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
            <marker id={`arrowhead-${track.id}`} markerWidth="8" markerHeight="6" 
              refX="7" refY="3" orient="auto">
              <polygon 
                points="0 0, 8 3, 0 6"
                fill={
                  track.status === 'FRIENDLY' ? '#4ade80' : 
                  track.status === 'UNKNOWN' ? '#facc15' : '#f87171'
                }
              />
            </marker>
          </defs>
          <line 
            x1="30" 
            y1="30" 
            x2={30 + vectorLength * Math.cos(vectorAngle * Math.PI / 180)} 
            y2={30 + vectorLength * Math.sin(vectorAngle * Math.PI / 180)}
            stroke={
              track.status === 'FRIENDLY' ? '#4ade80' : 
              track.status === 'UNKNOWN' ? '#facc15' : '#f87171'
            }
            strokeWidth="2"
            markerEnd={`url(#arrowhead-${track.id})`}
          />
        </svg>

        {showTrails && (
          <svg 
            className="absolute pointer-events-none"
            style={{ 
              left: `${track.position.x}px`, 
              top: `${track.position.y}px`,
              transform: 'translate(-50%, -50%)'
            }}
            width="120" 
            height="120"
          >
            <path
              d={`M 60,60 L ${60 - track.vector.dx * 3},${60 - track.vector.dy * 3} L ${60 - track.vector.dx * 6},${60 - track.vector.dy * 6} L ${60 - track.vector.dx * 9},${60 - track.vector.dy * 9}`}
              stroke={
                track.status === 'FRIENDLY' ? '#4ade80' : 
                track.status === 'UNKNOWN' ? '#facc15' : '#f87171'
              }
              strokeWidth="1"
              strokeDasharray="3,3"
              opacity="0.4"
              fill="none"
            />
          </svg>
        )}
      </div>
    );
  };

  const renderGroundThreat = (threat: GroundThreat) => {
    const threatColors: Record<ThreatStatus, string> = {
      'HIGH': '#ef4444',
      'MEDIUM': '#f97316', 
      'LOW': '#eab308'
    };

    return (
      <div key={threat.id} className="absolute">
        <svg
          className="absolute pointer-events-none"
          style={{ 
            left: `${threat.position.x}px`, 
            top: `${threat.position.y}px`,
            transform: 'translate(-50%, -50%)'
          }}
          width={threat.range / 2}
          height={threat.range / 2}
        >
          <circle 
            cx={threat.range / 4} 
            cy={threat.range / 4} 
            r={threat.range / 4}
            fill="none"
            stroke={threatColors[threat.threat]}
            strokeWidth="1"
            strokeDasharray="4,4"
            opacity="0.3"
          />
        </svg>
        
        <div 
          className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          style={{ 
            left: `${threat.position.x}px`, 
            top: `${threat.position.y}px`
          }}
          onClick={() => { setSelectedThreat(threat); setSelectedTrack(null); }}
        >
          <div className="bg-red-900/60 border border-red-400 rounded p-1">
            <Skull className="w-3 h-3 text-red-400" />
          </div>
          <div className="text-[8px] text-red-400 text-center mt-1 font-mono">
            {threat.type.split(' ')[0]}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-green-300 font-mono flex flex-col">
      {/* Header */}
      <header className="bg-gray-900/50 border-b border-green-900/50 p-2 flex justify-between items-center text-xs backdrop-blur-sm">
        <div className="flex items-center space-x-4">
          <h1 className="font-bold text-lg text-cyan-400">ROKAF MCRC V2</h1>
          <div>TIME: {currentTime.toISOString().substr(11, 8)}Z</div>
        </div>
        <div className="flex items-center space-x-4">
          <div>FPCON: <span className="text-yellow-400 font-bold">{threatLevel}</span></div>
          <div>ALERT: <span className="text-red-500 font-bold">{alertLevel}</span></div>
        </div>
        <div className="flex items-center space-x-2">
          <Settings className="w-4 h-4" />
          <Radio className="w-4 h-4" />
          <CloudRain className="w-4 h-4" />
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <aside className="w-64 bg-gray-900/70 border-r border-green-900/50 flex flex-col backdrop-blur-sm p-2 space-y-2">
            <div className="bg-gray-800/50 rounded p-2">
                <h3 className="text-cyan-400 font-bold text-sm mb-2">Filters</h3>
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
                        <input type="checkbox" name="hostile" checked={filters.hostile} onChange={handleFilterChange} className="form-checkbox bg-gray-700 border-gray-600 text-red-500" />
                        <span>Hostile</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" name="ground" checked={filters.ground} onChange={handleFilterChange} className="form-checkbox bg-gray-700 border-gray-600 text-orange-500" />
                        <span>Ground Threats</span>
                    </label>
                </div>
            </div>
            <div className="bg-gray-800/50 rounded p-2">
                <h3 className="text-cyan-400 font-bold text-sm mb-2">Actions</h3>
                <div className="space-y-2">
                    <button className="w-full text-xs bg-blue-800 hover:bg-blue-700 text-white py-1 px-2 rounded">REQUEST IFF</button>
                    <button className="w-full text-xs bg-yellow-800 hover:bg-yellow-700 text-white py-1 px-2 rounded">CORRELATE</button>
                    <button className="w-full text-xs bg-red-800 hover:bg-red-700 text-white py-1 px-2 rounded">INTERCEPT</button>
                </div>
            </div>
        </aside>

        {/* Main Map Area */}
        <main className="flex-1 bg-gray-800/80 relative overflow-hidden" style={{
            background: 'radial-gradient(circle, #001a00 1px, transparent 1px), repeating-linear-gradient(0deg, transparent, transparent 19px, #002a00 20px), repeating-linear-gradient(90deg, transparent, transparent 19px, #002a00 20px)',
            backgroundSize: '20px 20px, 100% 20px, 20px 100%',
        }}>
            {filteredTracks.map(renderTrack)}
            {filteredThreats.map(renderGroundThreat)}
        </main>

        {/* Right Sidebar */}
        <aside className="w-80 bg-gray-900/70 border-l border-green-900/50 flex flex-col backdrop-blur-sm">
          {/* Grid Sectors */}
          <div className="p-2 border-b border-green-900/50">
            <h2 className="text-center font-bold text-cyan-400">GRID SECTORS</h2>
          </div>
          <div className="overflow-y-auto text-xs" style={{ flex: '2 1 0%'}}>
            {gridSectors.map(sector => (
              <div key={sector.id} className={`p-2 border-b border-gray-800/50 flex justify-between items-center cursor-pointer hover:bg-green-900/30 ${selectedGrid === sector.id ? 'bg-green-800/50' : ''}`} onClick={() => setSelectedGrid(sector.id)}>
                <div>
                  <span className="font-bold text-cyan-300">{sector.id}</span>
                  <div className="text-[10px] text-gray-400">{sector.controller}</div>
                </div>
                <div className="text-right">
                  <div className={`font-bold text-${sector.color}-400`}>{sector.threat}</div>
                  <div className="text-[10px]">{sector.tracks} Tracks</div>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Item Info */}
          <div className="p-2 border-t border-green-900/50">
            <h2 className="text-center font-bold text-cyan-400">ITEM DETAILS</h2>
          </div>
          <div className="p-3 text-xs space-y-3 overflow-y-auto" style={{ flex: '1 1 0%'}}>
            {selectedTrack && (
              <div>
                <h3 className="font-bold text-base text-cyan-300 mb-2">{selectedTrack.callsign} [{selectedTrack.id}]</h3>
                <div className="space-y-2">
                    <div className="p-2 bg-gray-800/50 rounded">
                        <div className="font-bold text-yellow-400 mb-1">Primary Info</div>
                        <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                            <span>Status:</span> <span className={`font-bold text-${selectedTrack.status === 'FRIENDLY' ? 'green' : selectedTrack.status === 'UNKNOWN' ? 'yellow' : 'red'}-400`}>{selectedTrack.status}</span>
                            <span>Type:</span> <span>{selectedTrack.type}</span>
                            <span>Mission:</span> <span>{selectedTrack.mission}</span>
                            <span>Controller:</span> <span>{selectedTrack.controller}</span>
                        </div>
                    </div>
                    <div className="p-2 bg-gray-800/50 rounded">
                        <div className="font-bold text-yellow-400 mb-1">Flight Data</div>
                        <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                            <span>Altitude:</span> <span>{selectedTrack.altitude} ft</span>
                            <span>Speed:</span> <span>{selectedTrack.speed} kts</span>
                            <span>Fuel:</span> <span>{selectedTrack.fuel}{typeof selectedTrack.fuel === 'number' && '%'}</span>
                            <span>ETA:</span> <span>{selectedTrack.eta}</span>
                        </div>
                    </div>
                    <div className="p-2 bg-gray-800/50 rounded">
                        <div className="font-bold text-yellow-400 mb-1">Payload & Crew</div>
                        <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                            <span>Pilot:</span> <span>{selectedTrack.pilot}</span>
                            <span>Weapons:</span> <span>{selectedTrack.weapons}</span>
                        </div>
                    </div>
                </div>
              </div>
            )}
            {selectedThreat && (
              <div>
                <h3 className="font-bold text-base text-red-400 mb-2">{selectedThreat.type} [{selectedThreat.id}]</h3>
                 <div className="p-2 bg-gray-800/50 rounded">
                    <div className="font-bold text-yellow-400 mb-1">Threat Assessment</div>
                    <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                        <span>Status:</span> <span className="font-bold text-yellow-400">{selectedThreat.status}</span>
                        <span>Threat:</span> <span className={`font-bold text-${selectedThreat.threat === 'HIGH' ? 'red' : selectedThreat.threat === 'MEDIUM' ? 'orange' : 'yellow'}-400`}>{selectedThreat.threat}</span>
                        <span>Range:</span> <span>{selectedThreat.range} km</span>
                        <span>Position:</span> <span>{selectedThreat.position.x}, {selectedThreat.position.y}</span>
                    </div>
                </div>
              </div>
            )}
            {!selectedTrack && !selectedThreat && (
              <div className="text-center text-gray-500 pt-8">No Item Selected</div>
            )}
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900/50 border-t border-green-900/50 p-2 flex justify-center items-center space-x-4 text-xs backdrop-blur-sm">
        <button onClick={() => setRadarMode(radarMode === 'WIDE_AREA' ? 'SECTOR_SCAN' : 'WIDE_AREA')} className="px-2 py-1 bg-gray-800 hover:bg-gray-700 border border-green-800 rounded">RADAR: {radarMode}</button>
        <button onClick={() => setShowTrails(!showTrails)} className={`px-2 py-1 bg-gray-800 hover:bg-gray-700 border border-green-800 rounded ${showTrails ? 'text-cyan-400' : ''}`}>TRAILS</button>
        <button onClick={() => setAlertLevel('HIGH')} className="px-2 py-1 bg-yellow-800/50 hover:bg-yellow-700/50 border border-yellow-800 rounded text-yellow-300">ALERT</button>
        <button onClick={() => setAlertLevel('CRITICAL')} className="px-2 py-1 bg-red-800/50 hover:bg-red-700/50 border border-red-800 rounded text-red-300">SCRAMBLE</button>
      </footer>
    </div>
  );
};

export default ROKAFMCRCAdvanced;