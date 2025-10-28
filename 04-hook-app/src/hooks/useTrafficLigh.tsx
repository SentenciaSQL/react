import { useEffect, useState } from 'react'

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse'
}

type TrafficLightColor = keyof typeof colors;

export const useTrafficLigh = () => {

    const [light, setLigth] = useState<TrafficLightColor>('red');
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        if (countdown === 0) return;

        const intervalId = setInterval(() => {
            console.log({ countdown });

            setCountdown(prev => prev - 1);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }

    }, [countdown]);

    useEffect(() => {
        if (countdown > 0) return;

        setCountdown(5);
        if (light === 'red') {
            setLigth('green');
            return;
        }
        if (light === 'yellow') {
            setLigth('red');
            return;
        }
        if (light === 'green') {
            setLigth('yellow');
            return;
        }

    }, [countdown, light])

    return {
        // Props
        countdown,

        // Computed
        percentage: (countdown / 5) * 100,
        greenLight: light === 'green' ? colors.green : 'bg-gray-500',
        redLight: light === 'red' ? colors.red : 'bg-gray-500',
        yellowLight: light === 'yellow' ? colors.yellow : 'bg-gray-500'

        // Methods
    }
}
