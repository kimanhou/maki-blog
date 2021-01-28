import { useEffect, useState } from "react";

const useScroll = (start : number, distance : number, dependencies ?:  React.InputIdentityList) => {
    const [scrolledDistance, setScrolledDistance] = useState(0);
    useEffect(() => {
        const onScroll = () => {
            setScrolledDistance(Math.min(Math.max(window.scrollY - start, 0), distance));
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, dependencies);
    return scrolledDistance;
}
export default useScroll;