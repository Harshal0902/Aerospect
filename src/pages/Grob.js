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
    const { nodes, materials } = useGLTF('/grob_g_115/scene.gltf')
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
                <mesh geometry={nodes.mesh_0.geometry} material={materials.rougelampe} />
                <mesh geometry={nodes.mesh_1.geometry} material={materials.transparent2} />
                <mesh geometry={nodes.mesh_2.geometry} material={materials.transparent2_NONE} />
                <mesh geometry={nodes.mesh_3.geometry} material={materials['transparent2_transpred.png']} />
                <mesh geometry={nodes.mesh_4.geometry} material={materials['transparent2_transpred.png.001']} />
                <mesh geometry={nodes.mesh_5.geometry} material={nodes.mesh_5.material} />
                <mesh geometry={nodes.mesh_6.geometry} material={nodes.mesh_6.material} />
                <mesh geometry={nodes.mesh_7.geometry} material={nodes.mesh_7.material} />
                <mesh geometry={nodes.mesh_8.geometry} material={nodes.mesh_8.material} />
                <mesh geometry={nodes.mesh_9.geometry} material={materials['DefaultWhite_AI.png']} />
                <mesh geometry={nodes.mesh_10.geometry} material={materials['DefaultWhite_ASI.png']} />
                <mesh geometry={nodes.mesh_11.geometry} material={materials['DefaultWhite_Altimeter.png']} />
                <mesh geometry={nodes.mesh_12.geometry} material={materials['DefaultWhite_BatteryGauge.png']} />
                <mesh geometry={nodes.mesh_13.geometry} material={materials['DefaultWhite_BreakerLabels.png']} />
                <mesh geometry={nodes.mesh_14.geometry} material={materials['DefaultWhite_DME.png']} />
                <mesh geometry={nodes.mesh_15.geometry} material={materials['DefaultWhite_DME.png.001']} />
                <mesh geometry={nodes.mesh_16.geometry} material={materials['DefaultWhite_EGT-OAT.png']} />
                <mesh geometry={nodes.mesh_17.geometry} material={materials['DefaultWhite_ELT.png']} />
                <mesh geometry={nodes.mesh_18.geometry} material={materials['DefaultWhite_FP-CHT.png']} />
                <mesh geometry={nodes.mesh_19.geometry} material={materials['DefaultWhite_FuelGauge.png']} />
                <mesh geometry={nodes.mesh_20.geometry} material={materials['DefaultWhite_GMeter.png']} />
                <mesh geometry={nodes.mesh_21.geometry} material={materials['DefaultWhite_KI204.png']} />
                <mesh geometry={nodes.mesh_22.geometry} material={materials['DefaultWhite_KMA26.png']} />
                <mesh geometry={nodes.mesh_23.geometry} material={materials['DefaultWhite_KN53.png']} />
                <mesh geometry={nodes.mesh_24.geometry} material={materials['DefaultWhite_KT76A.png']} />
                <mesh geometry={nodes.mesh_25.geometry} material={materials['DefaultWhite_KX155A.png']} />
                <mesh geometry={nodes.mesh_26.geometry} material={materials['DefaultWhite_MPFuel.png']} />
                <mesh geometry={nodes.mesh_27.geometry} material={materials['DefaultWhite_MagneticCompass.png']} />
                <mesh geometry={nodes.mesh_28.geometry} material={materials['DefaultWhite_OilGauge.png']} />
                <lineSegments geometry={nodes.mesh_29.geometry} material={nodes.mesh_29.material} />
                <mesh geometry={nodes.mesh_30.geometry} material={nodes.mesh_30.material} />
                <mesh geometry={nodes.mesh_31.geometry} material={nodes.mesh_31.material} />
                <mesh geometry={nodes.mesh_32.geometry} material={nodes.mesh_32.material} />
                <mesh geometry={nodes.mesh_33.geometry} material={nodes.mesh_33.material} />
                <mesh geometry={nodes.mesh_34.geometry} material={nodes.mesh_34.material} />
                <mesh geometry={nodes.mesh_35.geometry} material={nodes.mesh_35.material} />
                <mesh geometry={nodes.mesh_36.geometry} material={materials['DefaultWhite_RPM.png']} />
                <mesh geometry={nodes.mesh_37.geometry} material={nodes.mesh_37.material} />
                <mesh geometry={nodes.mesh_38.geometry} material={nodes.mesh_38.material} />
                <mesh geometry={nodes.mesh_39.geometry} material={materials['DefaultWhite_Turn.png']} />
                <mesh geometry={nodes.mesh_40.geometry} material={materials['DefaultWhite_VSI.png']} />
                <mesh geometry={nodes.mesh_41.geometry} material={materials['DefaultWhite_WarningPanel.png']} />
                <mesh geometry={nodes.mesh_42.geometry} material={materials['DefaultWhite_clock.png']} />
                <mesh geometry={nodes.mesh_43.geometry} material={materials['DefaultWhite_interior.png']} />
                <mesh geometry={nodes.mesh_44.geometry} material={materials['DefaultWhite_ka51b.png']} />
                <mesh geometry={nodes.mesh_45.geometry} material={materials['DefaultWhite_numbers.png']} />
                <mesh geometry={nodes.mesh_46.geometry} material={materials['DefaultWhite_zkv500.png']} />
                <mesh geometry={nodes.mesh_47.geometry} material={materials.transparent} />
                <mesh geometry={nodes.mesh_48.geometry} material={materials.transparent3} />
            </group>
        </group>
    )
}

function Details() {

    const snap = useSnapshot(state)
    if (snap.current === "DefaultWhite") {
        return (
            <div className="model_part_title">
                <h1 className="model_part_desc">Wings</h1>
            </div>
        )
    }
    else if (snap.current === "transparent3") {
        return (
            <div className="model_part_title">
                <h1 className="model_part_desc">Cockpit</h1>
            </div>
        )
    }

    else {
        return (
            <div className="view_info">
                <h1 className="view_info_click">Click on diffrent parts of Grob G 115 to know more</h1>
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

export default function Grob() {
    return (
        <>
            <div className="model">

                <Link to="/explore" className="model_goback">Go Back</Link>

                <div className="model_info">
                    <h1 className="model_info_title">
                    Grob G 115
                    </h1>
                    <div className="explore_title_line"></div>
                    <div className="model_info_desc">The Grob G 115 is a general aviation fixed-wing aircraft, primarily used for flight training. It is built in Germany by Grob Aircraft (Grob Aerospace before January 2009). The E variant with a 3-blade variable pitch propeller is in service with the Finnish Air Force, the Royal Navy and Army Air Corps for Flying Grading (a pre-EFT flying course) and in the Royal Air Force as part of No. 6 Flying Training School (6 FTS).</div>
                </div>

                <div className="model3D">

                    <div className="model3D_3D">
                        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                            <ambientLight intensity={0.7} />
                            <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                            <Suspense fallback={null}>
                                <Aircraft scale={0.5} />
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
