import Altitude from "./altitude";

export default function AltitudeBlock(props) {
    return (
        <div class="altitude-block bgcol bord">
            <Altitude
            title="Min altitude RTH"
          />
          <Altitude
            title="Max altitude RTH"
          />
        </div>
    );
}