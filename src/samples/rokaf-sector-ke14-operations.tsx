'use client';

import React, { useState, useEffect } from 'react';
import { 
  Users, Settings, MessageSquare, Crosshair, 
  Activity, Plane, CloudRain
} from 'lucide-react';

const ROKAFSectorKE14Detail = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedOperator, setSelectedOperator] = useState('OPS-01');
  const [commsChannel, setCommsChannel] = useState('PRIMARY');
  const [alertStatus, setAlertStatus] = useState('GREEN');
  const [selectedTrack, setSelectedTrack] = useState<Record<string, unknown> | null>(null);
  const [showTrails, setShowTrails] = useState(true);
  const [radarMode, setRadarMode] = useState('SECTOR_SCAN');

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // KE-14 섹터 운영자 현황
  const operators = [
    { 
      id: 'OPS-01', name: 'CPT Park M.S.', role: 'SECTOR CONTROLLER', 
      status: 'ACTIVE', workload: 'MODERATE', experience: '8년', 
      currentTask: 'VIPER-01 벡터링', comms: 'PRIMARY', shift: 'DAY'
    },
    { 
      id: 'OPS-02', name: 'LT Kim J.H.', role: 'RADAR OPERATOR', 
      status: 'STANDBY', workload: 'LOW', experience: '3년', 
      currentTask: '대기 중', comms: 'SECONDARY', shift: 'DAY'
    },
    { 
      id: 'OPS-03', name: 'SGT Lee S.K.', role: 'COMMS SPECIALIST', 
      status: 'OFFLINE', workload: 'NONE', experience: '5년', 
      currentTask: '휴식', comms: 'OFFLINE', shift: 'NIGHT'
    },
    { 
      id: 'OPS-04', name: 'MAJ Choi H.W.', role: 'SUPERVISOR', 
      status: 'ACTIVE', workload: 'HIGH', experience: '12년', 
      currentTask: '전체 상황 모니터링', comms: 'PRIMARY', shift: 'DAY'
    }
  ];

  // KE-14 섹터 내 활성 항적
  const sectorTracks = [
    { 
      id: 'KAF001', callsign: 'VIPER-01', type: 'F-16C', mission: 'CAP',
      position: { x: 420, y: 180 }, vector: { dx: -8, dy: 6 },
      speed: 420, altitude: 28000, status: 'FRIENDLY', controller: 'OPS-01',
      fuel: 68, weapons: 'AIM-120C x4', pilot: 'CPT Kim S.H.', eta: '15:30Z',
      heading: 78, squawk: '1201', flightLevel: 'FL280'
    },
    { 
      id: 'KAF002', callsign: 'VIPER-02', type: 'F-16C', mission: 'CAP',
      position: { x: 440, y: 200 }, vector: { dx: -6, dy: 8 },
      speed: 415, altitude: 27000, status: 'FRIENDLY', controller: 'OPS-01',
      fuel: 72, weapons: 'AIM-120C x4', pilot: 'CPT Lee J.W.', eta: '15:35Z',
      heading: 85, squawk: '1202', flightLevel: 'FL270'
    },
    { 
      id: 'UAV001', callsign: 'HAWK-01', type: 'MQ-9 Reaper', mission: 'ISR',
      position: { x: 340, y: 200 }, vector: { dx: 3, dy: -2 },
      speed: 135, altitude: 18000, status: 'FRIENDLY', controller: 'OPS-02',
      fuel: 92, weapons: 'Hellfire x2', pilot: 'SGT Kim M.J.', eta: '18:45Z',
      heading: 45, squawk: '1203', flightLevel: 'FL180'
    },
    { 
      id: 'CIV001', callsign: 'KAL-123', type: 'B777-300', mission: 'CIVIL',
      position: { x: 450, y: 250 }, vector: { dx: -12, dy: 3 },
      speed: 485, altitude: 37000, status: 'FRIENDLY', controller: 'OPS-01',
      fuel: 65, weapons: 'NONE', pilot: 'CPT civilian', eta: '14:55Z',
      heading: 270, squawk: '1204', flightLevel: 'FL370'
    },
    { 
      id: 'UNK001', callsign: 'UNKNOWN-1', type: '?', mission: '?',
      position: { x: 280, y: 160 }, vector: { dx: 18, dy: 12 },
      speed: 540, altitude: 32000, status: 'UNKNOWN', controller: 'OPS-01',
      fuel: '?', weapons: '?', pilot: '?', eta: '?',
      heading: 45, squawk: '?', flightLevel: 'FL320'
    }
  ];

  // 통신 로그
  const commLogs = [
    { time: '14:30:15', operator: 'OPS-01', callsign: 'VIPER-01', message: 'Target acquired, proceeding to intercept', type: 'RADIO' },
    { time: '14:28:42', operator: 'CMD', callsign: 'SECTOR', message: 'Confirm target ID and vector', type: 'COMMAND' },
    { time: '14:25:18', operator: 'OPS-02', callsign: 'HAWK-01', message: 'ISR mission complete, RTB', type: 'RADIO' },
    { time: '14:22:55', operator: 'OPS-01', callsign: 'VIPER-02', message: 'Formation established, CAP active', type: 'RADIO' },
    { time: '14:20:33', operator: 'OPS-04', callsign: 'SECTOR', message: 'All operators report status', type: 'COMMAND' },
    { time: '14:18:07', operator: 'OPS-01', callsign: 'KAL-123', message: 'Cleared to FL370, contact Center', type: 'RADIO' }
  ];

  // 섹터 설정 및 상태
  const sectorSettings = {
    alertLevel: 'GREEN',
    droneCount: 5,
    weather: 'Clear',
    visibility: '15km',
    wind: '280°/18kt',
    temperature: '18°C',
    pressure: '1015.8 hPa',
    cloudBase: '2800ft AGL',
    activeMissions: 3,
    totalTracks: sectorTracks.length,
    friendlyTracks: sectorTracks.filter(t => t.status === 'FRIENDLY').length,
    unknownTracks: sectorTracks.filter(t => t.status === 'UNKNOWN').length
  };

  const renderTrack = (track: Record<string, unknown>) => {
    const colors = {
      'FRIENDLY': 'text-green-400 bg-green-900/30 border-green-400',
      'UNKNOWN': 'text-yellow-400 bg-yellow-900/30 border-yellow-400',
      'HOSTILE': 'text-red-400 bg-red-900/30 border-red-400'
    };

    const shapes = {
      'FRIENDLY': 'rounded-full',
      'UNKNOWN': 'rounded-sm',
      'HOSTILE': 'rounded-none rotate-45'
    };

    const vectorAngle = Math.atan2(track.vector.dy, track.vector.dx) * 180 / Math.PI;
    const vectorLength = Math.min(track.speed / 25, 25);

    return (
      <div key={track.id} className="absolute">
        {/* 메인 트랙 표시 */}
        <div 
          className={`absolute ${colors[track.status as keyof typeof colors]} ${shapes[track.status as keyof typeof shapes]} border-2 p-1.5 text-[10px] font-mono transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:bg-opacity-80 transition-all shadow-lg`}
          style={{ 
            left: `${track.position.x}px`, 
            top: `${track.position.y}px`
          }}
          onClick={() => setSelectedTrack(track)}
        >
          <div className="flex items-center space-x-1">
            <div className={`w-3 h-3 ${
              track.status === 'FRIENDLY' ? 'bg-green-400' : 
              track.status === 'UNKNOWN' ? 'bg-yellow-400' : 'bg-red-400'
            } ${shapes[track.status as keyof typeof shapes]}`}></div>
            <span className="text-[9px] font-bold">{track.callsign}</span>
          </div>
          <div className="text-[8px] mt-1">
            <div>{track.type}</div>
            <div>{track.altitude}ft</div>
            <div className="text-[7px] text-gray-400">{track.squawk}</div>
          </div>
        </div>
        
        {/* 속도/방향 벡터 */}
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

        {/* 항적 꼬리 */}
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

  return (
    <div className="min-h-screen bg-gray-900 text-green-300 font-mono">
      {/* TOP SECRET 헤더 */}
      <div className="bg-red-900 text-white text-center py-1 font-bold text-xs">
        ★★ TOP SECRET // REL TO ROKAF ★★
      </div>

      {/* 메인 헤더 */}
      <div className="bg-gray-800 border-b border-gray-700 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center border-2 border-blue-400 animate-pulse">
              <Crosshair className="w-8 h-8 text-blue-200" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-300">SECTOR KE-14 Operations</h1>
              <p className="text-sm text-blue-500">Advanced Air Defense Sector Control Center</p>
            </div>
            <div className="flex space-x-2">
              <div className={`px-2 py-1 rounded text-xs font-bold ${
                alertStatus === 'GREEN' ? 'bg-green-900 text-green-300' :
                alertStatus === 'YELLOW' ? 'bg-yellow-900 text-yellow-300' : 'bg-red-900 text-red-300'
              }`}>
                {alertStatus}
              </div>
              <div className="px-2 py-1 bg-blue-900 text-blue-300 rounded text-xs font-bold">
                SECTOR ACTIVE
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-8 text-xs">
            <div className="text-center">
              <div className="text-blue-400 font-bold text-lg">{currentTime.toLocaleTimeString('en-GB', { timeZone: 'Asia/Seoul' })}</div>
              <div className="text-blue-600">KST / ZULU {currentTime.toLocaleTimeString('en-GB', { timeZone: 'UTC' })}</div>
            </div>
            <div className="text-center">
              <div className="text-green-400 font-bold text-lg">{sectorSettings.totalTracks}</div>
              <div className="text-green-600">ACTIVE TRACKS</div>
            </div>
            <div className="text-center">
              <div className="text-yellow-400 font-bold">{sectorSettings.activeMissions}</div>
              <div className="text-yellow-600">MISSIONS</div>
            </div>
            <div className="text-center">
              <div className="text-purple-400 font-bold">{sectorSettings.droneCount}</div>
              <div className="text-purple-600">DRONES</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-140px)]">
        {/* 좌측 제어판 */}
        <div className="w-96 bg-gray-800 border-r border-gray-700 p-4 space-y-4 overflow-y-auto">
          {/* 운영자 현황 */}
          <div className="bg-gray-900 rounded-lg p-3">
            <h3 className="text-sm font-bold text-blue-400 mb-3 flex items-center">
              <Users className="w-4 h-4 mr-2" />
              OPERATOR STATUS
            </h3>
            <div className="space-y-2 text-xs">
              {operators.map(operator => (
                <div 
                  key={operator.id}
                  className={`flex justify-between items-center p-2 rounded border ${
                    selectedOperator === operator.id ? 'bg-blue-900/30 border-blue-500' : 'border-gray-600'
                  } cursor-pointer hover:border-blue-500 transition-colors`}
                  onClick={() => setSelectedOperator(operator.id)}
                >
                  <div>
                    <div className="text-blue-300 font-bold">{operator.id}</div>
                    <div className="text-blue-600 text-[10px]">{operator.name}</div>
                    <div className="text-green-500 text-[10px]">{operator.role}</div>
                    <div className="text-gray-400 text-[10px]">{operator.currentTask}</div>
                  </div>
                  <div className="text-right">
                    <div className={`text-[10px] font-bold ${
                      operator.status === 'ACTIVE' ? 'text-green-400' :
                      operator.status === 'STANDBY' ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {operator.status}
                    </div>
                    <div className="text-[10px] text-gray-400">{operator.workload}</div>
                    <div className="text-[10px] text-gray-500">{operator.experience}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 섹터 설정 */}
          <div className="bg-gray-900 rounded-lg p-3">
            <h3 className="text-sm font-bold text-blue-400 mb-3 flex items-center">
              <Settings className="w-4 h-4 mr-2" />
              SECTOR SETTINGS
            </h3>
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-blue-600">Alert Level</span>
                <select 
                  value={alertStatus} 
                  onChange={(e) => setAlertStatus(e.target.value)}
                  className="bg-gray-800 text-blue-400 text-xs border border-gray-600 rounded px-2 py-1"
                >
                  <option value="GREEN">GREEN</option>
                  <option value="YELLOW">YELLOW</option>
                  <option value="RED">RED</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-blue-600">Comms Channel</span>
                <select 
                  value={commsChannel} 
                  onChange={(e) => setCommsChannel(e.target.value)}
                  className="bg-gray-800 text-blue-400 text-xs border border-gray-600 rounded px-2 py-1"
                >
                  <option value="PRIMARY">PRIMARY</option>
                  <option value="SECONDARY">SECONDARY</option>
                  <option value="EMERGENCY">EMERGENCY</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-blue-600">Show Trails</span>
                <button 
                  onClick={() => setShowTrails(!showTrails)}
                  className={`px-2 py-1 rounded text-xs ${showTrails ? 'bg-blue-800 text-blue-300' : 'bg-gray-700 text-gray-400'}`}
                >
                  {showTrails ? 'ON' : 'OFF'}
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-blue-600">Radar Mode</span>
                <select 
                  value={radarMode} 
                  onChange={(e) => setRadarMode(e.target.value)}
                  className="bg-gray-800 text-blue-400 text-xs border border-gray-600 rounded px-2 py-1"
                >
                  <option value="SECTOR_SCAN">SECTOR SCAN</option>
                  <option value="WIDE_AREA">WIDE AREA</option>
                  <option value="THREAT_FOCUS">THREAT FOCUS</option>
                </select>
              </div>
            </div>
          </div>

          {/* 섹터 통계 */}
          <div className="bg-gray-900 rounded-lg p-3">
            <h3 className="text-sm font-bold text-blue-400 mb-3 flex items-center">
              <Activity className="w-4 h-4 mr-2" />
              SECTOR STATISTICS
            </h3>
            <div className="space-y-2 text-xs">
              <div className="grid grid-cols-2 gap-2">
                <div className="text-blue-600">Total Tracks:</div>
                <div className="text-blue-300 font-bold">{sectorSettings.totalTracks}</div>
                <div className="text-blue-600">Friendly:</div>
                <div className="text-green-300">{sectorSettings.friendlyTracks}</div>
                <div className="text-blue-600">Unknown:</div>
                <div className="text-yellow-300">{sectorSettings.unknownTracks}</div>
                <div className="text-blue-600">Active Missions:</div>
                <div className="text-purple-300">{sectorSettings.activeMissions}</div>
                <div className="text-blue-600">Drone Count:</div>
                <div className="text-cyan-300">{sectorSettings.droneCount}</div>
                <div className="text-blue-600">Weather:</div>
                <div className="text-yellow-300">{sectorSettings.weather}</div>
              </div>
            </div>
          </div>

          {/* 날씨 정보 */}
          <div className="bg-gray-900 rounded-lg p-3">
            <h3 className="text-sm font-bold text-blue-400 mb-3 flex items-center">
              <CloudRain className="w-4 h-4 mr-2" />
              WEATHER CONDITIONS
            </h3>
            <div className="space-y-2 text-xs">
              <div className="grid grid-cols-2 gap-2">
                <div className="text-blue-600">Visibility:</div>
                <div className="text-blue-300">{sectorSettings.visibility}</div>
                <div className="text-blue-600">Wind:</div>
                <div className="text-blue-300">{sectorSettings.wind}</div>
                <div className="text-blue-600">Temperature:</div>
                <div className="text-blue-300">{sectorSettings.temperature}</div>
                <div className="text-blue-600">Pressure:</div>
                <div className="text-blue-300">{sectorSettings.pressure}</div>
                <div className="text-blue-600">Cloud Base:</div>
                <div className="text-blue-300">{sectorSettings.cloudBase}</div>
              </div>
            </div>
          </div>
        </div>

        {/* 중앙 지도 영역 */}
        <div className="flex-1 bg-gray-900 relative overflow-hidden">
          {/* KE-14 섹터 지도 배경 */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 700">
            {/* 섹터 격자 */}
            <defs>
              <pattern id="sectorGrid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#sectorGrid)" />
            
            {/* KE-14 섹터 경계 */}
            <rect x="300" y="100" width="400" height="500" fill="none" stroke="#3b82f6" strokeWidth="3" strokeDasharray="10,5" />
            <text x="500" y="90" fill="#3b82f6" fontSize="20" textAnchor="middle" fontWeight="bold">SECTOR KE-14</text>
            
            {/* 섹터 내 격자 라벨 */}
            <text x="350" y="150" fill="#3b82f6" fontSize="12" textAnchor="middle">KE-14A</text>
            <text x="450" y="150" fill="#3b82f6" fontSize="12" textAnchor="middle">KE-14B</text>
            <text x="550" y="150" fill="#3b82f6" fontSize="12" textAnchor="middle">KE-14C</text>
            <text x="650" y="150" fill="#3b82f6" fontSize="12" textAnchor="middle">KE-14D</text>
            
            <text x="350" y="300" fill="#3b82f6" fontSize="12" textAnchor="middle">KE-14E</text>
            <text x="450" y="300" fill="#3b82f6" fontSize="12" textAnchor="middle">KE-14F</text>
            <text x="550" y="300" fill="#3b82f6" fontSize="12" textAnchor="middle">KE-14G</text>
            <text x="650" y="300" fill="#3b82f6" fontSize="12" textAnchor="middle">KE-14H</text>
            
            <text x="350" y="450" fill="#3b82f6" fontSize="12" textAnchor="middle">KE-14I</text>
            <text x="450" y="450" fill="#3b82f6" fontSize="12" textAnchor="middle">KE-14J</text>
            <text x="550" y="450" fill="#3b82f6" fontSize="12" textAnchor="middle">KE-14K</text>
            <text x="650" y="450" fill="#3b82f6" fontSize="12" textAnchor="middle">KE-14L</text>
            
            <text x="350" y="600" fill="#3b82f6" fontSize="12" textAnchor="middle">KE-14M</text>
            <text x="450" y="600" fill="#3b82f6" fontSize="12" textAnchor="middle">KE-14N</text>
            <text x="550" y="600" fill="#3b82f6" fontSize="12" textAnchor="middle">KE-14O</text>
            <text x="650" y="600" fill="#3b82f6" fontSize="12" textAnchor="middle">KE-14P</text>

            {/* 주요 지점 */}
            <circle cx="500" cy="350" r="5" fill="#3b82f6" />
            <text x="510" y="355" fill="#3b82f6" fontSize="10">SECTOR CENTER</text>
            
            <circle cx="400" cy="200" r="3" fill="#10b981" />
            <text x="410" y="205" fill="#10b981" fontSize="10">RADAR SITE</text>
            
            <circle cx="600" cy="500" r="3" fill="#f59e0b" />
            <text x="610" y="505" fill="#f59e0b" fontSize="10">COMMS HUB</text>
          </svg>

          {/* 실시간 항적 표시 */}
          <div className="absolute inset-0">
            {sectorTracks.map(track => renderTrack(track))}
          </div>

          {/* 레이더 스위프 */}
          <div className="absolute top-4 right-4 w-24 h-24 bg-blue-900/20 rounded-full border-2 border-blue-600 flex items-center justify-center">
            <div className="animate-spin w-full h-full flex items-center justify-center">
              <div className="w-20 h-0.5 bg-gradient-to-r from-blue-400 via-blue-300 to-transparent origin-left"></div>
            </div>
            <div className="absolute text-xs text-blue-400 bottom-1">400NM</div>
            <div className="absolute text-xs text-blue-600 top-1">{radarMode}</div>
          </div>

          {/* 섹터 상태 표시 */}
          <div className="absolute bottom-4 left-4 bg-gray-900/80 rounded-lg p-2 border border-gray-700">
            <div className="text-xs text-blue-400 space-y-1">
              <div>섹터 상태: <span className="text-green-300 font-bold">{alertStatus}</span></div>
              <div>활성 항적: <span className="text-blue-300 font-bold">{sectorSettings.totalTracks}</span></div>
              <div>아군: <span className="text-green-300">{sectorSettings.friendlyTracks}</span></div>
              <div>미식별: <span className="text-yellow-300">{sectorSettings.unknownTracks}</span></div>
            </div>
          </div>
        </div>

        {/* 우측 정보 패널 */}
        <div className="w-96 bg-gray-800 border-l border-gray-700 p-4 space-y-4 overflow-y-auto">
          {/* 선택된 항적 상세 정보 */}
          {selectedTrack && (
            <div className="bg-gray-900 rounded-lg p-3 border-l-4 border-blue-500">
              <h3 className="text-sm font-bold text-blue-400 mb-3 flex items-center">
                <Crosshair className="w-4 h-4 mr-2" />
                TRACK DETAILS
              </h3>
              <div className="text-xs space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-blue-600">Callsign:</div>
                  <div className="text-blue-300 font-bold">{selectedTrack.callsign}</div>
                  <div className="text-blue-600">Type:</div>
                  <div className="text-blue-300">{selectedTrack.type}</div>
                  <div className="text-blue-600">Mission:</div>
                  <div className="text-blue-300">{selectedTrack.mission}</div>
                  <div className="text-blue-600">Altitude:</div>
                  <div className="text-blue-300">{selectedTrack.altitude}ft</div>
                  <div className="text-blue-600">Speed:</div>
                  <div className="text-blue-300">{selectedTrack.speed}kt</div>
                  <div className="text-blue-600">Heading:</div>
                  <div className="text-blue-300">{selectedTrack.heading}°</div>
                  <div className="text-blue-600">Squawk:</div>
                  <div className="text-blue-300">{selectedTrack.squawk}</div>
                  <div className="text-blue-600">Flight Level:</div>
                  <div className="text-blue-300">{selectedTrack.flightLevel}</div>
                  <div className="text-blue-600">Fuel:</div>
                  <div className="text-blue-300">{selectedTrack.fuel}%</div>
                  <div className="text-blue-600">Weapons:</div>
                  <div className="text-blue-300">{selectedTrack.weapons}</div>
                  <div className="text-blue-600">Pilot:</div>
                  <div className="text-blue-300">{selectedTrack.pilot}</div>
                  <div className="text-blue-600">ETA RTB:</div>
                  <div className="text-blue-300">{selectedTrack.eta}</div>
                  <div className="text-blue-600">Controller:</div>
                  <div className="text-blue-300">{selectedTrack.controller}</div>
                </div>
                <div className="mt-3 pt-2 border-t border-gray-700">
                  <div className={`px-2 py-1 rounded text-center font-bold ${
                    selectedTrack.status === 'FRIENDLY' ? 'bg-green-900 text-green-300' :
                    selectedTrack.status === 'UNKNOWN' ? 'bg-yellow-900 text-yellow-300' :
                    'bg-red-900 text-red-300'
                  }`}>
                    {selectedTrack.status}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 통신 로그 */}
          <div className="bg-gray-900 rounded-lg p-3">
            <h3 className="text-sm font-bold text-blue-400 mb-3 flex items-center">
              <MessageSquare className="w-4 h-4 mr-2" />
              RECENT COMMUNICATIONS
            </h3>
            <div className="text-xs space-y-1 max-h-48 overflow-y-auto">
              {commLogs.map((log, index) => (
                <div key={index} className={`p-2 rounded border-l-2 ${
                  log.type === 'RADIO' ? 'border-green-500 bg-green-900/10' :
                  log.type === 'COMMAND' ? 'border-yellow-500 bg-yellow-900/10' :
                  'border-blue-500 bg-blue-900/10'
                }`}>
                  <div className="flex justify-between items-start">
                    <div className="text-gray-400 text-[10px]">{log.time}</div>
                    <div className={`text-[10px] px-1 py-0.5 rounded ${
                      log.type === 'RADIO' ? 'bg-green-800 text-green-300' :
                      log.type === 'COMMAND' ? 'bg-yellow-800 text-yellow-300' :
                      'bg-blue-800 text-blue-300'
                    }`}>
                      {log.type}
                    </div>
                  </div>
                  <div className="text-blue-300 font-bold text-[10px]">{log.operator} → {log.callsign}</div>
                  <div className="text-blue-400 text-[10px] mt-1">{log.message}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 임무별 항적 분류 */}
          <div className="bg-gray-900 rounded-lg p-3">
            <h3 className="text-sm font-bold text-blue-400 mb-3 flex items-center">
              <Plane className="w-4 h-4 mr-2" />
              MISSION BREAKDOWN
            </h3>
            <div className="space-y-2 text-xs">
              {Object.entries(
                sectorTracks.reduce((acc: Record<string, number>, track: Record<string, unknown>) => {
                  acc[track.mission] = (acc[track.mission] || 0) + 1;
                  return acc;
                }, {})
              ).map(([mission, count]: [string, number]) => (
                <div key={mission} className="flex justify-between items-center">
                  <span className="text-blue-600">{mission}</span>
                  <span className="text-blue-300 font-bold">{count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 시스템 상태 */}
          <div className="bg-gray-900 rounded-lg p-3">
            <h3 className="text-sm font-bold text-blue-400 mb-3 flex items-center">
              <Activity className="w-4 h-4 mr-2" />
              SYSTEM STATUS
            </h3>
            <div className="space-y-2 text-xs">
              {[
                { name: 'AN/TPS-43G', status: 'ONLINE', quality: 98 },
                { name: 'LINK-16 TDL', status: 'SECURE', quality: 99 },
                { name: 'IFF MODE-4/5', status: 'ACTIVE', quality: 100 },
                { name: 'COMMS NET', status: 'STABLE', quality: 97 },
                { name: 'RADAR DATA', status: 'SYNC', quality: 96 }
              ].map(sys => (
                <div key={sys.name} className="flex justify-between items-center">
                  <span className="text-blue-600">{sys.name}</span>
                  <div className="text-right">
                    <span className="text-blue-400">{sys.status}</span>
                    <div className="text-blue-500">({sys.quality}%)</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 하단 분류 표시 */}
      <div className="bg-red-900 text-white text-center py-1 font-bold text-xs">
        ★★ TOP SECRET // REL TO ROKAF ★★
      </div>
    </div>
  );
};

export default ROKAFSectorKE14Detail;
