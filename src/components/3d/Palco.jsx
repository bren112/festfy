import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF } from "@react-three/drei";

function TicketModel() {
  const { scene } = useGLTF("/models/palco.glb");
  return <primitive object={scene} scale={1.4} />;
}

export default function Palco3d() {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <Canvas shadows camera={{ position: [4, 4, 4], fov: 45 }}>
        <Stage
          intensity={0.6}
          environment="city"
          shadows="contact"
        >
          <TicketModel />
        </Stage>

        <OrbitControls
          enableZoom={true}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
