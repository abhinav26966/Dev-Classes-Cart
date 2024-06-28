import { useEffect, useState } from "react";

function useWindowProps() {
    const [height, setHeight] = useState(window.innerHeight)
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        function handleResize() {
            setHeight(window.innerHeight)
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return [height, width]
}

export default useWindowProps;