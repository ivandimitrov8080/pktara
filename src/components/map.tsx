"use client"
import { createContext, useEffect, useRef, useState } from "react";
import Cities from "./cities";
import { Dimensions } from "@/types/main";


export const MapContext = createContext({
  width: 0,
  height: 0
})

export default function Map() {

  const ref = useRef({} as any)

  const [w, setW] = useState(0)
  const [h, setH] = useState(0)

  useEffect(() => {
    if (ref.current) {
      setW(ref.current.offsetWidth)
      setH(ref.current.offsetHeight)
    }
  }, [])

  const bounds = {
    east: 1.7550,
    west: -8.1716,
    north: 58.6174,
    south: 49.9614
  }

  const size = {
    width: Math.abs(bounds.east) - Math.abs(bounds.west),
    height: Math.abs(bounds.north) - Math.abs(bounds.south),
  }

  const convertToPercentage = (lat: number, lon: number): Dimensions => {
    const height = 0
    const width = (lon - bounds.west)
    console.log(bounds.south)
    console.log(lat, lon)
    return {
      width,
      height
    }
  }

  return (
    <div ref={ref} className="h-screen w-max">
      <MapContext.Provider value={{
        width: w,
        height: h
      }}>
        <Cities perc={convertToPercentage} />
        <img className="h-screen w-max" src="/uk.svg" alt="map" />
      </MapContext.Provider>
    </div >
  );
}
