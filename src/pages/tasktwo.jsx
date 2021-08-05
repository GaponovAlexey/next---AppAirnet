import { Button } from '@material-ui/core';
import Link from 'next/link'
import ButtonAppBar from './panel';
import s from './tasktwo.module.css';


export async function getServerSideProps(context) {
	const res = await fetch(`https://iakjucmhukqakhswuqgh.supabase.co/rest/v1/calls?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNzgzMTg0OCwiZXhwIjoxOTQzNDA3ODQ4fQ.IvTqqvidDxgLV_nqYd0VFPV9p4I-h1mNsuc9tkt1daI`)
	const users = await res.json()

	return {
		props: { users }, // will be passed to the page component as props
	}
}


let tasktwo = ({ users }) => {


	return (
		<>
			<ButtonAppBar />

			<div className={ s.tasktwos } >
				{ users.map(s => <h1>{ s.client_id }</h1>) }<br />
				{ users.map(s => <h1>{ s.call_start }</h1>) }
				{ users.map(s => <h1>{ s.from }</h1>) }
				{ users.map(s => <h1>{ s.status }</h1>) }
				{ users.map(s => <h1>{ s.call_coment }</h1>) }
			</div>
			<Button >
				<Link href='/taskone'>
					<h1>Task two</h1>
				</Link>
			</Button>


		</>
	)
}

export default tasktwo;