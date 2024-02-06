'use client';

import style from "./page.module.css";
import Navbar from "@/_components/semantics/Navbar";
import Footer from "@/_components/semantics/Footer";
import { ButtonSubmit } from "@/_components/Button";

export default function ContactPage() {

	const handleFormSubmit = () => {

	}

	return (
		<>
			<Navbar />
			<section id={style.contactPage}>
				<div className="container">
					<div>
						<p className="hero-title">Contact us</p>
						<p className="hero-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi facere quam, exercitationem similique maxime optio ad libero laudantium sunt modi asperiores nesciunt impedit, quibusdam vitae saepe doloribus illo reprehenderit temporibus?</p>

						<form onSubmit={handleFormSubmit}>
							<input type="text" placeholder="Name" />
							<input type="email" placeholder="Email" />
							<input type="tel" placeholder="Phone" />
							<textarea name="message" placeholder="Message"></textarea>
							<ButtonSubmit text="Submit" />
						</form>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}
