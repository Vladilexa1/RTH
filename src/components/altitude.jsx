export default function Altitude(props) {
    return (
        <div class="altitude">
            <input type="range" min="0" max="100" step="1" value="50" orient="vertical"/>  
            <div>
                <input type="number" class="number-altitude number-width"></input>
                <label>m</label>
            </div>   
            <p class="title-alitude">{props.title}</p>
        </div>
    );
}