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
						Menu
					</Button>
					<Menu
						anchorEl={ anchorEl }
						keepMounted
						open={ open }
						onClose={ handleClose }
						TransitionComponent={ Fade }
					>
						<Link href='/'><MenuItem onClick={ handleClose } >Home</MenuItem></Link>
						<Link href='/calls' ><MenuItem onClick={ handleClose }>Calls</MenuItem></Link>
						<Link href='/clientComent' ><MenuItem onClick={ handleClose }>Client Coment</MenuItem></Link>
						<Link href='/clients' ><MenuItem onClick={ handleClose }>clients</MenuItem></Link>
						<Link href='/project' ><MenuItem onClick={ handleClose }>project</MenuItem></Link>
						<Link href='/taskComment' ><MenuItem onClick={ handleClose }>taskComment</MenuItem></Link>
						<Link href='/tasks' ><MenuItem onClick={ handleClose }>tasks</MenuItem></Link>
						<Link href='/taskStatus' ><MenuItem onClick={ handleClose }>taskStatus</MenuItem></Link>
					</Menu>
				</Toolbar>
			</AppBar>
		</div>
	);
}



