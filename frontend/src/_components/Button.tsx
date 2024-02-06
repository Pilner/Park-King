import Link from 'next/link';

interface ButtonProps {
	text: string;
	url: string;
}

export default function Button({text, url}: ButtonProps) {

  return (
	<div className={`button-div`}>
		<Link href={url} scroll={true}>
		<button className={`round-button`}>{text}</button>
		</Link>
	</div>
  )
}


export function ButtonSubmit({text}: ButtonProps) {
	return (
	<div className={`button-div`}>
		<button type='submit' className={`round-button`}>{text}</button>
	</div>
	)
}