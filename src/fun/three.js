import React, { useRef } from "react"
import { Canvas, useFrame } from "react-three-fiber"

function Three() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Mesh />
    </Canvas>
  )
}

export default Three

function Mesh() {
  const mesh = useRef()

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={mesh}>
      <coneBufferGeometry args={[2.5, 3, 4]} />
      <meshStandardMaterial color={"#6b46c1"} />
    </mesh>
  )
}
