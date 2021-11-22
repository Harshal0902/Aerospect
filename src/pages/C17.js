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
    const { nodes, materials } = useGLTF('/c17_globemaster_iii/scene.gltf')
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
                <mesh geometry={nodes.mesh_0.geometry} material={materials.NoseGear_ReferenceRepcolor128128128} />
                <mesh geometry={nodes.mesh_1.geometry} material={materials['Part1.1.1_ReferenceRepcolor128128128']} />
                <mesh geometry={nodes.mesh_2.geometry} material={materials['Part1.1.2_ReferenceRepcolor128128128']} />
                <mesh geometry={nodes.mesh_3.geometry} material={materials['Part1.1_ReferenceRepcolor128128128']} />
                <mesh geometry={nodes.mesh_4.geometry} material={materials['Part1.2.3_ReferenceRepcolor128128128']} />
                <mesh geometry={nodes.mesh_5.geometry} material={materials['Part1.2.4_ReferenceRepcolor128128128']} />
                <mesh geometry={nodes.mesh_6.geometry} material={materials.Part2_ReferenceRepcolor128128128} />
            </group>
        </group>
    )
}

function Details() {

    const snap = useSnapshot(state)
    if (snap.current === "Part1.2.3_ReferenceRepcolor128128128") {
        return (
            <div className="model_part_title">
                <h1 className="model_part_desc">Body</h1>
            </div>
        )
    }
    else if (snap.current === "Part2_ReferenceRepcolor128128128") {
        return (
            <div className="model_part_title">
                <h1 className="model_part_desc">Wheels</h1>
            </div>
        )
    }

    else {
        return (
            <div className="view_info">
                <h1 className="view_info_click">Click on diffrent parts of C 17 to know more</h1>
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
                        C-17 Globemaster III
                    </h1>
                    <div className="explore_title_line"></div>
                    <div className="model_info_desc">The McDonnell Douglas/Boeing C-17 Globemaster III is a large military transport aircraft that was developed for the United States Air Force (USAF) from the 1980s to the early 1990s by McDonnell Douglas. The C-17 carries forward the name of two previous piston-engined military cargo aircraft, the Douglas C-74 Globemaster and the Douglas C-124 Globemaster II.</div>
                </div>

                <div className="model3D">

                    <div className="model3D_3D">
                        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                            <ambientLight intensity={0.7} />
                            <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                            <Suspense fallback={null}>
                                <Aircraft scale={0.012} />
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
