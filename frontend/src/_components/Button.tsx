import Link from 'next/link';

interface ButtonProps {
	text: string;
	url: string;
	form: string;
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


export function ButtonSubmit({text, form, url}: ButtonProps) {
	return (
	<div className={`button-div`}>
		<Link href={url} scroll={true}>
			<button type='submit' form={form} className={`round-button`}>{text}</button>
		</Link>
	</div>
	)
}