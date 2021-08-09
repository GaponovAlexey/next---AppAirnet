import React from 'react';
import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';;
import ButtonAppBar from './panel';
import { useDispatch, useSelector } from 'react-redux';
import { getRepos } from './../app/api';


//Taskone.getInitialProps = async () => {
//	const res = await fetch(`https://iakjucmhukqakhswuqgh.supabase.co/rest/v1/calls?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNzgzMTg0OCwiZXhwIjoxOTQzNDA3ODQ4fQ.IvTqqvidDxgLV_nqYd0VFPV9p4I-h1mNsuc9tkt1daI`)
//	const users = await res.json()
//	return { list: users };
//}


export default function Taskone(props) {
	const dispatch = useDispatch()
	const list = useSelector(state => state.repos.client_id)
	//useEffect(() => {
	//	dispatch(getRepos())
	//}, [])


	return (
		<>
			<ButtonAppBar />
			{ list }
			{/*<TableContainer component={ Paper }>
				<Table size="small" aria-label="a dense table">
					<TableHead>
						<TableRow>
							<TableCell>Task</TableCell>
							<TableCell align="right">id</TableCell>
							<TableCell align="right">call</TableCell>
							<TableCell align="right">call_start</TableCell>
							<TableCell align="right">from</TableCell>
							<TableCell align="right">status</TableCell>
							<TableCell align="right">from</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{ list.map((row) => (
							<TableRow key={ row.id }>
								<TableCell component="th" scope="row">
									{ row.id }
								</TableCell>
								<TableCell align="right">{ row.id }</TableCell>
								<TableCell align="right">{ row.client_id }</TableCell>
								<TableCell align="right">{ row.call_start }</TableCell>
								<TableCell align="right">{ row.from }</TableCell>
								<TableCell align="right">{ row.status }</TableCell>
								<TableCell align="right">{ row.from }</TableCell>
							</TableRow>
						)) }
					</TableBody>
				</Table>*/}
			{/*</TableContainer>*/}
		</>
	);
}


