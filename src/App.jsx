import AltitudeBlock from "./components/altitude_block";
import Discard from "./components/discard";
import Map from "./components/map";
import Navbar from "./components/navbar";
import SafeRadius from "./components/safeRadius";


function App() {
  return (
      <div>
        <Navbar/>
        <div class="container">
          <AltitudeBlock></AltitudeBlock>
          <div>
          <SafeRadius></SafeRadius>
          <Discard></Discard>
          </div>
          
          <Map></Map>
          
        </div>
      </div>
  );
}

export default App;
