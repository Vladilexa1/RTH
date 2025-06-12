export default function Voltage() {
    return (
        <div class="voltage">
            <input type="number" class="number-voltage" min="0" step="0.1" ></input>
            <label>V</label>
            <p class="voltage-p">Specify voltage when to return</p>
        </div>
    );
}