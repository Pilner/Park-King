import Link from 'next/link';
import Image from 'next/image';
import style from "./styles/Navbar.module.css"

export default function Navbar() {
  return (
	<section id={style.nav}>
		<div className={`container ` + style.container}>
			<nav id={style.navbar}>
				<div className={style.left}>
					<Link href={"/"}>
						<div className={style.logodiv}>
							<div className={style.logopic}>
								<Image
									src={"/parkking-logo1.png"}
									alt="Logo"
									width={0}
									height={0}
									style={{
										width: '100%',
										height: '100%'
									}}
									/>
							</div>
							<p className={`body-text`}>PARK KING</p>
						</div>
					</Link>
				</div>
				<div className={style.right}>
					<ul className={style.navlinks}>
						<li className={`body-text ` + style.nav_items}><Link href='/'>home</Link></li>
						<li className={`body-text ` + style.nav_items}><Link href='/find'>find a spot</Link></li>
						<li className={`body-text ` + style.nav_items}><Link href='/contact'>contact</Link></li>
					</ul>
				</div>

			</nav>
		</div>
	</section>
  )
}