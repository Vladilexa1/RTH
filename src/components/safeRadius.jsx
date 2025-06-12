export default function SafeRadius() {
    return (
        <div class="safe-radius">
            <span>R = </span>
            <input type="number" class="safe-radius-number"></input>
            <input type="range" class="safe-radius-range"/>
            <p class="title-safe-radius">Safe radius dropping</p>
          </div>
    );
}