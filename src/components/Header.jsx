import React from 'react';

export default function Header() {
  return (
    <header className="w-full bg-surface-container-low/80 backdrop-blur-xl">
      <div className="w-full max-w-7xl mx-auto px-margin-mobile md:px-margin py-space-sm flex items-center justify-between">
        <div className="flex items-center gap-space-sm">
          <div className="flex items-center gap-space-xs">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-label-code text-label-code uppercase tracking-wider text-primary">LINK ACTIVE</span>
          </div>
          <span className="text-on-surface-variant font-label-code text-label-code">//</span>
          <span className="font-label-code text-label-code text-on-surface-variant">
            DEV_ID: <span className="text-on-surface">ESP32-NODE-01</span>
          </span>
        </div>
        <div className="flex items-center gap-space-md">
          <div className="hidden sm:flex items-center gap-space-xs font-label-code text-label-code text-on-surface-variant">
            <span className="material-symbols-outlined text-[14px] text-primary">sensors</span>
            <span>9600 BAUD</span>
          </div>
        </div>
      </div>
    </header>
  );
}