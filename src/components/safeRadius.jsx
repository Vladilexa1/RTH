export default function SafeRadius() {
    return (
        <div class="safe-radius bgcol bord">
            <span>R = </span>
            <input type="number" class="safe-radius-number input-number-right number-big-width"></input>
            <span>m</span>
            <input type="range" class="safe-radius-range"/>
            <p class="title-safe-radius">Safe radius dropping</p>
          </div>
    );
}