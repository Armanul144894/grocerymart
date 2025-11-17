'use client'
import { Gift } from 'lucide-react'
import React, { useEffect, useState } from 'react'

export default function DayDeal() {
    const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 34, seconds: 56 });
    useEffect(() => {
        const countdown = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
                if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
                return prev;
            });
        }, 1000);
        return () => clearInterval(countdown);
    }, []);
    return (
        <div>
            {/* Deal of the Day */}
            <section className="py-12 bg-gradient-to-r from-red-600 via-red-500 to-orange-500">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-between text-white">
                        <div className="flex items-center gap-4">
                            <Gift size={60} />
                            <div>
                                <h2 className="text-4xl font-bold mb-2">Deal of the Day</h2>
                                <p className="text-xl">Save up to 50% on selected items - Limited Time!</p>
                            </div>
                        </div>
                        <div className="flex justify-center gap-4">
                            {[
                                { value: timeLeft.hours, label: 'HOURS' },
                                { value: timeLeft.minutes, label: 'MINS' },
                                { value: timeLeft.seconds, label: 'SECS' },
                            ].map((time, idx) => (
                                <div key={idx} className="bg-white text-gray-900 rounded-xl p-4 min-w-[100px] text-center">
                                    <div className="text-4xl font-bold">{String(time.value).padStart(2, '0')}</div>
                                    <div className="text-xs font-semibold text-gray-600 mt-1">{time.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
