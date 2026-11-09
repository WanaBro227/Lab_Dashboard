import React, { useState } from 'react';

export default function HistoryTable({ readings }) {
  const [displayCount, setDisplayCount] = useState(5);
  
  const visibleReadings = readings.slice(0, displayCount);
  const hasMore = displayCount < readings.length;

  return (
    <section className="flex flex-col bg-surface-container-low shadow-xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-space-lg bg-surface-container gap-space-xs">
        <div>
          <h2 className="font-headline-sm text-headline-sm text-on-surface uppercase tracking-wider">Logged Telemetry History</h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Displaying recorded sensor data points</p>
        </div>
        <div className="flex items-center gap-space-sm self-end sm:self-auto font-label-code text-label-code text-on-surface-variant bg-surface-container-lowest px-space-sm py-1">
          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
          <span>SHOWING {visibleReadings.length} OF {readings.length} RECORDS</span>
        </div>
      </div>

      <div className="overflow-x-auto w-full bg-surface-container-lowest">
        <table className="w-full text-left font-body-sm text-body-sm">
          <thead className="bg-surface-container-high text-on-surface-variant font-label-code text-label-code uppercase tracking-wider select-none">
            <tr>
              <th className="py-space-sm px-space-md font-semibold">DATE & TIME</th>
              <th className="py-space-sm px-space-md font-semibold text-right">TEMP (°C)</th>
              <th className="py-space-sm px-space-md font-semibold text-right">HUMIDITY (%)</th>
              <th className="py-space-sm px-space-md font-semibold text-right">HEAT IDX (°C)</th>
              <th className="py-space-sm px-space-md font-semibold text-right">HEAT IDX (°F)</th>
            </tr>
          </thead>
          <tbody className="divide-y-0">
            {visibleReadings.map((item, index) => {
              const isStripe = index % 2 === 1 ? 'bg-surface-container-low/40' : '';
              return (
                <tr key={item.id || index} className={`hover:bg-surface-container transition-colors group ${isStripe}`}>
                  <td className="py-space-sm px-space-md font-label-code text-on-surface whitespace-nowrap">
                    {new Date(item.timestamp).toLocaleString()}
                  </td>
                  <td className="py-space-sm px-space-md text-right tabular-nums font-semibold text-on-surface">
                    {Number(item.temperature_c).toFixed(1)}°C
                  </td>
                  <td className="py-space-sm px-space-md text-right tabular-nums text-secondary font-medium">
                    {Number(item.humidity_percent).toFixed(1)}%
                  </td>
                  <td className="py-space-sm px-space-md text-right tabular-nums text-tertiary">
                    {Number(item.heat_index_c).toFixed(1)}°C
                  </td>
                  <td className="py-space-sm px-space-md text-right tabular-nums text-tertiary-fixed-dim">
                    {Number(item.heat_index_f).toFixed(1)}°F
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between p-space-md bg-surface-container gap-space-sm">
        <div className="font-label-code text-label-code text-on-surface-variant flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-[14px]">database</span>
          <span>BUFFER CAPACITY: {readings.length} FRAMES CACHED</span>
        </div>
        {hasMore ? (
          <button 
            onClick={() => setDisplayCount(prev => prev + 10)}
            className="w-full sm:w-auto px-space-lg py-space-sm bg-primary text-on-primary font-label-code text-label-code font-bold uppercase tracking-wider hover:bg-primary-fixed-dim transition-colors flex items-center justify-center gap-space-xs"
          >
            <span className="material-symbols-outlined text-[16px]">expand_more</span>
            <span>Load More Readings</span>
          </button>
        ) : (
          <button disabled className="w-full sm:w-auto px-space-lg py-space-sm bg-surface-container-high text-on-surface-variant font-label-code text-label-code font-bold uppercase tracking-wider cursor-default flex items-center justify-center gap-space-xs">
            <span className="material-symbols-outlined text-[16px]">done_all</span>
            <span>Showing all readings</span>
          </button>
        )}
      </div>
    </section>
  );
}