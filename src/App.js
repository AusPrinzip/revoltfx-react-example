import React from "react";
import { Stage } from "react-pixi-fiber";
import "./styles.css";
import Dot from "./Dot";
import RevoltFX from "./RevoltFX";
const height = 450;
const width = 600;
const OPTIONS = {
  backgroundColor: 0x000000,
  height: height,
  width: width
};
export default function App() {
  // React.useEffect(() => {
  //   setInterval(() => {
  //     setWidth(prev => prev + 10);
  //   }, 10000);
  // }, []);
  // useFx();
  return (
    <div className="App">
      <h1>Test</h1>
      <Stage options={OPTIONS}>
        <RevoltFX>
          <Dot />
        </RevoltFX>
        {/* <PlasmaCorona /> */}
      </Stage>
      <p>Test</p>
    </div>
  );
}
