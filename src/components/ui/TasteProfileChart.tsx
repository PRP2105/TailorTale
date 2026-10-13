import React from 'react';
import { BookVector } from '../../data/books';
import { getTasteDimensionPercentages } from '../../lib/recommend';

interface TasteProfileChartProps {
  vector: BookVector;
  className?: string;
}

export const TasteProfileChart: React.FC<TasteProfileChartProps> = ({ vector, className = '' }) => {
  const dimensions = getTasteDimensionPercentages(vector);

  // Calculate coordinates for a stylish SVG Radar Spider Chart
  // Center is at (100, 100), radius 70.
  // 4 axes: Top (Pacing), Right (Tone), Bottom (Setting), Left (Protagonist)
  const cx = 100;
  const cy = 100;
  const maxR = 65;

  // Convert each dimension value [-1, 1] to radius fraction [0.2, 1.0]
  const rPacing = (0.2 + 0.8 * ((vector.pacing + 1) / 2)) * maxR;
  const rTone = (0.2 + 0.8 * ((vector.tone + 1) / 2)) * maxR;
  const rSetting = (0.2 + 0.8 * ((vector.setting + 1) / 2)) * maxR;
  const rProtagonist = (0.2 + 0.8 * ((vector.characterFocus + 1) / 2)) * maxR;

  // Coordinates:
  // Axis 0 (Top - Pacing): x = cx, y = cy - r
  // Axis 1 (Right - Tone): x = cx + r, y = cy
  // Axis 2 (Bottom - Setting): x = cx, y = cy + r
  // Axis 3 (Left - Protagonist): x = cx - r, y = cy
  const p0 = `${cx},${cy - rPacing}`;
  const p1 = `${cx + rTone},${cy}`;
  const p2 = `${cx},${cy + rSetting}`;
  const p3 = `${cx - rProtagonist},${cy}`;
  const polygonPoints = `${p0} ${p1} ${p2} ${p3}`;

  return (
    <div className={`bg-white rounded-2xl p-5 border border-teal/20 shadow-sm ${className}`}>
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-mint-border">
        <div>
          <h4 className="font-serif font-bold text-navy text-base">Your Reader DNA Profile</h4>
          <p className="text-xs text-navy-muted">Algorithmic fingerprint across 4 taste dimensions</p>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 bg-yellow/30 text-navy rounded-full border border-yellow/60">
          Personalised
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Radar Visualizer (SVG) */}
        <div className="md:col-span-5 flex flex-col items-center justify-center">
          <div className="relative w-44 h-44">
            <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
              {/* Background circular web grids */}
              <circle cx={cx} cy={cy} r={maxR * 0.33} fill="none" stroke="#E6FAF5" strokeWidth="1.5" />
              <circle cx={cx} cy={cy} r={maxR * 0.66} fill="none" stroke="#C3F1E7" strokeWidth="1.5" />
              <circle cx={cx} cy={cy} r={maxR} fill="none" stroke="#A4E7DA" strokeWidth="1.5" strokeDasharray="3 3" />

              {/* Crosshair axes */}
              <line x1={cx} y1={cy - maxR} x2={cx} y2={cy + maxR} stroke="#A4E7DA" strokeWidth="1.5" />
              <line x1={cx - maxR} y1={cy} x2={cx + maxR} y2={cy} stroke="#A4E7DA" strokeWidth="1.5" />

              {/* User Polygon Fingerprint */}
              <polygon
                points={polygonPoints}
                fill="rgba(25, 181, 165, 0.35)"
                stroke="#19B5A5"
                strokeWidth="2.5"
                strokeLinejoin="round"
                className="transition-all duration-700 ease-out"
              />

              {/* Vertex Dots */}
              <circle cx={cx} cy={cy - rPacing} r="4" fill="#FFD23F" stroke="#1F2A44" strokeWidth="1.5" />
              <circle cx={cx + rTone} cy={cy} r="4" fill="#FFD23F" stroke="#1F2A44" strokeWidth="1.5" />
              <circle cx={cx} cy={cy + rSetting} r="4" fill="#FFD23F" stroke="#1F2A44" strokeWidth="1.5" />
              <circle cx={cx - rProtagonist} cy={cy} r="4" fill="#FFD23F" stroke="#1F2A44" strokeWidth="1.5" />

              {/* Axis labels on Radar */}
              <text x={cx} y={cy - maxR - 8} textAnchor="middle" className="text-[10px] font-bold fill-navy">Pacing</text>
              <text x={cx + maxR + 8} y={cy + 4} textAnchor="start" className="text-[10px] font-bold fill-navy">Tone</text>
              <text x={cx} y={cy + maxR + 15} textAnchor="middle" className="text-[10px] font-bold fill-navy">Setting</text>
              <text x={cx - maxR - 8} y={cy + 4} textAnchor="end" className="text-[10px] font-bold fill-navy">Character</text>
            </svg>
          </div>
        </div>

        {/* Detailed Slider Bars */}
        <div className="md:col-span-7 space-y-3.5">
          {dimensions.map((dim) => (
            <div key={dim.dimension} className="space-y-1">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-navy">{dim.dimension}</span>
                <span className="text-[11px] font-mono text-teal-dark font-medium">
                  {dim.percentage}%
                </span>
              </div>
              <div className="relative h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                <div
                  className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-teal to-teal-dark rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${dim.percentage}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>{dim.leftLabel}</span>
                <span>{dim.rightLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
