import debounce from "@/Utils/customFun/debounce"
import { useEffect, useState } from "react"

const useScreenWidth = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleScreenResize = debounce(() => {
            setScreenWidth(window.innerWidth)
        }, 200)

        window.addEventListener("resize", handleScreenResize)

        return () => window.removeEventListener("resize", handleScreenResize)
    }, [])

    return screenWidth;
}
export default useScreenWidth ;