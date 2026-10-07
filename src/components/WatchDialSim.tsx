import React, { useState, useEffect } from 'react';
import { Moon, Sun, Play, Pause, RotateCcw } from 'lucide-react';

interface WatchDialSimProps {
  modelId: string;
  isLumeMode?: boolean;
  onToggleLume?: () => void;
}

export const WatchDialSim: React.FC<WatchDialSimProps> = ({
  modelId,
  isLumeMode = false,
  onToggleLume,
}) => {
  const [now, setNow] = useState(new Date());
  const [isRunning, setIsRunning] = useState(true);
  const [internalLume, setInternalLume] = useState(false);

  const activeLume = onToggleLume ? isLumeMode : internalLume;
  const toggleLume = onToggleLume || (() => setInternalLume((prev) => !prev));

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setNow(new Date());
    }, 50); // ~20fps smooth sweep
    return () => clearInterval(interval);
  }, [isRunning]);

  const ms = now.getMilliseconds();
  const seconds = now.getSeconds() + ms / 1000;
  const minutes = now.getMinutes() + seconds / 60;
  const hours = (now.getHours() % 12) + minutes / 60;
  const gmtHours = ((now.getUTCHours() + 2) % 24) + minutes / 60; // GMT+2 (Geneva/Paris)

  const secondDeg = seconds * 6; // 360 / 60
  const minuteDeg = minutes * 6;
  const hourDeg = hours * 30; // 360 / 12
  const gmtDeg = gmtHours * 15; // 360 / 24

  // Styles depending on model
  const isObsidian = modelId === 'obsidian-gmt';
  const isCelestial = modelId === 'celestial-gold';
  const isChrono = modelId === 'chrono-veloce';

  return (
    <div className="flex flex-col items-center">
      {/* Interactive Controls Bar */}
      <div className="flex items-center gap-3 mb-4 text-xs font-code">
        <button
          onClick={toggleLume}
          className={`flex items-center gap-1.5 px-3 py-1 border transition-colors ${
            activeLume
              ? 'bg-[#162a2c] border-[#4ecdc4] text-[#4ecdc4]'
              : 'bg-[#121418] border-[#262930] text-neutral-400 hover:text-white'
          }`}
          title="Включить люминесцентное свечение Super-LumiNova BGW9"
        >
          {activeLume ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          <span>{activeLume ? 'День' : 'Люминофор (Ночь)'}</span>
        </button>

        <button
          onClick={() => setIsRunning(!isRunning)}
          className="flex items-center gap-1 px-2.5 py-1 bg-[#121418] border border-[#262930] text-neutral-400 hover:text-white transition-colors"
          title={isRunning ? 'Остановить балансовое колесо' : 'Запустить калибр'}
        >
          {isRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
          <span>{isRunning ? 'Стоп-секунда' : 'Пуск'}</span>
        </button>

        <div className="text-neutral-500 hidden sm:block">
          Калибр: <span className="text-neutral-300">4 Гц (28 800 пк/ч)</span>
        </div>
      </div>

      {/* Watch Case Frame */}
      <div
        className={`relative w-72 h-72 sm:w-80 sm:h-80 rounded-full transition-all duration-700 p-2 shadow-2xl ${
          activeLume
            ? 'bg-[#080d11] shadow-[0_0_50px_rgba(78,205,196,0.15)] ring-1 ring-[#4ecdc4]/20'
            : isCelestial
            ? 'bg-gradient-to-br from-[#c59b6d] via-[#7d5e3c] to-[#45311e] ring-1 ring-[#c59b6d]/40'
            : isObsidian
            ? 'bg-[#121316] ring-1 ring-[#262830]'
            : 'bg-gradient-to-br from-[#9ca1ab] via-[#636873] to-[#474a52] ring-1 ring-[#8b909a]/40'
        }`}
      >
        {/* Watch Bezel with satin finish */}
        <div
          className={`w-full h-full rounded-full p-2 transition-colors ${
            activeLume
              ? 'bg-[#0b1015]'
              : isCelestial
              ? 'bg-[#12131a]'
              : isObsidian
              ? 'bg-[#0a0a0c]'
              : 'bg-[#15171b]'
          }`}
        >
          {/* Dial SVG Surface */}
          <svg
            viewBox="0 0 300 300"
            className="w-full h-full rounded-full select-none"
          >
            <defs>
              {/* Radial gradient for sunray finish */}
              <radialGradient id="sunray" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor={activeLume ? '#0b161c' : '#22262e'} />
                <stop offset="85%" stopColor={activeLume ? '#060b0e' : '#111317'} />
                <stop offset="100%" stopColor="#08090a" />
              </radialGradient>

              {/* Aventurine gradient */}
              <radialGradient id="aventurine" cx="45%" cy="45%" r="60%">
                <stop offset="0%" stopColor="#0f1d38" />
                <stop offset="50%" stopColor="#081024" />
                <stop offset="100%" stopColor="#030612" />
              </radialGradient>

              {/* Glow filter for BGW9 */}
              <filter id="lumeGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Dial Background */}
            <circle
              cx="150"
              cy="150"
              r="140"
              fill={isCelestial ? 'url(#aventurine)' : 'url(#sunray)'}
            />

            {/* Stars / Aventurine specks for Celestial model */}
            {isCelestial && (
              <g opacity={activeLume ? 0.3 : 0.85}>
                {[
                  [70, 80, 0.8], [95, 120, 1.2], [180, 75, 1.0], [210, 110, 0.7],
                  [130, 90, 1.4], [165, 135, 1.1], [85, 190, 0.9], [120, 220, 1.3],
                  [190, 210, 1.2], [225, 180, 0.8], [150, 175, 1.5], [60, 140, 0.9],
                  [230, 140, 1.1], [110, 65, 0.7], [175, 55, 1.0], [140, 235, 0.8]
                ].map(([cx, cy, r], i) => (
                  <circle
                    key={i}
                    cx={cx}
                    cy={cy}
                    r={r}
                    fill="#e2c88d"
                    opacity={0.6 + (i % 4) * 0.12}
                  />
                ))}
              </g>
            )}

            {/* Concentric subtle minute track */}
            <circle
              cx="150"
              cy="150"
              r="132"
              fill="none"
              stroke={activeLume ? '#143138' : '#262930'}
              strokeWidth="0.75"
            />

            {/* GMT 24-hour ring for Obsidian GMT */}
            {isObsidian && (
              <g>
                <circle
                  cx="150"
                  cy="150"
                  r="92"
                  fill="none"
                  stroke={activeLume ? '#143138' : '#262830'}
                  strokeWidth="12"
                />
                {[0, 3, 6, 9, 12, 15, 18, 21].map((val) => {
                  const angle = (val * 15 - 90) * (Math.PI / 180);
                  const x = 150 + 92 * Math.cos(angle);
                  const y = 150 + 92 * Math.sin(angle);
                  return (
                    <text
                      key={val}
                      x={x}
                      y={y + 3}
                      fill={activeLume ? '#4ecdc4' : '#6b7280'}
                      fontSize="7"
                      fontFamily="Space Mono, monospace"
                      textAnchor="middle"
                    >
                      {val.toString().padStart(2, '0')}
                    </text>
                  );
                })}
              </g>
            )}

            {/* Chrono Sub-dial for Chrono-Veloce */}
            {isChrono && (
              <g>
                <circle
                  cx="150"
                  cy="200"
                  r="35"
                  fill="none"
                  stroke={activeLume ? '#143138' : '#262830'}
                  strokeWidth="1"
                />
                {/* 30-min marks */}
                {[0, 10, 20].map((m) => {
                  const angle = (m * 12 - 90) * (Math.PI / 180);
                  const x = 150 + 26 * Math.cos(angle);
                  const y = 200 + 26 * Math.sin(angle);
                  return (
                    <text
                      key={m}
                      x={x}
                      y={y + 3}
                      fill={activeLume ? '#4ecdc4' : '#6b7280'}
                      fontSize="6"
                      fontFamily="Space Mono, monospace"
                      textAnchor="middle"
                    >
                      {m}
                    </text>
                  );
                })}
              </g>
            )}

            {/* 60 Minute Ticks */}
            {Array.from({ length: 60 }).map((_, i) => {
              const isMajor = i % 5 === 0;
              const angle = (i * 6 - 90) * (Math.PI / 180);
              const r1 = 132;
              const r2 = isMajor ? 122 : 127;
              const x1 = 150 + r1 * Math.cos(angle);
              const y1 = 150 + r1 * Math.sin(angle);
              const x2 = 150 + r2 * Math.cos(angle);
              const y2 = 150 + r2 * Math.sin(angle);

              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={
                    activeLume
                      ? isMajor
                        ? '#4ecdc4'
                        : '#1a4149'
                      : isMajor
                      ? '#8b909a'
                      : '#373c47'
                  }
                  strokeWidth={isMajor ? (activeLume ? 2 : 1.5) : 0.75}
                  filter={activeLume && isMajor ? 'url(#lumeGlow)' : undefined}
                />
              );
            })}

            {/* 12 Hour Applied Faceted Indices */}
            {Array.from({ length: 12 }).map((_, i) => {
              const hourVal = i === 0 ? 12 : i;
              const angle = (i * 30 - 90) * (Math.PI / 180);
              const r = 112;
              const cx = 150 + r * Math.cos(angle);
              const cy = 150 + r * Math.sin(angle);

              if (hourVal === 12) {
                // Double baton marker at 12 o'clock
                return (
                  <g key={i}>
                    <rect
                      x={145}
                      y={30}
                      width={3.5}
                      height={18}
                      rx={1}
                      fill={activeLume ? '#4ecdc4' : isCelestial ? '#c59b6d' : '#e2e4e9'}
                      filter={activeLume ? 'url(#lumeGlow)' : undefined}
                    />
                    <rect
                      x={151.5}
                      y={30}
                      width={3.5}
                      height={18}
                      rx={1}
                      fill={activeLume ? '#4ecdc4' : isCelestial ? '#c59b6d' : '#e2e4e9'}
                      filter={activeLume ? 'url(#lumeGlow)' : undefined}
                    />
                  </g>
                );
              }

              return (
                <g
                  key={i}
                  transform={`translate(${cx}, ${cy}) rotate(${i * 30})`}
                >
                  <rect
                    x={-2}
                    y={-7}
                    width={4}
                    height={14}
                    rx={1}
                    fill={activeLume ? '#4ecdc4' : isCelestial ? '#c59b6d' : '#d2d5dc'}
                    filter={activeLume ? 'url(#lumeGlow)' : undefined}
                  />
                </g>
              );
            })}

            {/* Brand Logo Lockup */}
            <g transform="translate(150, 95)" textAnchor="middle">
              <text
                fill={activeLume ? '#2a5a63' : isCelestial ? '#e2c88d' : '#ffffff'}
                fontSize="12"
                fontFamily="Cinzel, serif"
                fontWeight="700"
                letterSpacing="4"
              >
                VANDEN
              </text>
              <text
                y="11"
                fill={activeLume ? '#1b3b42' : '#8b909a'}
                fontSize="5"
                fontFamily="Space Mono, monospace"
                letterSpacing="2"
              >
                CHRONOMÈTRE
              </text>
              <text
                y="19"
                fill={activeLume ? '#143138' : '#565b67'}
                fontSize="4"
                fontFamily="Plus Jakarta Sans, sans-serif"
                letterSpacing="1"
              >
                NEUCHÂTEL
              </text>
            </g>

            {/* Swiss Made inscription at 6 */}
            <text
              x="150"
              y="272"
              textAnchor="middle"
              fill={activeLume ? '#1b3b42' : '#525763'}
              fontSize="4.5"
              fontFamily="Space Mono, monospace"
              letterSpacing="1.5"
            >
              SWISS MADE
            </text>

            {/* GMT Hand (if Obsidian model) */}
            {isObsidian && (
              <g
                transform={`rotate(${gmtDeg}, 150, 150)`}
                filter={activeLume ? 'url(#lumeGlow)' : undefined}
              >
                <line
                  x1="150"
                  y1="150"
                  x2="150"
                  y2="60"
                  stroke={activeLume ? '#4ecdc4' : '#ffffff'}
                  strokeWidth="1.2"
                />
                <polygon
                  points="147,60 153,60 150,52"
                  fill={activeLume ? '#4ecdc4' : '#ffffff'}
                />
              </g>
            )}

            {/* Hour Hand */}
            <g
              transform={`rotate(${hourDeg}, 150, 150)`}
              filter={activeLume ? 'url(#lumeGlow)' : undefined}
            >
              {/* Outer structural hand */}
              <polygon
                points="147,150 148,85 150,75 152,85 153,150"
                fill={activeLume ? '#1b3f46' : isCelestial ? '#c59b6d' : '#454952'}
              />
              {/* Lume slit */}
              <rect
                x="148.5"
                y="88"
                width="3"
                height="45"
                rx="1"
                fill={activeLume ? '#4ecdc4' : isCelestial ? '#f2dec2' : '#ffffff'}
              />
            </g>

            {/* Minute Hand */}
            <g
              transform={`rotate(${minuteDeg}, 150, 150)`}
              filter={activeLume ? 'url(#lumeGlow)' : undefined}
            >
              <polygon
                points="147.5,150 148.5,50 150,40 151.5,50 152.5,150"
                fill={activeLume ? '#1b3f46' : isCelestial ? '#c59b6d' : '#454952'}
              />
              <rect
                x="148.7"
                y="52"
                width="2.6"
                height="75"
                rx="1"
                fill={activeLume ? '#4ecdc4' : isCelestial ? '#f2dec2' : '#ffffff'}
              />
            </g>

            {/* Center Cap Pin */}
            <circle
              cx="150"
              cy="150"
              r="6.5"
              fill={activeLume ? '#081a1f' : isCelestial ? '#c59b6d' : '#1e2025'}
              stroke={activeLume ? '#4ecdc4' : '#8b909a'}
              strokeWidth="1"
            />

            {/* Continuous Sweeping Seconds Hand */}
            <g transform={`rotate(${secondDeg}, 150, 150)`}>
              {/* Counter-weight with "V" monogram form */}
              <line
                x1="150"
                y1="150"
                x2="150"
                y2="185"
                stroke={isCelestial ? '#d4af37' : '#d4af37'}
                strokeWidth="1.2"
              />
              <polygon
                points="147,185 153,185 150,192"
                fill="#d4af37"
              />
              {/* Long slender second needle */}
              <line
                x1="150"
                y1="150"
                x2="150"
                y2="28"
                stroke={isCelestial ? '#d4af37' : '#d4af37'}
                strokeWidth="0.9"
              />
              {/* Lume dot on tip */}
              <circle
                cx="150"
                cy="44"
                r="2.5"
                fill={activeLume ? '#4ecdc4' : '#d4af37'}
                filter={activeLume ? 'url(#lumeGlow)' : undefined}
              />
            </g>

            {/* Center Jewel */}
            <circle
              cx="150"
              cy="150"
              r="2"
              fill="#b91c1c"
              opacity="0.85"
            />
          </svg>
        </div>
      </div>

      <div className="mt-4 text-center">
        <div className="font-code text-xs text-neutral-400">
          Текущее время механизма: {now.toLocaleTimeString('ru-RU')}
        </div>
        <div className="text-[11px] text-neutral-500 mt-0.5">
          Плавный спуск 28 800 пк/ч · Super-LumiNova BGW9 (Швейцария)
        </div>
      </div>
    </div>
  );
};
