import React, { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';
import Header from './Header';
import DeviceStatus from './DeviceStatus';
import CurrentReading from './CurrentReading';
import HistoryTable from './HistoryTable';

export default function Dashboard() {
  const [readings, setReadings] = useState([]);
  const [currentReading, setCurrentReading] = useState(null);

  useEffect(() => {
    // Assuming your ESP32 pushes data to a 'readings' node in Firebase
    const readingsRef = ref(db, 'devices/esp32_01/readings');
    
    const unsubscribe = onValue(readingsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Convert Firebase object of objects into an array
        const dataArray = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
        
        // Sort by timestamp descending (newest first)
        dataArray.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        
        setReadings(dataArray);
        setCurrentReading(dataArray[0]); // Most recent reading
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <Header />
      <main className="w-full max-w-7xl mx-auto px-margin-mobile md:px-margin py-space-lg md:py-space-xl">
        <div className="flex flex-col w-full gap-space-xl">
          <DeviceStatus totalPackets={readings.length} />
          {currentReading ? (
            <CurrentReading reading={currentReading} />
          ) : (
            <div className="text-center p-8 bg-surface-container-low">Waiting for sensor data...</div>
          )}
          <HistoryTable readings={readings} />
        </div>
      </main>
    </>
  );
}