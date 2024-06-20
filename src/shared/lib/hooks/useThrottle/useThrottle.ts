import { useCallback, useEffect, useRef } from 'react';
import setTimeout = jest.setTimeout;

export function useThrottle(callback: (...args: any[]) => void, delay: number) {
    const throttleRef = useRef(false);
    const timeoutRef = useRef<any>(null);
    const throttleCallback = useCallback((...args: any[]) => {
        if (!throttleRef.current) {
            callback(...args);
            throttleRef.current = true;

            timeoutRef.current = setTimeout(() => {
                throttleRef.current = false;
                // @ts-ignore
            }, delay);
        }
    }, [callback, delay]);

    useEffect(() => {
        clearTimeout(timeoutRef.current);
    }, []);
    return throttleCallback;
}
