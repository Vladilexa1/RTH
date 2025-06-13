import { createSignal } from "solid-js";


export default function Altitude(props) {
    return (
      <div class="altitude">
        <input
          type="range"
          min={props.min}
          max={props.max}
          step="1"
          value={props.value}
          orient="vertical"
          onInput={(e) => props.setValue(+e.target.value)}
        />
        <div>
          <input
            type="number"
            class="number-altitude number-width"
            value={props.value}
            min={props.min}
            max={props.max}
            onInput={(e) => props.setValue(+e.target.value)}
          />
          <label>m</label>
        </div>
        <p class="title-alitude">{props.title}</p>
      </div>
    );
  }