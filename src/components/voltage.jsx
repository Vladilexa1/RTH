export default function Voltage() {
    return (
        <div class="bgcol bord voltage-block">
            <input type="number" class="number-voltage input-number-right number-width" min="0" step="0.1" ></input>
            <label>V</label>
            <p class="voltage-p">Specify voltage when to return</p>
        </div>
    );
}