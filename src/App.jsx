import AltitudeBlock from "./components/altitudeBlock";
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
            <SafeRadius></SafeRadius>   
          </div>
          <div class="col-md-6 map-block">
            <Map/>
            
          </div>
        </div>
      </div>
  );
}

export default App;
