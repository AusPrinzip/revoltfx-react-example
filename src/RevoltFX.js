import React from "react";
import * as PIXI from "pixi.js";
import { FX } from "revolt-fx";
import { usePixiTicker } from "react-pixi-fiber";
window.PIXI = PIXI;
export let fx = new FX();

const loadFX = () =>
  new Promise(resolve => {
    const loader = new PIXI.Loader();
    loader.add(
      "fx_settings",
      "https://raw.githubusercontent.com/bma73/revolt-fx/master/examples/assets/default-bundle.json"
    );
    loader.add(
      "fx_spritesheet",
      "https://raw.githubusercontent.com/bma73/revolt-fx/master/examples/assets/revoltfx-spritesheet.json"
    );
    loader.add(
      "example_spritesheet",
      "https://raw.githubusercontent.com/bma73/revolt-fx/master/examples/assets/rfx-examples.json"
    );
    loader.load((loader, resources) => {
      fx.initBundle(resources.fx_settings.data);
      resolve(true);
    });
  });
const RevoltFX = ({ children }) => {
  const [ready, setReady] = React.useState(false);
  React.useEffect(() => {
    fx = new FX();
    loadFX().then(setReady);
    return () => {
      fx.stopAllEffects();
      fx.clearCache();
      fx.dispose();
    };
  }, []);
  usePixiTicker(delta => {
    fx.update(delta);
  });

  if (ready) return children;
  return null;
};

export default RevoltFX;
// // emitter.rotation = -Math.PI * 0.5 + Math.random().float(-0.5, 0.5);

// const RevoltFX = () => {
//   const ref = React.useRef();
//   usePixiTicker(delta => {
//     fx.update(delta);
//   });

//   React.useEffect(() => {
//     loader.load((loader, resources) => {
//       fx.initBundle(resources.fx_settings.data);
//       const emitter = fx.getParticleEmitter("plasma-corona");

//       emitter.x = 100;
//       emitter.y = 100;
//       emitter.init(ref.current);

//       return () => {
//         emitter.dispose();
//       };
//     });

//     // emitter.init(ref.current);
//   }, [ref]);

//   return <ParticleContainer ref={ref} />;
// };
// export default RevoltFX;
