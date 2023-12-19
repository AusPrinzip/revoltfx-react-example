import React from "react";
import { fx } from "./RevoltFX";
import { Container } from "react-pixi-fiber";
const PlasmaCorona = ({ position }) => {
  const ref = React.useRef();
  React.useEffect(() => {
    const emitter = fx.getParticleEmitter("plasma-corona");
    emitter.init(ref.current, true, 1);
    return () => {
      emitter.stop(false);
      emitter.dispose();
    };
  }, []);
  return <Container ref={ref} position={position} />;
};
export default PlasmaCorona;
