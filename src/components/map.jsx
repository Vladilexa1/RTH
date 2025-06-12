import SafeRadius from "./safeRadius";


export default function Map(props) {
    return (
        <div>
            <div class="square">
            <span>R = 123 m</span>
                <div class="image">
                  <img class="home-img" src="./src/assets/house.svg"/>
                  
                  <div class="line" style={{width: "123px"}}>
                    <div class="bullet"></div>
                  </div>
                  <img class="drone-img" src="./src/assets/drone.svg"/>
                </div>
            </div>
            <SafeRadius/>
        </div>
    );
}