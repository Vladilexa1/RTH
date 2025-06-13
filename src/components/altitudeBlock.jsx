import { createSignal } from "solid-js";
import Altitude from "./altitude";

export default function AltitudeBlock() {
  const [minValue, setMinValue] = createSignal();
  const [maxValue, setMaxValue] = createSignal();

  return (
    <div class="altitude-block bgcol bord">
      <Altitude
        title="Min altitude RTH"
        value={minValue()}
        setValue={setMinValue}
        min={0}
        max={maxValue()} // ограничиваем сверху
      />
      <Altitude
        title="Max altitude RTH"
        value={maxValue()}
        setValue={setMaxValue}
        min={minValue()} // ограничиваем снизу
        max={100}
      />
    </div>
  );
}