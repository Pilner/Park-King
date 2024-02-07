// @ts-nocheck
"use client";

import style from "./page.module.css";
import Navbar from "@/_components/semantics/Navbar";
import Footer from "@/_components/semantics/Footer";
import Button from "@/_components/Button";
import BlueMarker from "@/_components/BlueMarker";

import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function FindSpot() {

	const handleMarkerDrag = (event) => {
		console.log(event);
	}

	const handleFormSubmit = () => {};

	return (
		<>
			<Navbar />
			<section id={style.findSpot}>
				<div className="container">
					<div>
						<div className={style.sectionCaption}>
							<p className="hero-title">Finding a spot</p>
							<p className="hero-text">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Maiores, nemo distinctio eos
								esse voluptatibus reiciendis? Amet libero
								perspiciatis rerum officia voluptatibus hic cum!
								Odio unde impedit accusamus dolor autem aperiam
								eaque eum quaerat quidem voluptatibus, sit
								blanditiis possimus debitis aut corrupti? Illum
								aperiam reiciendis vitae blanditiis
								exercitationem. Dolor, eos quas.
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
											Lorem ipsum dolor sit amet
											consectetur adipisicing elit.
											Tempora, corporis dignissimos
											explicabo adipisci voluptatum quis.
										</p>
									</div>
									<div className={style.right}>
										<form onSubmit={handleFormSubmit}>
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
									<Marker
										latitude={14.598100399596916}
										longitude={121.01079119510365}
										anchor="bottom"
										draggable="true"
										onDragEnd={handleMarkerDrag}
									>
										<BlueMarker />
									</Marker>
								</Map>
							</div>
							<Button text="Submit" url="/result" />
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
