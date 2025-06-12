import AltitudeBlock from "./components/altitude_block";
import Delay from "./components/delay";
import Discard from "./components/discard";
import HowerBlock from "./components/howerBlock";
import Map from "./components/map";
import Navbar from "./components/navbar";
import SafeRadius from "./components/safeRadius";
import Voltage from "./components/voltage";


function App() {
  return (
      <div>
        <Navbar/>
        <div class="container">
          <AltitudeBlock></AltitudeBlock>
          <div>
            <Voltage></Voltage>
            <Delay></Delay>
            <HowerBlock></HowerBlock>
            <Discard></Discard>
          </div>
          <Map></Map>
          
        </div>
      </div>
  );
}

export default App;
