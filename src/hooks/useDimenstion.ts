import { useEffect, useState } from "react";

export default function useDimenstion() {
    const [size, setWidth] = useState({
        width: 0,
        height: 0
    });

    useEffect(() => {
        function handleResize() {
            setWidth({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return size
}