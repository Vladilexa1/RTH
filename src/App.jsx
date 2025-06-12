import AltitudeBlock from "./components/altitude_block";
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
            <SafeRadius></SafeRadius>
            <Voltage></Voltage>
            <HowerBlock></HowerBlock>
            <Discard></Discard>
            
          </div>
          <Map></Map>
          
        </div>
      </div>
  );
}

export default App;
