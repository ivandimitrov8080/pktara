import { Dimensions } from "@/types/main";
import City from "./city";
import { useContext } from "react";
import { MapContext } from "./map";


type Props = {
  perc: (lat: number, lon: number) => Dimensions
}

export default function Cities({ perc }: Props) {

  const imgD = useContext(MapContext)

  const city = (name: string, lat: number, lon: number) => {
    const p = perc(lat, lon)
    const w = imgD.width
    const h = imgD.height
    return (
      <City name={name} left={p.width * w} top={h - (p.height * h)} />
    )
  }

  return (
    <div className="absolute z-30">
      {city("Bristol", 51.454514, -2.587910)}
    </div>
  );
}
