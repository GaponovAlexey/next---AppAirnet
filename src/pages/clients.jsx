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



Taskone.getInitialProps = async () => {
	const res = await fetch(`https://iakjucmhukqakhswuqgh.supabase.co/rest/v1/clients?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNzgzMTg0OCwiZXhwIjoxOTQzNDA3ODQ4fQ.IvTqqvidDxgLV_nqYd0VFPV9p4I-h1mNsuc9tkt1daI`)
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
							<TableCell align="right">name</TableCell>
							<TableCell align="right">phone</TableCell>
							<TableCell align="right">phone2</TableCell>
							<TableCell align="right">phone3</TableCell>
							<TableCell align="right">email</TableCell>
							<TableCell align="right">is_lead</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{ list.map((row) => (
							<TableRow key={ row.id }>
								<TableCell component="th" scope="row">
									{ row.id }
								</TableCell>
								<TableCell align="right">{ row.id }</TableCell>
								<TableCell align="right">{ row.name }</TableCell>
								<TableCell align="right">{ row.phone }</TableCell>
								<TableCell align="right">{ row.phone2 }</TableCell>
								<TableCell align="right">{ row.phone3 }</TableCell>
								<TableCell align="right">{ row.email }</TableCell>
								<TableCell align="right">{ row.is_lead }</TableCell>
							</TableRow>
						)) }
					</TableBody>
				</Table>
			</TableContainer>
			{/*{JSON.stringify(list, null, 4)}*/ }

		</>
	);
}


