import DG from "2gis-maps";
import { useEffect } from 'react';

import mapIcon from "../../../../public/comtehno.png"

export const Map = () => {
    useEffect(() => {
        let gis
        gis = DG.map("map-container", {
            center:[42.8593904, 74.667780],
            zoom: 15
        })

        const icon = DG.icon({
            iconUrl: mapIcon,
            iconSize: [30, 30]
        })

        DG.marker([42.8593904, 74.667780], {icon: icon}).addTo(gis).bindPopup("Open!")
    },[])
    return (
        <div id='map-container' className="w-full mb-[40px] rounded-[20px] r-md:h-[300px] h-[500px]">

        </div>
    )

}