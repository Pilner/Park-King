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
								<p className="hero-title">Title</p>
								<p className="hero-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo temporibus eligendi dolorum? Illo quas odio molestiae labore? Atque, explicabo labore!</p>
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
								<p className="body-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, nihil maiores dignissimos eligendi voluptatum repudiandae in asperiores quam deserunt at, possimus sed reiciendis adipisci tempora dolore. Earum autem officiis sunt, vero porro possimus nobis molestias minus alias itaque tenetur ducimus accusamus aspernatur in sint quis quidem fuga ipsa obcaecati? Quos.</p>
							</div>
						</div>
						<div id={style.developers}>
							<div>
								<p className="body-title">About Us</p>
								<p className="body-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, nihil maiores dignissimos eligendi voluptatum repudiandae in asperiores quam deserunt at, possimus sed reiciendis adipisci tempora dolore. Earum autem officiis sunt, vero porro possimus nobis molestias minus alias itaque tenetur ducimus accusamus aspernatur in sint quis quidem fuga ipsa obcaecati? Quos.</p>
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
