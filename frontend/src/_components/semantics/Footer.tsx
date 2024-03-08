import Link from 'next/link';
import Image from 'next/image';
import style from "./styles/Footer.module.css"

export default function Footer() {
  return (
	<footer id={style.footer}>
		<div className="container">
			<div>
				<div>
					<p className="body-text">Park King</p>
				</div>
				<div>
					<p className="body-title">Our Mission</p>
					<br />
					<p className="body-text">To simplify parking management for businesses and individuals alike.</p>
				</div>
				<div>
					<p className="body-title">Contact Us</p>
					<br />
					<p className="body-text">Email: park.king@parkking.com</p>
					<p className="body-text">Number: (+63)900-000-0000</p>
				</div>
			</div>
		</div>
	</footer>
  )
}
