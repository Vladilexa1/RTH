import { createSignal } from "solid-js";
import AltitudeBlock from "./components/altitudeBlock";
import Delay from "./components/delay";
import Discard from "./components/discard";
import HowerBlock from "./components/howerBlock";
import Map from "./components/map";
import Navbar from "./components/navbar";
import SafeRadius from "./components/safeRadius";
import Voltage from "./components/voltage";
import Footer from "./components/footer";


function App() {
  const [safeRadius, setSafeRadius] = createSignal(0);
  return (
      <div>
        <Navbar/>
        <div class="container bgcol">
          <div class="col-7 col-xl-5 col-xxl-4" >
            <div class="settings-all">
              <div>
                <AltitudeBlock></AltitudeBlock>
              </div>
              <div class="settings-block">
                <Voltage></Voltage>
                <Delay></Delay>
                <HowerBlock></HowerBlock>
                <Discard></Discard>
              </div>
            </div>
            <SafeRadius value={safeRadius()} onChange={setSafeRadius}></SafeRadius>   
          </div>
          <div class="col-12 col-xl-5 col-xxl-4 map-block">
            <Map safeRadius={safeRadius()}/>
          </div>
        </div>
        <Footer></Footer>
      </div>
  );
}

export default App;
