import React from "react";
import { Sprite, Container, usePixiApp } from "react-pixi-fiber";
import * as PIXI from "pixi.js";
import PlasmaCorona from "./PlasmaCorona";
import Center from "./Center";

const centerAnchor = new PIXI.Point(0.5, 0.5);

var beeSvg =
  "https://upload.wikimedia.org/wikipedia/commons/a/a0/Circle_-_black_simple.svg";
function Bunny(props) {
  const { screen } = usePixiApp();

  const [index, setIndex] = React.useState(0);
  const points = React.useMemo(() => {
    const numberOfObjects = 10;
    const radius = 150;
    return Array(numberOfObjects)
      .fill()
      .map((_, i) => {
        const angle = (i * Math.PI * 2) / numberOfObjects;
        return [Math.cos(angle) * radius, Math.sin(angle) * radius];
      });
  }, []);

  React.useEffect(() => {
    setInterval(() => {
      setIndex(prev => (prev + 1) % 10);
    }, 100);
  }, []);

  return (
    <Container position={[screen.width / 2, screen.height / 2]}>
      {points.map((x, i) => (
        <Container position={x}>
          <Sprite
            alpha={0.2}
            anchor={centerAnchor}
            scale={[0.15, 0.15]}
            texture={PIXI.Texture.from(beeSvg)}
            {...props}
          />
          <PlasmaCorona position={[0, 0]} show={i === index} />
        </Container>
      ))}
      <Center position={[0, 0]} />
    </Container>
  );
}

export default Bunny;
