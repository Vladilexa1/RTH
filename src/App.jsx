import AltitudeBlock from "./components/altitude_block";
import Map from "./components/map";
import Navbar from "./components/navbar";
import SafeRadius from "./components/safeRadius";


function App() {
  return (
      <div>
        <Navbar/>
        <div class="container">
          <AltitudeBlock></AltitudeBlock>
          <Map></Map>
        </div>
      </div>
  );
}

export default App;
