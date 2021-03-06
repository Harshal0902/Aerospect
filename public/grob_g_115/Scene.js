/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: helijah (https://sketchfab.com/helijah)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/models/64bc0e98d56a4f88a2833dbefa2ca975
title: Grob G 115
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
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

useGLTF.preload('/scene.gltf')
