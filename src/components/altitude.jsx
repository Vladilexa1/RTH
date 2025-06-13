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
            class="number-altitude number-width"
            type="number"
            value={props.value}
            onInput={(e) => {
              let cleaned = e.target.value.replace(/\D/g, "");
              cleaned = cleaned.replace(/^0+(?!$)/, "")
              props.setValue(cleaned ? +cleaned : props.min);
            }}
            onBlur={() => {
              let num = props.value;
              if (num < props.min) props.setValue(props.min);
              if (num > props.max) props.setValue(props.max);
            }}
          />
          <label>m</label>
        </div>
        <p class="title-alitude">{props.title}</p>
      </div>
    );
  }