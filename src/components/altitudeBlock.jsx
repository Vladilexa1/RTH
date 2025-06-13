import { createSignal } from "solid-js";
import Altitude from "./altitude";

export default function AltitudeBlock() {
  const [minValue, setMinValue] = createSignal(0);
  const [maxValue, setMaxValue] = createSignal(0);

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
        max={1000}
      />
    </div>
  );
}