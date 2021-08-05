import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';;
import ButtonAppBar from './panel';

const columns = [
	{ field: 'id', headerName: 'ID', width: 90 },
	{
		field: 'firstName',
		headerName: 'First name',
		width: 150,
		editable: true,
	},
	{
		field: 'lastName',
		headerName: 'Last name',
		width: 150,
		editable: true,
	},
	{
		field: 'age',
		headerName: 'Age',
		type: 'number',
		width: 110,
		editable: true,
	},
	{
		field: 'fullName',
		headerName: 'Full name',
		description: 'This column has a value getter and is not sortable.',
		sortable: false,
		width: 160,
		valueGetter: (params) =>
			`${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''
			}`,
	},
];

const rows = [
	{ id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
	{ id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
	{ id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
	{ id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
	{ id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
	{ id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
	{ id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
	{ id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
	{ id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

Taskone.getInitialProps = async () => {
	const res = await fetch(`https://iakjucmhukqakhswuqgh.supabase.co/rest/v1/calls?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNzgzMTg0OCwiZXhwIjoxOTQzNDA3ODQ4fQ.IvTqqvidDxgLV_nqYd0VFPV9p4I-h1mNsuc9tkt1daI`)
	const users = await res.json()
	return { list: users };
}


const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

export default function Taskone({ list }) {
	const classes = useStyles();
	return (
		<>
			<ButtonAppBar />
			<TableContainer component={ Paper }>
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
				</Table>
			</TableContainer>
			{/*{JSON.stringify(list, null, 4)}*/ }

		</>
	);
}


