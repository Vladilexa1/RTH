export default function Delay(props) {
    return (
        <div class="bgcol bord delay-block"> 
              <input 
              type="number"
              class="delay-number input-number-right number-big-width"
              onBlur={() => {
                let num = props.value;
                if (num < 0) num == 0
                if (num > 200) num == 200;
              }}
              />
              <label>Sec.</label>
              <p>Delay before RTH activation</p>
        </div>
    );
}