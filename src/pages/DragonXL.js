import React, { Suspense, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Environment, useGLTF, OrbitControls } from "@react-three/drei"
import { proxy, useSnapshot } from "valtio"

const state = proxy({
    current: null,
})


function Aircraft(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/dragon_xl_-_spacex/scene.gltf')
    const [hovered, set] = useState(null)
    console.log(hovered)
    return (
        <group ref={group} {...props} dispose={null}
            onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
            onPointerOut={(e) => e.intersections.length === 0 && set(null)}
            onPointerMissed={() => (state.current = null)}
            onPointerDown={(e) => (e.stopPropagation(), (state.current = e.object.material.name))}
        >
             <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group name="Dragon_XL" rotation={[-Math.PI / 2, 0, -2.05]} scale={100}>
            <group position={[0, 0, 10.79]} rotation={[-Math.PI, 0, -Math.PI]}>
              <group position={[0, 0, 1.01]} rotation={[Math.PI, 0, Math.PI]}>
                <group position={[0, 0.58, 0]} rotation={[0.66, 0, 0]}>
                  <mesh
                    geometry={nodes.Dragon_2_Capsule002_Dragon_2_XL_Metal_2_Crumbled_0.geometry}
                    material={nodes.Dragon_2_Capsule002_Dragon_2_XL_Metal_2_Crumbled_0.material}
                  />
                </group>
                <group position={[-0.5, -0.29, 0]} rotation={[-0.37, 0.56, 2.2]}>
                  <mesh
                    geometry={nodes.Dragon_2_Capsule003_Dragon_2_XL_Metal_2_Crumbled_0.geometry}
                    material={nodes.Dragon_2_Capsule003_Dragon_2_XL_Metal_2_Crumbled_0.material}
                  />
                </group>
                <group position={[-0.5, 0.29, 0]} rotation={[0.37, 0.56, 0.94]}>
                  <mesh
                    geometry={nodes.Dragon_2_Capsule004_Dragon_2_XL_Metal_2_Crumbled_0.geometry}
                    material={nodes.Dragon_2_Capsule004_Dragon_2_XL_Metal_2_Crumbled_0.material}
                  />
                </group>
                <group position={[0, -0.58, 0]} rotation={[-0.66, 0, -Math.PI]}>
                  <mesh
                    geometry={nodes.Dragon_2_Capsule005_Dragon_2_XL_Metal_2_Crumbled_0.geometry}
                    material={nodes.Dragon_2_Capsule005_Dragon_2_XL_Metal_2_Crumbled_0.material}
                  />
                </group>
                <group position={[0.5, -0.29, 0]} rotation={[-0.37, -0.56, -2.2]}>
                  <mesh
                    geometry={nodes.Dragon_2_Capsule006_Dragon_2_XL_Metal_2_Crumbled_0.geometry}
                    material={nodes.Dragon_2_Capsule006_Dragon_2_XL_Metal_2_Crumbled_0.material}
                  />
                </group>
                <group position={[0.5, 0.29, 0]} rotation={[0.37, -0.56, -0.94]}>
                  <mesh
                    geometry={nodes.Dragon_2_Capsule007_Dragon_2_XL_Metal_2_Crumbled_0.geometry}
                    material={nodes.Dragon_2_Capsule007_Dragon_2_XL_Metal_2_Crumbled_0.material}
                  />
                </group>
                <group position={[0, 0.48, 0.17]} rotation={[-Math.PI / 6, 0, 0]}>
                  <mesh
                    geometry={nodes.Dragon_2_Docking_Port001_Dragon_2_XL_Metal_1_0.geometry}
                    material={nodes.Dragon_2_Docking_Port001_Dragon_2_XL_Metal_1_0.material}
                  />
                </group>
                <group position={[-0.42, -0.24, 0.17]} rotation={[0.28, -0.45, 2.16]}>
                  <mesh
                    geometry={nodes.Dragon_2_Docking_Port002_Dragon_2_XL_Metal_1_0.geometry}
                    material={nodes.Dragon_2_Docking_Port002_Dragon_2_XL_Metal_1_0.material}
                  />
                </group>
                <group position={[0.42, -0.24, 0.17]} rotation={[0.28, 0.45, -2.16]}>
                  <mesh
                    geometry={nodes.Dragon_2_Docking_Port003_Dragon_2_XL_Metal_1_0.geometry}
                    material={nodes.Dragon_2_Docking_Port003_Dragon_2_XL_Metal_1_0.material}
                  />
                </group>
                <mesh
                  geometry={nodes.Cylinder002_Dragon_2_XL_Metal_1_0.geometry}
                  material={nodes.Cylinder002_Dragon_2_XL_Metal_1_0.material}
                />
              </group>
              <group name="Cube" position={[-1.27, -1.27, 2.56]} rotation={[0, 0, -Math.PI / 4]}>
                <group position={[0.13, -0.03, -0.07]} rotation={[2.59, 1.06, -2.6]}>
                  <mesh
                    geometry={nodes.Cylinder003_RCS_Thrusters_0.geometry}
                    material={nodes.Cylinder003_RCS_Thrusters_0.material}
                  />
                </group>
                <group position={[-0.13, -0.03, -0.07]} rotation={[2.51, -1.07, 2.61]}>
                  <mesh
                    geometry={nodes.Cylinder005_RCS_Thrusters_0.geometry}
                    material={nodes.Cylinder005_RCS_Thrusters_0.material}
                  />
                </group>
                <group position={[0, -0.03, 0.13]} rotation={[0.26, 0, 0]}>
                  <mesh
                    geometry={nodes.Cylinder006_RCS_Thrusters_0.geometry}
                    material={nodes.Cylinder006_RCS_Thrusters_0.material}
                  />
                </group>
                <group position={[-1.83, 1.67, -0.07]} rotation={[2.01, -0.26, -1.52]}>
                  <mesh
                    geometry={nodes.Cylinder007_RCS_Thrusters_0.geometry}
                    material={nodes.Cylinder007_RCS_Thrusters_0.material}
                  />
                </group>
                <group position={[-1.83, 1.92, -0.07]} rotation={[-1.99, -0.29, -1.53]}>
                  <mesh
                    geometry={nodes.Cylinder009_RCS_Thrusters_0.geometry}
                    material={nodes.Cylinder009_RCS_Thrusters_0.material}
                  />
                </group>
                <group position={[-0.13, 3.62, -0.07]} rotation={[-2.59, -1.06, 0.54]}>
                  <mesh
                    geometry={nodes.Cylinder011_RCS_Thrusters_0.geometry}
                    material={nodes.Cylinder011_RCS_Thrusters_0.material}
                  />
                </group>
                <group position={[0.13, 3.62, -0.07]} rotation={[-2.51, 1.07, -0.53]}>
                  <mesh
                    geometry={nodes.Cylinder013_RCS_Thrusters_0.geometry}
                    material={nodes.Cylinder013_RCS_Thrusters_0.material}
                  />
                </group>
                <group position={[1.83, 1.92, -0.07]} rotation={[-2.01, 0.26, 1.62]}>
                  <mesh
                    geometry={nodes.Cylinder015_RCS_Thrusters_0.geometry}
                    material={nodes.Cylinder015_RCS_Thrusters_0.material}
                  />
                </group>
                <group position={[1.83, 1.67, -0.07]} rotation={[1.99, 0.29, 1.61]}>
                  <mesh
                    geometry={nodes.Cylinder017_RCS_Thrusters_0.geometry}
                    material={nodes.Cylinder017_RCS_Thrusters_0.material}
                  />
                </group>
                <mesh
                  geometry={nodes.Cube_Dragon_2_XL_White_0.geometry}
                  material={nodes.Cube_Dragon_2_XL_White_0.material}
                />
              </group>
              <group position={[1.27, -1.27, 2.56]} rotation={[0, 0, Math.PI / 4]}>
                <group position={[0, -0.03, 0.13]} rotation={[0.26, 0, 0]}>
                  <mesh
                    geometry={nodes.Cylinder010_RCS_Thrusters_0.geometry}
                    material={nodes.Cylinder010_RCS_Thrusters_0.material}
                  />
                </group>
                <mesh
                  geometry={nodes.Cube001_Dragon_2_XL_White_0.geometry}
                  material={nodes.Cube001_Dragon_2_XL_White_0.material}
                />
              </group>
              <group position={[1.27, 1.27, 2.56]} rotation={[0, 0, 2.36]}>
                <group position={[0, -0.03, 0.13]} rotation={[0.26, 0, 0]}>
                  <mesh
                    geometry={nodes.Cylinder014_RCS_Thrusters_0.geometry}
                    material={nodes.Cylinder014_RCS_Thrusters_0.material}
                  />
                </group>
                <mesh
                  geometry={nodes.Cube002_Dragon_2_XL_White_0.geometry}
                  material={nodes.Cube002_Dragon_2_XL_White_0.material}
                />
              </group>
              <group position={[-1.27, 1.27, 2.56]} rotation={[0, 0, -2.36]}>
                <group position={[0, -0.03, 0.13]} rotation={[0.26, 0, 0]}>
                  <mesh
                    geometry={nodes.Cylinder018_RCS_Thrusters_0.geometry}
                    material={nodes.Cylinder018_RCS_Thrusters_0.material}
                  />
                </group>
                <mesh
                  geometry={nodes.Cube003_Dragon_2_XL_White_0.geometry}
                  material={nodes.Cube003_Dragon_2_XL_White_0.material}
                />
              </group>
              <group position={[0, -1.8, 2.54]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  geometry={nodes.Cylinder019_Dragon_2_XL_Gray_0.geometry}
                  material={nodes.Cylinder019_Dragon_2_XL_Gray_0.material}
                />
                <mesh geometry={nodes['Cylinder019_White-Gold_0'].geometry} material={materials['White-Gold']} />
                <mesh
                  geometry={nodes.Cylinder019_Dragon_2_XL_Metal_1_0.geometry}
                  material={nodes.Cylinder019_Dragon_2_XL_Metal_1_0.material}
                />
                <mesh
                  geometry={nodes.Cylinder019_BLACK_BLACK_0.geometry}
                  material={nodes.Cylinder019_BLACK_BLACK_0.material}
                />
                <mesh
                  geometry={nodes.Cylinder019_Dragon_2_XL_White_0.geometry}
                  material={nodes.Cylinder019_Dragon_2_XL_White_0.material}
                />
              </group>
              <group position={[1.76, 0, 8.71]}>
                <group name="Cylinder023" position={[0.04, -0.24, 0.04]} rotation={[-0.26, 1.57, 0]}>
                  <group name="Cube017" position={[0, 0, 0.06]} rotation={[0, -Math.PI / 2, 0]} scale={[1.5, 1.5, 1.5]}>
                    <group name="Cube018" position={[0.75, 0, 0]}>
                      <group name="Cube019" position={[0.99, 0, 0]}>
                        <group name="Cube020" position={[0.99, 0, 0]}>
                          <mesh
                            geometry={nodes.Cube020_Dragon_2_XL_Gray_0.geometry}
                            material={nodes.Cube020_Dragon_2_XL_Gray_0.material}
                          />
                          <mesh
                            geometry={nodes.Cube020_Solar_Panel_0.geometry}
                            material={nodes.Cube020_Solar_Panel_0.material}
                          />
                          <mesh
                            geometry={nodes.Cube020_Dragon_2_XL_Metal_1_0.geometry}
                            material={nodes.Cube020_Dragon_2_XL_Metal_1_0.material}
                          />
                          <mesh
                            geometry={nodes.Cube020_BLACK_BLACK_0.geometry}
                            material={nodes.Cube020_BLACK_BLACK_0.material}
                          />
                          <mesh
                            geometry={nodes.Cube020_Metal_White_Gold_0.geometry}
                            material={nodes.Cube020_Metal_White_Gold_0.material}
                          />
                        </group>
                        <mesh
                          geometry={nodes.Cube019_Dragon_2_XL_Gray_0.geometry}
                          material={nodes.Cube019_Dragon_2_XL_Gray_0.material}
                        />
                        <mesh
                          geometry={nodes.Cube019_Solar_Panel_0.geometry}
                          material={nodes.Cube019_Solar_Panel_0.material}
                        />
                        <mesh
                          geometry={nodes.Cube019_Dragon_2_XL_Metal_1_0.geometry}
                          material={nodes.Cube019_Dragon_2_XL_Metal_1_0.material}
                        />
                        <mesh
                          geometry={nodes.Cube019_BLACK_BLACK_0.geometry}
                          material={nodes.Cube019_BLACK_BLACK_0.material}
                        />
                        <mesh
                          geometry={nodes.Cube019_Metal_White_Gold_0.geometry}
                          material={nodes.Cube019_Metal_White_Gold_0.material}
                        />
                      </group>
                      <mesh
                        geometry={nodes.Cube018_Dragon_2_XL_Gray_0.geometry}
                        material={nodes.Cube018_Dragon_2_XL_Gray_0.material}
                      />
                      <mesh
                        geometry={nodes.Cube018_Solar_Panel_0.geometry}
                        material={nodes.Cube018_Solar_Panel_0.material}
                      />
                      <mesh
                        geometry={nodes.Cube018_Dragon_2_XL_Metal_1_0.geometry}
                        material={nodes.Cube018_Dragon_2_XL_Metal_1_0.material}
                      />
                      <mesh
                        geometry={nodes.Cube018_BLACK_BLACK_0.geometry}
                        material={nodes.Cube018_BLACK_BLACK_0.material}
                      />
                      <mesh
                        geometry={nodes.Cube018_Metal_White_Gold_0.geometry}
                        material={nodes.Cube018_Metal_White_Gold_0.material}
                      />
                    </group>
                    <mesh
                      geometry={nodes.Cube017_Dragon_2_XL_Gray_0.geometry}
                      material={nodes.Cube017_Dragon_2_XL_Gray_0.material}
                    />
                    <mesh
                      geometry={nodes.Cube017_Solar_Panel_0.geometry}
                      material={nodes.Cube017_Solar_Panel_0.material}
                    />
                    <mesh
                      geometry={nodes.Cube017_BLACK_BLACK_0.geometry}
                      material={nodes.Cube017_BLACK_BLACK_0.material}
                    />
                    <mesh
                      geometry={nodes.Cube017_Metal_White_Gold_0.geometry}
                      material={nodes.Cube017_Metal_White_Gold_0.material}
                    />
                  </group>
                  <mesh
                    geometry={nodes.Cylinder023_BLACK_BLACK_0.geometry}
                    material={nodes.Cylinder023_BLACK_BLACK_0.material}
                  />
                </group>
                <mesh
                  geometry={nodes.Cube008_Dragon_2_XL_Gray_0.geometry}
                  material={nodes.Cube008_Dragon_2_XL_Gray_0.material}
                />
                <mesh
                  geometry={nodes.Cube008_Dragon_2_XL_Metal_1_0.geometry}
                  material={nodes.Cube008_Dragon_2_XL_Metal_1_0.material}
                />
              </group>
              <group position={[-1.76, 0, 8.71]} rotation={[0, 0, -Math.PI]}>
                <group name="Cylinder022" position={[0.04, -0.24, 0.04]} rotation={[0.26, Math.PI / 2, 0]}>
                  <group name="Cube013" position={[0, 0, 0.06]} rotation={[0, -1.57, 0]} scale={[1.5, 1.5, 1.5]}>
                    <group name="Cube014" position={[0.75, 0, 0]}>
                      <group name="Cube015" position={[0.99, 0, 0]}>
                        <group name="Cube016" position={[0.99, 0, 0]}>
                          <mesh
                            geometry={nodes.Cube016_Dragon_2_XL_Gray_0.geometry}
                            material={nodes.Cube016_Dragon_2_XL_Gray_0.material}
                          />
                          <mesh
                            geometry={nodes.Cube016_Solar_Panel_0.geometry}
                            material={nodes.Cube016_Solar_Panel_0.material}
                          />
                          <mesh
                            geometry={nodes.Cube016_Dragon_2_XL_Metal_1_0.geometry}
                            material={nodes.Cube016_Dragon_2_XL_Metal_1_0.material}
                          />
                          <mesh
                            geometry={nodes.Cube016_BLACK_BLACK_0.geometry}
                            material={nodes.Cube016_BLACK_BLACK_0.material}
                          />
                          <mesh
                            geometry={nodes.Cube016_Metal_White_Gold_0.geometry}
                            material={nodes.Cube016_Metal_White_Gold_0.material}
                          />
                        </group>
                        <mesh
                          geometry={nodes.Cube015_Dragon_2_XL_Gray_0.geometry}
                          material={nodes.Cube015_Dragon_2_XL_Gray_0.material}
                        />
                        <mesh
                          geometry={nodes.Cube015_Solar_Panel_0.geometry}
                          material={nodes.Cube015_Solar_Panel_0.material}
                        />
                        <mesh
                          geometry={nodes.Cube015_Dragon_2_XL_Metal_1_0.geometry}
                          material={nodes.Cube015_Dragon_2_XL_Metal_1_0.material}
                        />
                        <mesh
                          geometry={nodes.Cube015_BLACK_BLACK_0.geometry}
                          material={nodes.Cube015_BLACK_BLACK_0.material}
                        />
                        <mesh
                          geometry={nodes.Cube015_Metal_White_Gold_0.geometry}
                          material={nodes.Cube015_Metal_White_Gold_0.material}
                        />
                      </group>
                      <mesh
                        geometry={nodes.Cube014_Dragon_2_XL_Gray_0.geometry}
                        material={nodes.Cube014_Dragon_2_XL_Gray_0.material}
                      />
                      <mesh
                        geometry={nodes.Cube014_Solar_Panel_0.geometry}
                        material={nodes.Cube014_Solar_Panel_0.material}
                      />
                      <mesh
                        geometry={nodes.Cube014_Dragon_2_XL_Metal_1_0.geometry}
                        material={nodes.Cube014_Dragon_2_XL_Metal_1_0.material}
                      />
                      <mesh
                        geometry={nodes.Cube014_BLACK_BLACK_0.geometry}
                        material={nodes.Cube014_BLACK_BLACK_0.material}
                      />
                      <mesh
                        geometry={nodes.Cube014_Metal_White_Gold_0.geometry}
                        material={nodes.Cube014_Metal_White_Gold_0.material}
                      />
                    </group>
                    <mesh
                      geometry={nodes.Cube013_Dragon_2_XL_Gray_0.geometry}
                      material={nodes.Cube013_Dragon_2_XL_Gray_0.material}
                    />
                    <mesh
                      geometry={nodes.Cube013_Solar_Panel_0.geometry}
                      material={nodes.Cube013_Solar_Panel_0.material}
                    />
                    <mesh
                      geometry={nodes.Cube013_BLACK_BLACK_0.geometry}
                      material={nodes.Cube013_BLACK_BLACK_0.material}
                    />
                    <mesh
                      geometry={nodes.Cube013_Metal_White_Gold_0.geometry}
                      material={nodes.Cube013_Metal_White_Gold_0.material}
                    />
                  </group>
                  <mesh
                    geometry={nodes.Cylinder022_BLACK_BLACK_0.geometry}
                    material={nodes.Cylinder022_BLACK_BLACK_0.material}
                  />
                </group>
                <mesh
                  geometry={nodes.Cube012_Dragon_2_XL_Gray_0.geometry}
                  material={nodes.Cube012_Dragon_2_XL_Gray_0.material}
                />
                <mesh
                  geometry={nodes.Cube012_Dragon_2_XL_Metal_1_0.geometry}
                  material={nodes.Cube012_Dragon_2_XL_Metal_1_0.material}
                />
              </group>
              <group position={[-0.41, 1.41, 9.42]} rotation={[Math.PI, 0, -0.28]}>
                <group position={[-0.18, -0.26, 0.46]} rotation={[0, Math.PI / 6, 0]}>
                  <mesh
                    geometry={nodes.Cylinder024_BLACK_BLACK_0.geometry}
                    material={nodes.Cylinder024_BLACK_BLACK_0.material}
                  />
                  <mesh
                    geometry={nodes.Cylinder024_Dragon_2_XL_Metal_1_0.geometry}
                    material={nodes.Cylinder024_Dragon_2_XL_Metal_1_0.material}
                  />
                </group>
                <group position={[0, -0.26, 0.46]} rotation={[0, -Math.PI / 6, 0]}>
                  <mesh
                    geometry={nodes.Cylinder025_BLACK_BLACK_0.geometry}
                    material={nodes.Cylinder025_BLACK_BLACK_0.material}
                  />
                  <mesh
                    geometry={nodes.Cylinder025_Dragon_2_XL_Metal_1_0.geometry}
                    material={nodes.Cylinder025_Dragon_2_XL_Metal_1_0.material}
                  />
                </group>
                <group position={[0.16, -0.26, 0.46]} rotation={[0, Math.PI / 6, 0]}>
                  <mesh
                    geometry={nodes.Cylinder026_BLACK_BLACK_0.geometry}
                    material={nodes.Cylinder026_BLACK_BLACK_0.material}
                  />
                  <mesh
                    geometry={nodes.Cylinder026_Dragon_2_XL_Metal_1_0.geometry}
                    material={nodes.Cylinder026_Dragon_2_XL_Metal_1_0.material}
                  />
                </group>
                <group position={[-0.25, 0.23, 0.33]} rotation={[0, Math.PI / 6, 0]}>
                  <mesh
                    geometry={nodes.Cylinder008_BLACK_BLACK_0.geometry}
                    material={nodes.Cylinder008_BLACK_BLACK_0.material}
                  />
                  <mesh
                    geometry={nodes.Cylinder008_Dragon_2_XL_Metal_1_0.geometry}
                    material={nodes.Cylinder008_Dragon_2_XL_Metal_1_0.material}
                  />
                </group>
                <group position={[0.27, 0.24, 0.33]} rotation={[0.2, 0.49, -0.4]}>
                  <mesh
                    geometry={nodes.Cylinder012_BLACK_BLACK_0.geometry}
                    material={nodes.Cylinder012_BLACK_BLACK_0.material}
                  />
                  <mesh
                    geometry={nodes.Cylinder012_Dragon_2_XL_Metal_1_0.geometry}
                    material={nodes.Cylinder012_Dragon_2_XL_Metal_1_0.material}
                  />
                </group>
                <mesh
                  geometry={nodes.Cube021_Dragon_2_XL_Gray_0.geometry}
                  material={nodes.Cube021_Dragon_2_XL_Gray_0.material}
                />
                <mesh
                  geometry={nodes.Cube021_Dragon_2_XL_White_0.geometry}
                  material={nodes.Cube021_Dragon_2_XL_White_0.material}
                />
                <mesh
                  geometry={nodes.Cube021_Dragon_2_XL_Metal_1_0.geometry}
                  material={nodes.Cube021_Dragon_2_XL_Metal_1_0.material}
                />
              </group>
              <group position={[-1.11, -0.97, 9.42]} rotation={[-Math.PI, 0, -2.29]}>
                <group position={[-0.18, -0.26, 0.46]} rotation={[0, Math.PI / 6, 0]}>
                  <mesh
                    geometry={nodes.Cylinder030_BLACK_BLACK_0.geometry}
                    material={nodes.Cylinder030_BLACK_BLACK_0.material}
                  />
                  <mesh
                    geometry={nodes.Cylinder030_Dragon_2_XL_Metal_1_0.geometry}
                    material={nodes.Cylinder030_Dragon_2_XL_Metal_1_0.material}
                  />
                </group>
                <group position={[0, -0.26, 0.46]} rotation={[0, -Math.PI / 6, 0]}>
                  <mesh
                    geometry={nodes.Cylinder031_BLACK_BLACK_0.geometry}
                    material={nodes.Cylinder031_BLACK_BLACK_0.material}
                  />
                  <mesh
                    geometry={nodes.Cylinder031_Dragon_2_XL_Metal_1_0.geometry}
                    material={nodes.Cylinder031_Dragon_2_XL_Metal_1_0.material}
                  />
                </group>
                <group position={[0.16, -0.26, 0.46]} rotation={[0, Math.PI / 6, 0]}>
                  <mesh
                    geometry={nodes.Cylinder032_BLACK_BLACK_0.geometry}
                    material={nodes.Cylinder032_BLACK_BLACK_0.material}
                  />
                  <mesh
                    geometry={nodes.Cylinder032_Dragon_2_XL_Metal_1_0.geometry}
                    material={nodes.Cylinder032_Dragon_2_XL_Metal_1_0.material}
                  />
                </group>
                <group position={[-0.25, 0.23, 0.33]} rotation={[0, Math.PI / 6, 0]}>
                  <mesh
                    geometry={nodes.Cylinder001_BLACK_BLACK_0.geometry}
                    material={nodes.Cylinder001_BLACK_BLACK_0.material}
                  />
                  <mesh
                    geometry={nodes.Cylinder001_Dragon_2_XL_Metal_1_0.geometry}
                    material={nodes.Cylinder001_Dragon_2_XL_Metal_1_0.material}
                  />
                </group>
                <group position={[0.27, 0.24, 0.33]} rotation={[0.2, 0.49, -0.4]}>
                  <mesh
                    geometry={nodes.Cylinder004_BLACK_BLACK_0.geometry}
                    material={nodes.Cylinder004_BLACK_BLACK_0.material}
                  />
                  <mesh
                    geometry={nodes.Cylinder004_Dragon_2_XL_Metal_1_0.geometry}
                    material={nodes.Cylinder004_Dragon_2_XL_Metal_1_0.material}
                  />
                </group>
                <mesh
                  geometry={nodes.Cube022_Dragon_2_XL_Gray_0.geometry}
                  material={nodes.Cube022_Dragon_2_XL_Gray_0.material}
                />
                <mesh
                  geometry={nodes.Cube022_Dragon_2_XL_White_0.geometry}
                  material={nodes.Cube022_Dragon_2_XL_White_0.material}
                />
                <mesh
                  geometry={nodes.Cube022_Dragon_2_XL_Metal_1_0.geometry}
                  material={nodes.Cube022_Dragon_2_XL_Metal_1_0.material}
                />
              </group>
              <group position={[0.41, -1.41, 9.42]} rotation={[-Math.PI, 0, 2.86]}>
                <group position={[-0.17, -0.26, 0.46]} rotation={[0, Math.PI / 6, 0]}>
                  <mesh
                    geometry={nodes.Cylinder036_BLACK_BLACK_0.geometry}
                    material={nodes.Cylinder036_BLACK_BLACK_0.material}
                  />
                  <mesh
                    geometry={nodes.Cylinder036_Dragon_2_XL_Metal_1_0.geometry}
                    material={nodes.Cylinder036_Dragon_2_XL_Metal_1_0.material}
                  />
                </group>
                <group position={[0, -0.26, 0.46]} rotation={[0, -Math.PI / 6, 0]}>
                  <mesh
                    geometry={nodes.Cylinder037_BLACK_BLACK_0.geometry}
                    material={nodes.Cylinder037_BLACK_BLACK_0.material}
                  />
                  <mesh
                    geometry={nodes.Cylinder037_Dragon_2_XL_Metal_1_0.geometry}
                    material={nodes.Cylinder037_Dragon_2_XL_Metal_1_0.material}
                  />
                </group>
                <group position={[0.16, -0.26, 0.46]} rotation={[0, Math.PI / 6, 0]}>
                  <mesh
                    geometry={nodes.Cylinder038_BLACK_BLACK_0.geometry}
                    material={nodes.Cylinder038_BLACK_BLACK_0.material}
                  />
                  <mesh
                    geometry={nodes.Cylinder038_Dragon_2_XL_Metal_1_0.geometry}
                    material={nodes.Cylinder038_Dragon_2_XL_Metal_1_0.material}
                  />
                </group>
                <group position={[-0.25, 0.23, 0.33]} rotation={[0, Math.PI / 6, 0]}>
                  <mesh
                    geometry={nodes.Cylinder016_BLACK_BLACK_0.geometry}
                    material={nodes.Cylinder016_BLACK_BLACK_0.material}
                  />
                  <mesh
                    geometry={nodes.Cylinder016_Dragon_2_XL_Metal_1_0.geometry}
                    material={nodes.Cylinder016_Dragon_2_XL_Metal_1_0.material}
                  />
                </group>
                <group position={[0.27, 0.24, 0.33]} rotation={[0.2, 0.49, -0.4]}>
                  <mesh
                    geometry={nodes.Cylinder027_BLACK_BLACK_0.geometry}
                    material={nodes.Cylinder027_BLACK_BLACK_0.material}
                  />
                  <mesh
                    geometry={nodes.Cylinder027_Dragon_2_XL_Metal_1_0.geometry}
                    material={nodes.Cylinder027_Dragon_2_XL_Metal_1_0.material}
                  />
                </group>
                <mesh
                  geometry={nodes.Cube023_Dragon_2_XL_Gray_0.geometry}
                  material={nodes.Cube023_Dragon_2_XL_Gray_0.material}
                />
                <mesh
                  geometry={nodes.Cube023_Dragon_2_XL_White_0.geometry}
                  material={nodes.Cube023_Dragon_2_XL_White_0.material}
                />
                <mesh
                  geometry={nodes.Cube023_Dragon_2_XL_Metal_1_0.geometry}
                  material={nodes.Cube023_Dragon_2_XL_Metal_1_0.material}
                />
              </group>
              <mesh
                geometry={nodes.Dragon_XL_BASE_Dragon_2_XL_White_0.geometry}
                material={nodes.Dragon_XL_BASE_Dragon_2_XL_White_0.material}
              />
              <mesh
                geometry={nodes.Dragon_XL_BASE_Dragon_2_XL_Metal_2_Crumbled_0.geometry}
                material={nodes.Dragon_XL_BASE_Dragon_2_XL_Metal_2_Crumbled_0.material}
              />
              <mesh
                geometry={nodes.Dragon_XL_BASE_BLACK_BLACK_0.geometry}
                material={nodes.Dragon_XL_BASE_BLACK_BLACK_0.material}
              />
              <mesh
                geometry={nodes.Dragon_XL_BASE_Dragon_2_XL_Metal_1_0.geometry}
                material={nodes.Dragon_XL_BASE_Dragon_2_XL_Metal_1_0.material}
              />
            </group>
            <group position={[0, 0, 10.79]} rotation={[-Math.PI, 0, -Math.PI]}>
              <mesh
                geometry={nodes.Dragon_XL_Docking_Port_Dragon_2_XL_Metal_1_0.geometry}
                material={nodes.Dragon_XL_Docking_Port_Dragon_2_XL_Metal_1_0.material}
              />
              <mesh
                geometry={nodes.Dragon_XL_Docking_Port_BLACK_BLACK_0.geometry}
                material={nodes.Dragon_XL_Docking_Port_BLACK_BLACK_0.material}
              />
              <mesh
                geometry={nodes.Dragon_XL_Docking_Port_Dragon_2_XL_White_0.geometry}
                material={nodes.Dragon_XL_Docking_Port_Dragon_2_XL_White_0.material}
              />
            </group>
          </group>
        </group>
      </group>
        </group>
    )
}

function Details() {

    const snap = useSnapshot(state)
    if (snap.current === "Dragon_2_XL_Gray") {
        return (
            <div className="model_part_title">
                <h1 className="model_part_desc">Solar Panels</h1>
            </div>
        )
    }
    else if (snap.current === "Dragon_2_XL_White") {
        return (
            <div className="model_part_title">
                <h1 className="model_part_desc">Main engine</h1>
            </div>
        )
    }

    else {
        return (
            <div className="view_info">
                <h1 className="view_info_click">Click on diffrent parts of SpaceX Dragon XL to know more</h1>
                <p className="view_info_desc">To view the 3D model in AR, scan the QR code or click on the button below.</p>

                <div className="view_info_main">
                    <img className="view_info_qr" src="https://storage.echo3d.co/shiny-wave-1052/268c3742-66a2-4139-9bbd-f3d153aba560.png" alt="Aircraft QR" />
                    <a href="https://go.echo3d.co/Q61F" target="_blank" rel="noreferrer">
                        <button className="view_info_button">View in AR</button>
                    </a>
                </div>
            </div>
        )
    }
    // return (
    //     <div>
    //         {snap.current}
    //     </div>
    // )
}

export default function DragonXL() {
    return (
        <>
            <div className="model">

                <Link to="/explore" className="model_goback">Go Back</Link>

                <div className="model_info">
                    <h1 className="model_info_title">
                    SpaceX Dragon XL
                    </h1>
                    <div className="explore_title_line"></div>
                    <div className="model_info_desc">On 27 March 2020, SpaceX revealed the Dragon XL resupply spacecraft to carry pressurized and unpressurized cargo, experiments and other supplies to NASA's planned Lunar Gateway under a Gateway Logistics Services (GLS) contract. The equipment delivered by Dragon XL missions could include sample collection materials, spacesuits and other items astronauts may need on the Gateway and on the surface of the Moon, according to NASA. It will launch on SpaceX Falcon Heavy rockets from LC-39A at the Kennedy Space Center in Florida. </div>
                </div>

                <div className="model3D">

                    <div className="model3D_3D">
                        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                            <ambientLight intensity={0.7} />
                            <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                            <Suspense fallback={null}>
                                <Aircraft scale={0.0018} />
                                <Environment preset="city" />
                                <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={1.5} far={0.8} />
                            </Suspense>
                            <OrbitControls autoRotate />
                        </Canvas>
                    </div>

                    <div className="model3D_3D_Desc">
                        <Details />
                    </div>

                </div>

            </div>

        </>
    )
}
