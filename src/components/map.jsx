import { createSignal } from "solid-js";
import SafeRadius from "./safeRadius";


export default function RTHMap(props) {
  const [target, setTarget] = createSignal(null);
  
  const home = { x: 125, y: 175 };
  const drone = { x: 225, y: 176 };

  return (
    <>
      <div
        class="square"
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setTarget({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
          });
        }}
      >
        {/* Дом */}
        <div style={{ position: "absolute", left: `${home.x}px`, top: `${home.y}px` }}>
          <img class="home-img" src="./src/assets/house.svg" />
        </div>

        {/* Дрон */}
        <div style={{ position: "absolute", left: `${drone.x}px`, top: `${drone.y}px` }}>
          <img class="drone-img" src="./src/assets/drone.svg" />
        </div>

        <svg width="400" height="400" style={{ position: "absolute", top: 0, left: 0 }}>
          <line
            x1={home.x + 25}
            y1={home.y + 16}
            x2={drone.x - 10}
            y2={drone.y + 15}
            stroke="black"
            marker-end="url(#arrow)"
          />
          <text
            x={(home.x + drone.x) / 2 + 16}
            y={(home.y + drone.y) / 2 + 8}
            font-size="14"
            fill="black"
            text-anchor="middle"
          >
            R = {props.safeRadius}m
          </text>

          {target() && (
            <>
              <line
                x1={home.x + 13}
                y1={home.y + 13}
                x2={target().x}
                y2={target().y}
                stroke="black"
              />
              <line
                x1={drone.x + 13}
                y1={drone.y + 13}
                x2={target().x}
                y2={target().y}
                stroke="black"
              />
              <text
                x={(home.x + target().x) / 2}
                y={(home.y + target().y) / 2 - 10}
                font-size="14"
                fill="black"
                text-anchor="middle"
              >
                l = {Math.round(Math.hypot(target().x - home.x - 13, target().y - home.y - 13))} m
              </text>
            </>
          )}
          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill="black" />
            </marker>
          </defs>
        </svg>

        {target() && (
          <div
            class="point"
            style={{
              left: `${target().x}px`,
              top: `${target().y}px`,
            }}
          ></div>
        )}
      </div>
    </>
  );
}