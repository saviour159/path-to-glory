"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date("2026-06-11T19:00:00Z");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );

      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-12 flex gap-6 justify-center">
      <div className="rounded-xl bg-white/5 p-6">
        <h3 className="text-4xl font-bold">{timeLeft.days}</h3>
        <p>Days</p>
      </div>

      <div className="rounded-xl bg-white/5 p-6">
        <h3 className="text-4xl font-bold">{timeLeft.hours}</h3>
        <p>Hours</p>
      </div>

      <div className="rounded-xl bg-white/5 p-6">
        <h3 className="text-4xl font-bold">{timeLeft.minutes}</h3>
        <p>Minutes</p>
      </div>
      <div className="rounded-xl bg-white/5 p-6">
        <h3 className="text-4xl font-bold">{timeLeft.seconds}</h3>
        <p>Seconds</p>
      </div>
    </div>
  );
}
