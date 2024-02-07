// @ts-nocheck
'use client'

import React, { useEffect, useState } from 'react'

import Image from "next/image";
import style from "./page.module.css";
import Navbar from "@/_components/semantics/Navbar";
import Footer from "@/_components/semantics/Footer";
import Button from "@/_components/Button";
import BlueMarker from "@/_components/BlueMarker";

import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from 'mapbox-gl';


export default function ResultsPage() {
	const [marker, setMarker] = useState(null);




	return (
		<>
			<Navbar />
			<section id={style.resultPage}>
				<div className="container">
					<div>
						<p className="hero-title">Results</p>
						{/* Add other content here */}
					</div>
					<div id="map" className={style.mapContainer}>
						<Map
							mapboxAccessToken={
								process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
							}
							style={{
								width: "100%",
								height: "100%",
							}}
							mapStyle="mapbox://styles/mapbox/streets-v12"
							initialViewState={{
								latitude: 14.598100399596916,
								longitude: 121.01079119510365,
								zoom: 14,
							}}
							maxZoom={20}
							minZoom={11}
						>
							<Marker
								latitude={14.598100399596916}
								longitude={121.01079119510365}
								anchor="bottom"
								draggable="true"
							>
								<BlueMarker />
							</Marker>
						</Map>
					</div>
					<div className={style.parkingLotSpace}>
						<div className={style.parkingLot}>
							<div>
								<div className={style.parkingSpace}></div>
								<div className={style.parkingSpace}></div>
								<div className={style.parkingSpace}></div>
								<div className={style.parkingSpace}></div>
								<div className={style.parkingSpace}></div>
								<div className={style.parkingSpace}></div>
							</div>
							<div>
								<div className={style.parkingSpace}></div>
								<div className={style.parkingSpace}></div>
								<div className={style.parkingSpace}></div>
								<div className={style.parkingSpace}></div>
								<div className={style.parkingSpace}></div>
								<div className={style.parkingSpace}></div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}

const manila = new mapboxgl.LngLatBounds(
	[120.7617187, 14.386892905],
	[121.053525416, 14.691678901]
);
