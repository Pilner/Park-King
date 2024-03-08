// @ts-nocheck
'use client'

import React, { useEffect, useState } from 'react'

import Image from "next/image";
import style from "./page.module.css";
import Navbar from "@/_components/semantics/Navbar";
import Footer from "@/_components/semantics/Footer";
import Button from "@/_components/Button";
import BlueMarker from "@/_components/BlueMarker";
import RedMarker from "@/_components/RedMarker";

import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from 'mapbox-gl';
import { useParams } from 'next/navigation';

export default function ResultsPage() {
	const [data, setData] = useState([]);
    const [parkData, setParkData] = useState({parkSlots: [], location_id: 0, location: "", latitude: 0, longitude: 0});
    const [availableCount, setAvailableCount] = useState("");

	// get [id] from url
	const params = useParams();

	useEffect(() => {
		// Fetch data before the component is rendered
		async function fetchData() {
			// Fetch data from external API
			try {
				const res = await fetch("http://localhost:8080/api/data");
				const jsonData = await res.json();

				return jsonData;
			} catch {
				console.error("Can't connect to database, probably server is off.")
			}
		}
		fetchData().then((data) => {
			setData(data);
		});
	}, []);

	useEffect(() => {
		if (data) {
			for (let i = 0; i < data.length; i++) {
				if (data[i].location_id == params.id) {
					setParkData(data[i]);
				}
			}
		}
	}, [data]);
	
	useEffect(() => {
		let count = 0;
		for (let i = 0; i < parkData.parkSlots.length; i++) {
			if (parkData.parkSlots[i] == true) {
				count++;
			}
		}
		setAvailableCount(`${count} out of ${parkData.parkSlots.length}`);
	}, [parkData.parkSlots]);

	return (
		<>
			<Navbar />
			<section id={style.resultPage}>
				<div className="container">
					<div>
						<p className="hero-title">Results:</p>
						<p className="hero-text"><span className="body-title">Location:</span> {parkData.location}</p>
						<p className="hero-text"><span className="body-title">Car Type:</span> Sedan</p>
						<p className="hero-text"><span className="body-title">Available:</span> {availableCount}</p>
					</div>
					<div id="map" className={style.mapContainer}>
						{data.map((park) => {
							if (park.location_id == params.id) {
								return (
									<Map
										mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
										style={{
											width: "100%",
											height: "100%",
										}}
										mapStyle="mapbox://styles/mapbox/streets-v12"
										initialViewState={{
											latitude: park.latitude,
											longitude: park.longitude,
											zoom: 14,
											bounds: manila
										}}
										maxZoom={20}
										minZoom={11}
									>
										<Marker
											key={park.location_id}
											latitude={park.latitude}
											longitude={park.longitude}
											anchor={`bottom`}
											draggable={false}
										>
											<RedMarker />
										</Marker>
									</Map>
								)
							}
						})}
					</div>
						
					<div className={style.parkingLotSpace}>
						<div className={style.parkingLot}>
							<div>
								{parkData.parkSlots.map((slot, index) => {
									if (index < 6) {
										if (slot == true) {
											return (
												<div key={index} className={`${style.parkingSpace} ${style.vacant}`}></div>
											)
										} else {
											return (
												<div key={index} className={`${style.parkingSpace} ${style.taken}`}></div>
											)
										}
									}
								})};
							</div>
							<div>
							{parkData.parkSlots.map((slot, index) => {
									if (index >= 6) {
										if (slot == true) {
											return (
												<div key={index} className={`${style.parkingSpace} ${style.vacant}`}></div>
											)
										} else {
											return (
												<div key={index} className={`${style.parkingSpace} ${style.taken}`}></div>
											)
										}
									}
								})};
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
