import React from 'react';

export default function DeviceStatus({ totalPackets }) {
  return (
    <section className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm bg-surface-container-low px-space-md py-space-sm">
      <div className="flex flex-col gap-space-xs">
        <div className="flex items-center gap-space-sm">
          <h1 className="font-headline-sm text-headline-sm text-on-surface uppercase tracking-wider">Atmospheric Telemetry Monitor</h1>
          <span className="bg-surface-container-high text-on-surface-variant font-status-badge text-status-badge px-space-xs py-0.5 tracking-widest uppercase">REV 4.2</span>
        </div>
        <div className="flex items-center gap-space-sm font-label-code text-label-code text-on-surface-variant">
          <span>ASSIGNED: <span className="text-secondary">DHT11-NODE</span></span>
          <span>•</span>
          <span>LOCATION: <span className="text-on-surface">LAB BAY-A</span></span>
          <span>•</span>
          <span>SAMPLE_RATE: <span className="text-on-surface">LIVE</span></span>
        </div>
      </div>
      <div className="flex items-center gap-space-md self-start md:self-auto">
        <div className="flex items-center gap-space-xs bg-primary/10 px-space-sm py-1">
          <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
          <span className="font-status-badge text-status-badge text-primary uppercase tracking-widest">LIVE CONNECTED</span>
        </div>
        <div className="font-label-code text-label-code text-on-surface-variant bg-surface-container-lowest px-space-sm py-1">
          PACKETS: <span className="text-primary font-bold">{totalPackets.toLocaleString()} OK</span>
        </div>
      </div>
    </section>
  );
}