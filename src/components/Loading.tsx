import React from 'react';
import { useState, useEffect, useRef } from 'react';

export default function Loading(): JSX.Element {
  const [loading, setLoading] = useState<string>('Loading');

  const intervalRef = useRef<string>('Loading');

  useEffect(() => {
    const timer = setInterval(() => {
      if (intervalRef.current.length === 10) {
        intervalRef.current = 'Loading';
      } else {
        intervalRef.current += '.';
      }

      setLoading(intervalRef.current);
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <main className="flex justify-center mt-14">
      <h1 className="text-4xl">{loading}</h1>
    </main>
  );
}
