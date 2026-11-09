import React from 'react';

export default function CurrentReading({ reading }) {
  const formattedTime = new Date(reading.timestamp).toLocaleString();

  return (
    <section className="flex flex-col bg-surface-container-low shadow-xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-space-lg py-space-md bg-surface-container gap-space-xs">
        <div className="flex items-center gap-space-sm">
          <span className="material-symbols-outlined text-primary text-[18px]">sensors</span>
          <span className="font-label-code text-label-code text-on-surface uppercase font-bold tracking-wider">CURRENT ATMOSPHERIC STATE</span>
          <span className="font-label-code text-label-code text-on-surface-variant">//</span>
          <span className="font-label-code text-label-code text-on-surface-variant">{formattedTime}</span>
        </div>
        <div className="flex items-center gap-space-xs">
          <span className="bg-primary text-on-primary font-status-badge text-status-badge px-space-sm py-0.5 uppercase tracking-wider font-bold">JUST NOW</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-sm p-space-md bg-surface-container-lowest">
        {/* Temp */}
        <div className="flex flex-col justify-between bg-surface-container p-space-md relative overflow-hidden group">
          <div className="flex items-center justify-between">
            <span className="font-label-code text-label-code uppercase text-on-surface-variant">AIR TEMPERATURE</span>
            <span className="material-symbols-outlined text-primary text-[20px]">thermostat</span>
          </div>
          <div className="my-space-md">
            <div className="flex items-baseline gap-space-xs">
              <span className="font-telemetry-metric text-telemetry-metric text-on-surface font-semibold tracking-tight">{Number(reading.temperature_c).toFixed(1)}</span>
              <span className="font-label-code text-label-code text-primary uppercase font-bold">°C</span>
            </div>
          </div>
        </div>

        {/* Humidity */}
        <div className="flex flex-col justify-between bg-surface-container p-space-md relative overflow-hidden group">
          <div className="flex items-center justify-between">
            <span className="font-label-code text-label-code uppercase text-on-surface-variant">RELATIVE HUMIDITY</span>
            <span className="material-symbols-outlined text-secondary text-[20px]">humidity_percentage</span>
          </div>
          <div className="my-space-md">
            <div className="flex items-baseline gap-space-xs">
              <span className="font-telemetry-metric text-telemetry-metric text-on-surface font-semibold tracking-tight">{Number(reading.humidity_percent).toFixed(1)}</span>
              <span className="font-label-code text-label-code text-secondary uppercase font-bold">% RH</span>
            </div>
          </div>
        </div>

        {/* Heat Index C */}
        <div className="flex flex-col justify-between bg-surface-container p-space-md relative overflow-hidden group">
          <div className="flex items-center justify-between">
            <span className="font-label-code text-label-code uppercase text-on-surface-variant">HEAT INDEX (C)</span>
            <span className="material-symbols-outlined text-tertiary text-[20px]">heat</span>
          </div>
          <div className="my-space-md">
            <div className="flex items-baseline gap-space-xs">
              <span className="font-telemetry-metric text-telemetry-metric text-on-surface font-semibold tracking-tight">{Number(reading.heat_index_c).toFixed(1)}</span>
              <span className="font-label-code text-label-code text-tertiary uppercase font-bold">°C APP</span>
            </div>
          </div>
        </div>

        {/* Heat Index F */}
        <div className="flex flex-col justify-between bg-surface-container p-space-md relative overflow-hidden group">
          <div className="flex items-center justify-between">
            <span className="font-label-code text-label-code uppercase text-on-surface-variant">HEAT INDEX (F)</span>
            <span className="material-symbols-outlined text-tertiary text-[20px]">air</span>
          </div>
          <div className="my-space-md">
            <div className="flex items-baseline gap-space-xs">
              <span className="font-telemetry-metric text-telemetry-metric text-on-surface font-semibold tracking-tight">{Number(reading.heat_index_f).toFixed(1)}</span>
              <span className="font-label-code text-label-code text-tertiary uppercase font-bold">°F APP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}