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
    const { nodes, materials } = useGLTF('/raven/scene.gltf')
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
        <mesh geometry={nodes.mesh_0.geometry} material={materials.DefaultWhite} />
        <mesh geometry={nodes.mesh_1.geometry} material={materials['DefaultWhite_plug.png']} />
        <mesh geometry={nodes.mesh_2.geometry} material={materials.greentrs} />
        <mesh geometry={nodes.mesh_3.geometry} material={materials['DefaultWhite_ai.png']} />
        <mesh geometry={nodes.mesh_4.geometry} material={materials['DefaultWhite_alt.png']} />
        <mesh geometry={nodes.mesh_5.geometry} material={materials['DefaultWhite_asi.png']} />
        <mesh geometry={nodes.mesh_6.geometry} material={materials['DefaultWhite_compass.png']} />
        <mesh geometry={nodes.mesh_7.geometry} material={materials['DefaultWhite_interior.png']} />
        <mesh geometry={nodes.mesh_8.geometry} material={nodes.mesh_8.material} />
        <mesh geometry={nodes.mesh_9.geometry} material={nodes.mesh_9.material} />
        <mesh geometry={nodes.mesh_10.geometry} material={nodes.mesh_10.material} />
        <mesh geometry={nodes.mesh_11.geometry} material={nodes.mesh_11.material} />
        <mesh geometry={nodes.mesh_12.geometry} material={nodes.mesh_12.material} />
        <mesh geometry={nodes.mesh_13.geometry} material={materials['DefaultWhite_magneto.png']} />
        <mesh geometry={nodes.mesh_14.geometry} material={nodes.mesh_14.material} />
        <mesh geometry={nodes.mesh_15.geometry} material={nodes.mesh_15.material} />
        <mesh geometry={nodes.mesh_16.geometry} material={nodes.mesh_16.material} />
        <mesh geometry={nodes.mesh_17.geometry} material={nodes.mesh_17.material} />
        <mesh geometry={nodes.mesh_18.geometry} material={nodes.mesh_18.material} />
        <mesh geometry={nodes.mesh_19.geometry} material={materials['DefaultWhite_panel.png']} />
        <mesh geometry={nodes.mesh_20.geometry} material={materials['DefaultWhite_rpm.png']} />
        <mesh geometry={nodes.mesh_21.geometry} material={materials['DefaultWhite_seat.png']} />
        <mesh geometry={nodes.mesh_22.geometry} material={materials['DefaultWhite_switch.png']} />
        <mesh geometry={nodes.mesh_23.geometry} material={materials['DefaultWhite_switch.png.001']} />
        <mesh geometry={nodes.mesh_24.geometry} material={materials['DefaultWhite_tailrotor.png']} />
        <mesh geometry={nodes.mesh_25.geometry} material={nodes.mesh_25.material} />
        <mesh geometry={nodes.mesh_26.geometry} material={nodes.mesh_26.material} />
        <mesh geometry={nodes.mesh_27.geometry} material={materials['DefaultWhite_vor.png']} />
        <mesh geometry={nodes.mesh_28.geometry} material={materials['DefaultWhite_vsi.png']} />
        <mesh geometry={nodes.mesh_29.geometry} material={materials.RougeTrs} />
        <mesh geometry={nodes.mesh_30.geometry} material={materials.transparent} />
      </group>
        </group>
    )
}

function Details() {

    const snap = useSnapshot(state)
    if (snap.current === "DefaultWhite_mainrotor.png") {
        return (
            <div className="model_part_title">
                <h1 className="model_part_desc">Main Roter</h1>
            </div>
        )
    }
    else if (snap.current === "DefaultWhite_texture.png") {
        return (
            <div className="model_part_title">
                <h1 className="model_part_desc">Tail</h1>
            </div>
        )
    }

    else {
        return (
            <div className="view_info">
                <h1 className="view_info_click">Click on diffrent parts of Robinson R44 to know more</h1>
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

export default function C17() {
    return (
        <>
            <div className="model">

                <Link to="/explore" className="model_goback">Go Back</Link>

                <div className="model_info">
                    <h1 className="model_info_title">
                    Robinson R44
                    </h1>
                    <div className="explore_title_line"></div>
                    <div className="model_info_desc">The Robinson R44 is a four-seat light helicopter produced by Robinson Helicopter Company since 1992. Based on the company's two-seat Robinson R22, the R44 features hydraulically assisted flight controls. It was first flown on 31 March 1990 and received FAA certification in December 1992, with the first delivery in February 1993.</div>
                </div>

                <div className="model3D">

                    <div className="model3D_3D">
                        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                            <ambientLight intensity={0.7} />
                            <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                            <Suspense fallback={null}>
                                <Aircraft scale={0.4} />
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
