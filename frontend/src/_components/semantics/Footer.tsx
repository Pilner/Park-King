import Link from 'next/link';
import style from "./styles/Footer.module.css"

export default function Footer() {
  return (
	<footer id={style.footer}>
		<div className="container">
			<div>
				<div>
					<Link href={"/"}><p className="body-text" style={{textAlign: 'center'}}>PARK KING</p></Link>
				</div>
				<div>
					<p className="body-title">Our Mission</p>
					<p className="body-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim praesentium laboriosam id omnis debitis quaerat?</p>
				</div>
				<div>
					<p className="body-title">Contact Us</p>
					<p className="body-text">Email: lorem.ipsum@lorem.com</p>
					<p className="body-text">Number: (+63)900-000-0000</p>
				</div>
			</div>
		</div>
	</footer>
  )
}
