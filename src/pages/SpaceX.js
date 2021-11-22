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
    const { nodes, materials } = useGLTF('/spacex_falcon_9_and_dragon_2/scene.gltf')
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
                <group position={[-11, 11, 1.9]} rotation={[0, 0, Math.PI / 3]}>
                    <mesh geometry={nodes.windows_0.geometry} material={materials.windows} />
                </group>
                <primitive object={nodes.dragon_2_rig_rootJoint} />
                <group position={[0, 0, 48.4]} rotation={[0, 0, Math.PI / 2]}>
                    <mesh geometry={nodes.stage_one_clamps_0.geometry} material={materials['skin.006']} />
                </group>
                <group position={[0, 0, -0.13]} rotation={[0, 0, -Math.PI / 4]}>
                    <primitive object={nodes.rig_rootJoint} />
                </group>
                <group position={[0, -1.86, 44.05]}>
                    <mesh geometry={nodes.grid_fin_base_0.geometry} material={nodes.grid_fin_base_0.material} />
                </group>
                <group position={[0, -1.92, 44.05]}>
                    <mesh geometry={nodes.grid_fin_pivot_0.geometry} material={nodes.grid_fin_pivot_0.material} />
                </group>
                <group position={[0, -1.92, 44.17]}>
                    <mesh geometry={nodes.grid_fin_arm_0.geometry} material={nodes.grid_fin_arm_0.material} />
                </group>
                <group position={[0, -1.92, 44.17]}>
                    <mesh geometry={nodes.grid_fin_long_arm_0.geometry} material={nodes.grid_fin_long_arm_0.material} />
                </group>
                <group position={[0, -1.92, 44.17]}>
                    <mesh geometry={nodes.grid_fin_outer_rim_0.geometry} material={nodes.grid_fin_outer_rim_0.material} />
                </group>
                <group position={[0, -1.92, 44.17]}>
                    <mesh geometry={nodes.grid_fin_waffle_0.geometry} material={nodes.grid_fin_waffle_0.material} />
                </group>
                <group position={[0, 0, 46.01]} rotation={[0, -0.61, 0]}>
                    <mesh
                        geometry={nodes.interstage_center_pusher_tripod_arm_0.geometry}
                        material={nodes.interstage_center_pusher_tripod_arm_0.material}
                    />
                </group>
                <group position={[0, 0, 46.01]} rotation={[-0.55, 0.29, -2.01]}>
                    <mesh
                        geometry={nodes.interstage_center_pusher_tripod_arm001_0.geometry}
                        material={nodes.interstage_center_pusher_tripod_arm001_0.material}
                    />
                </group>
                <group position={[0, 0, 46.01]} rotation={[0.55, 0.29, 2.01]}>
                    <mesh
                        geometry={nodes.interstage_center_pusher_tripod_arm002_0.geometry}
                        material={nodes.interstage_center_pusher_tripod_arm002_0.material}
                    />
                </group>
                <group position={[0, 0, 46.01]}>
                    <mesh
                        geometry={nodes.interstage_center_pusher_tripod_arm003_0.geometry}
                        material={nodes.interstage_center_pusher_tripod_arm003_0.material}
                    />
                </group>
                <group position={[-1.92, 0, 44.17]} rotation={[0, 0, -Math.PI / 2]}>
                    <mesh geometry={nodes.grid_fin_waffle001_0.geometry} material={nodes.grid_fin_waffle001_0.material} />
                </group>
                <group position={[-1.92, 0, 44.17]} rotation={[0, 0, -Math.PI / 2]}>
                    <mesh geometry={nodes.grid_fin_outer_rim001_0.geometry} material={nodes.grid_fin_outer_rim001_0.material} />
                </group>
                <group position={[-1.92, 0, 44.17]} rotation={[0, 0, -Math.PI / 2]}>
                    <mesh geometry={nodes.grid_fin_long_arm001_0.geometry} material={nodes.grid_fin_long_arm001_0.material} />
                </group>
                <group position={[-1.92, 0, 44.17]} rotation={[0, 0, -Math.PI / 2]}>
                    <mesh geometry={nodes.grid_fin_arm001_0.geometry} material={nodes.grid_fin_arm001_0.material} />
                </group>
                <group position={[-1.92, 0, 44.05]} rotation={[0, 0, -Math.PI / 2]}>
                    <mesh geometry={nodes.grid_fin_pivot001_0.geometry} material={nodes.grid_fin_pivot001_0.material} />
                </group>
                <group position={[0, 1.92, 44.05]} rotation={[0, 0, -Math.PI]}>
                    <mesh geometry={nodes.grid_fin_pivot002_0.geometry} material={nodes.grid_fin_pivot002_0.material} />
                </group>
                <group position={[0, 1.92, 44.17]} rotation={[0, 0, -Math.PI]}>
                    <mesh geometry={nodes.grid_fin_arm002_0.geometry} material={nodes.grid_fin_arm002_0.material} />
                </group>
                <group position={[0, 1.92, 44.17]} rotation={[0, 0, -Math.PI]}>
                    <mesh geometry={nodes.grid_fin_long_arm002_0.geometry} material={nodes.grid_fin_long_arm002_0.material} />
                </group>
                <group position={[0, 1.92, 44.17]} rotation={[0, 0, -Math.PI]}>
                    <mesh geometry={nodes.grid_fin_outer_rim002_0.geometry} material={nodes.grid_fin_outer_rim002_0.material} />
                </group>
                <group position={[0, 1.92, 44.17]} rotation={[0, 0, -Math.PI]}>
                    <mesh geometry={nodes.grid_fin_waffle002_0.geometry} material={nodes.grid_fin_waffle002_0.material} />
                </group>
                <group position={[1.92, 0, 44.17]} rotation={[0, 0, Math.PI / 2]}>
                    <mesh geometry={nodes.grid_fin_waffle003_0.geometry} material={nodes.grid_fin_waffle003_0.material} />
                </group>
                <group position={[1.92, 0, 44.17]} rotation={[0, 0, Math.PI / 2]}>
                    <mesh geometry={nodes.grid_fin_outer_rim003_0.geometry} material={nodes.grid_fin_outer_rim003_0.material} />
                </group>
                <group position={[1.92, 0, 44.17]} rotation={[0, 0, Math.PI / 2]}>
                    <mesh geometry={nodes.grid_fin_long_arm003_0.geometry} material={nodes.grid_fin_long_arm003_0.material} />
                </group>
                <group position={[1.92, 0, 44.17]} rotation={[0, 0, Math.PI / 2]}>
                    <mesh geometry={nodes.grid_fin_arm003_0.geometry} material={nodes.grid_fin_arm003_0.material} />
                </group>
                <group position={[1.92, 0, 44.05]} rotation={[0, 0, Math.PI / 2]}>
                    <mesh geometry={nodes.grid_fin_pivot003_0.geometry} material={nodes.grid_fin_pivot003_0.material} />
                </group>
                <group position={[0, 0, -2.2]}>
                    <mesh geometry={nodes.ground_0.geometry} material={materials.material} />
                </group>
                <group position={[0, -15, -1.09]}>
                    <mesh geometry={nodes.railing_0.geometry} material={nodes.railing_0.material} />
                </group>
                <group position={[-15, 0, -1.09]} rotation={[0, 0, -Math.PI / 2]}>
                    <mesh geometry={nodes.railing001_0.geometry} material={nodes.railing001_0.material} />
                </group>
                <group position={[0, 15, -1.09]} rotation={[0, 0, -Math.PI]}>
                    <mesh geometry={nodes.railing002_0.geometry} material={nodes.railing002_0.material} />
                </group>
                <group position={[15, 0, -1.09]} rotation={[0, 0, Math.PI / 2]}>
                    <mesh geometry={nodes.railing003_0.geometry} material={nodes.railing003_0.material} />
                </group>
                <group position={[-5, -3, -1.1]} rotation={[0.62, -Math.PI / 6, -0.62]}>
                    <mesh geometry={nodes.sign_falcon9_0.geometry} material={materials.sign_falcon9} />
                </group>
                <group position={[-5, -3, -2.1]} rotation={[0, 0, -Math.PI / 4]}>
                    <mesh geometry={nodes.signpost001_0.geometry} material={nodes.signpost001_0.material} />
                </group>
                <group position={[-11, 6, -2.1]} rotation={[0, 0, 0.26]}>
                    <mesh geometry={nodes.signpost_0.geometry} material={nodes.signpost_0.material} />
                </group>
                <group position={[-11, 6, -1.1]} rotation={[0.77, 0.18, 0.19]}>
                    <mesh geometry={nodes.sign_dragon2_0.geometry} material={materials.sign_dragon2} />
                </group>
            </group>
        </group>
    )
}

function Details() {

    const snap = useSnapshot(state)
    if (snap.current === "material") {
        return (
            <div className="model_part_title">
                <h1 className="model_part_desc">Landing base</h1>
            </div>
        )
    }
    else if (snap.current === "stage_one_skin") {
        return (
            <div className="model_part_title">
                <h1 className="model_part_desc">Landing Legs</h1>
            </div>
        )
    }
    else if (snap.current === "trunk") {	
        return (
            <div className="model_part_title">
                <h1 className="model_part_desc">Playload</h1>
            </div>
        )
    }

    else {
        return (
            <div className="view_info">
                <h1 className="view_info_click">Click on diffrent parts of Falcon 9 to know more</h1>
                <p className="view_info_desc">To view the 3D model in AR, scan the QR code or click on the button below.</p>

                <div className="view_info_main">
                    <img className="view_info_qr" src="https://storage.echo3d.co/shiny-wave-1052/1a3d3a0b-90f8-4d49-a405-6be3f70cd595.png" alt="Aircraft QR" />
                    <a href="https://go.echo3d.co/4HqW" target="_blank" rel="noreferrer">
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

export default function SpaceX() {
    return (
        <>
            <div className="model">

                <Link to="/explore" className="model_goback">Go Back</Link>

                <div className="model_info">
                    <h1 className="model_info_title">
                        SpaceX Falcon 9
                    </h1>
                    <div className="explore_title_line"></div>
                    <div className="model_info_desc">Falcon 9 is a reusable, two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of people and payloads into Earth orbit and beyond. Falcon 9 is the world’s first orbital class reusable rocket. Reusability allows SpaceX to refly the most expensive parts of the rocket, which in turn drives down the cost of space access.</div>
                </div>

                <div className="model3D">

                    <div className="model3D_3D">
                        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                            <ambientLight intensity={0.7} />
                            <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                            <Suspense fallback={null}>
                                <Aircraft scale={0.04} />
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
