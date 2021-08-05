import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import Link from 'next/link';




const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

export default function ButtonAppBar() {
	const classes = useStyles();

	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className={ classes.root }>
			<AppBar position="static">
				<Toolbar>
					<Button aria-controls="fade-menu" aria-haspopup="true" onClick={ handleClick }>
						Tusk menu
					</Button>
					<Menu
						anchorEl={ anchorEl }
						keepMounted
						open={ open }
						onClose={ handleClose }
						TransitionComponent={ Fade }
					>
						<Link href='/' ><MenuItem >Home</MenuItem></Link>
						<Link href='/taskone' ><MenuItem onClick={ handleClose }>Call</MenuItem></Link>
						<Link href='/tasktwo' ><MenuItem onClick={ handleClose }>Bases</MenuItem></Link>
					</Menu>
				</Toolbar>
			</AppBar>
		</div>
	);
}


