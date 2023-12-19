import React from "react";
import { fx } from "./RevoltFX";
import { Container } from "react-pixi-fiber";
const PlasmaCorona = ({ position, show = true }) => {
  const ref = React.useRef();
  const emit = React.useRef();
  React.useEffect(() => {
    if (show) {
      const emitter = fx.getParticleEmitter("paint");
      emit.current = emitter.init(ref.current, true, 0.5);
    } else {
      if (!emit.current) return;
      emit.current.stop();
    }
  }, [show]);
  return <Container ref={ref} position={position} />;
};
export default PlasmaCorona;
