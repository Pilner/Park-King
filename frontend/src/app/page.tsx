import Image from "next/image";
import style from "./page.module.css";
import Navbar from "@/_components/semantics/Navbar";
import Footer from "@/_components/semantics/Footer";

export default function Home() {
	return (
		<>
			<Navbar />
			<section id={style.hero}>
				<div className="container">
					<div id={style.introduction}>
						<div>
							<div>
								<p className="hero-title">Park King</p>
								<p className="hero-text">A Parking Management Application made for tracking availability of parking spots in public places.</p>
							</div>
							<div></div>
						</div>
					</div>
					<div id={style.illustration}>
						<Image
							src={"/illustration1.png"}
							alt="Illustration 1"
							width={0}
							height={0}
							style={{
								width: '100%',
								height: 'auto',
								flexBasis: "45%"
							}}
					
						/>
						<Image
							src={"/illustration2.png"}
							alt="Illustration 1"
							width={0}
							height={0}
							style={{ width: '100%', height: 'auto', flexBasis: "45%"}}
						/>
					</div>
				</div>
			</section>
			<section id={style.information}>
				<div className="container">
					<div>
						<div id={style.about}>
							<div></div>
							<div>
								<p className="body-title">About Us</p>
								<br />
								<p className="body-text">At Park King, we revolutionize the way people experience parking management. Founded with a passion for efficiency and a commitment to customer satisfaction, Park King offers innovative solutions to streamline parking operations and enhance the overall parking experience.</p>
							</div>
						</div>
						<div id={style.developers}>
							<div>
								<p className="body-title">Meet the Developers</p>
								<br />
								<p className="body-text">This project is made possible by three college programmers:</p>

								<ul>
									<li className="body-text">Fabian Railey Victuelles for the Program</li>
									<li className="body-text">Raymond Miguel Cerna for the UI/UX Design</li>
									<li className="body-text">Andrei Enrico for the Project Management and Documentation.</li>
								</ul>
							</div>
							<div></div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}