import { useEffect, useState } from "react"

export function Time({ timezone }) {

    const [time, setTime] = useState('');

    useEffect(() => {
        compileTime(timezone);
    }, [timezone]);

    const compileTime = (timezone) => {
        const currentTimezoneTime = Date.now();
        const currentTimezoneOffset = new Date().getTimezoneOffset() * 60 * 1000;
        const newTimeNumber = currentTimezoneTime + currentTimezoneOffset + timezone * 1000;
        const currentTimeString = new Date(newTimeNumber).toTimeString();

        const newTime =  currentTimeString.split('').splice(0, 5).join('') + ' ' + new Date(newTimeNumber).toDateString()
        setTime(newTime);
    }



    return <div>
        { 
           time
        }
    </div>
}