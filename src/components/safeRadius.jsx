import { createSignal, createEffect } from 'solid-js';

export default function SafeRadius(props) {
  const [inputValueR, setInputValueR] = createSignal(props.value);

  createEffect(() => {
    setInputValueR(props.value);
  });

  return (
    <div class="safe-radius bgcol bord">
      <span>R = </span>
      <input
        class='safe-radius-number input-number-right number-big-width'
        type='number'
        value={inputValueR()}
        onInput={(e) => {
          let value = e.target.value.replace(/\D/g, "");
          value = value.replace(/^0+(?!$)/, "");
          setInputValueR(value);
        }}
        onBlur={() => {
          let numeric = +inputValueR();
          if (numeric < 0) numeric = 0;
          if (numeric > 100) numeric = 100;
          props.onChange(numeric); // передаём значение наружу
        }}
      />
      <span>m</span>
      <input
        class='safe-radius-range'
        type='range'
        min={0}
        max={100}
        value={props.value}
        onInput={(e) => {
          const val = +e.target.value;
          props.onChange(val); // передаём значение наружу
        }}
      />
      <p class="title-safe-radius">Safe radius dropping</p>
    </div>
  );
}