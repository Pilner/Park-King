// @ts-nocheck
"use client";

import style from "./page.module.css";
import Navbar from "@/_components/semantics/Navbar";
import Footer from "@/_components/semantics/Footer";
import Button, {ButtonSubmit} from "@/_components/Button";
import BlueMarker from "@/_components/BlueMarker";
import RedMarker from "@/_components/RedMarker";

import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState, useEffect } from "react";

export default function FindSpot() {

	const [marker, setMarker] = useState(null);
	const [data, setData] = useState([]);
	const [activeLink, setActiveLink] = useState(0);

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

	const handleMarkerClick = (id) => {
		setActiveLink(id);
		console.log(activeLink)
	}

	const handleFormSubmit = () => {}
	
	return (
		<>
			<Navbar />
			<section id={style.findSpot}>
				<div className="container">
					<div>
						<div className={style.sectionCaption}>
							<p className="hero-title">Finding a spot</p>
							<p className="hero-text">
								Simply input your car type and chosen location, and let us do the rest. Our advanced algorithm will swiftly locate the perfect spot for your vehicle, whether you're in a compact car, an SUV, or need accessibility accommodations.
							</p>
						</div>
						<div>
							<div id={style.carInfo}>
								<div>
									<div className={style.left}>
										<p className="hero-title">
											Car Information
										</p>
										<p className="hero-text">
											Select the car type of your current vehicle.
										</p>
									</div>
									<div className={style.right}>
										<form id="carsForm" onSubmit={handleFormSubmit}>
											<label
												className="body-title"
												htmlFor="cars"
											>
												Car Type:
											</label>
											<select
												name="cars"
												id="cars"
												className="body-text"
												required
												defaultValue={"DEFAULT"}
											>
												<option
													value="DEFAULT"
													disabled
													hidden
												>
													Choose one
												</option>
												<option value="sedan">
													Sedan
												</option>
												<option value="suv">SUV</option>
												<option value="truck">
													Truck
												</option>
												<option value="van">Van</option>
											</select>
										</form>
										<Button
											text="Continue"
											url={`#` + style.mapSection}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id={style.mapSection}>
				<div className="container">
					<div>
						<p className="hero-title">Pick a Location</p>
						<div>
							<div className={style.mapContainer}>
								<Map
									mapboxAccessToken={
										process.env
											.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
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
									{/* Iteration */}
									{data.map((item) => {
										return (
										<Marker
											key={item.location_id}
											latitude={item.latitude}
											longitude={item.longitude}
											anchor={`bottom`}
											draggable={false}
											onClick={() => handleMarkerClick(item.location_id)}
										>
											<BlueMarker />
										</Marker>	
										);
									})}
								</Map>
							</div>
							<ButtonSubmit url={`/result/${activeLink}`} form="carsForm" text="Submit" />
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}