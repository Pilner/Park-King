import Link from 'next/link';
import style from "./styles/Navbar.module.css"

export default function Navbar() {
  return (
	<section id={style.nav}>
		<div className={`container ` + style.container}>
			<nav id={style.navbar}>
				<div className={style.left}>
					<Link href={"/"}>
						<p className={`body-text`}>PARK KING</p>
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