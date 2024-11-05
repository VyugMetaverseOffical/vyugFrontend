import * as React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Input, Button, Grid, Checkbox, TextField } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { styled, useTheme } from '@mui/material/styles';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';



const drawerWidth = 320;
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));





function KycDetails(props) {

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
   
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } }; 
    return (
        <Box
            sx={{
                backgroundImage: 'radial-gradient(321.81% 354.7% at -6.05% -19.94%, rgba(137, 103, 253, 1) 0%, rgba(51, 47, 94, 1) 8.67%, rgba(12, 0, 24, 1) 31.74%)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                width: '100%',
                minHeight: "100vh"
            }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{

                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor: "transparent"
                }}
            >
                <Toolbar sx={{ backgroundColor: 'transparent' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" noWrap component="div">

                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </Box>
            <Main open={open}>
                <DrawerHeader />
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Grid className='w-1/5 flex justify-between text-white text-opacity-50 mt-24'>
                    <div>User Details</div>
                    <div className='text-white'>Kyc Details</div>
                    <div>More Details</div>
                </Grid>
                <Box className="mt-14 p-7 text-white">
                    <div className='text-right' style={{ color: "rgba(136, 105, 251, 1)" }}>Pending</div>
                    <div className='font-bold'>KYC</div>
                    <div className='flex'>
                        <div className='w-5/6'>
                            <Grid className=' flex justify-between text-white  mt-6 '>
                                <div className='w-24'>Pan Card</div>
                                <div className='w-20' style={{ color: 'rgba(0, 165, 131, 1)' }}>Verified</div>
                                <Button
                                    className='w-20 h-7 ml-6 '
                                    style={{
                                        borderWidth: '1.24px',
                                        borderStyle: 'solid',
                                        borderImage: 'linear-gradient(91.67deg, #162777 40.26%, #0F8288 76.26%, #0B5789 106.43%) 1',
                                        borderRadius: "3.73px"
                                    }}
                                >
                                    View</Button>
                                <Grid className="flex justify-center items-center gap-2">
                                    <div style={{ color: 'rgba(0, 165, 131, 1)' }}>Mark:</div>
                                    <div>Verify</div>
                                    <Checkbox {...label} sx={{ color: "white" }} />
                                    <div>Not Verify</div>
                                    <Checkbox {...label} sx={{ color: "white" }} />
                                </Grid>
                            </Grid>

                            <Grid className=' flex justify-between text-white  mt-6 '>
                                <div className='w-24'>Aadhar Card</div>
                                <div className='w-20' style={{ color: 'rgba(0, 165, 131, 1)' }}>Verified</div>
                                <Button
                                    className='w-20 h-7 ml-6 '
                                    style={{
                                        borderWidth: '1.24px',
                                        borderStyle: 'solid',
                                        borderImage: 'linear-gradient(91.67deg, #162777 40.26%, #0F8288 76.26%, #0B5789 106.43%) 1',
                                        borderRadius: "3.73px"
                                    }}
                                >
                                    View</Button>
                                <Grid className="flex justify-center items-center gap-2">
                                    <div style={{ color: 'rgba(0, 165, 131, 1)' }}>Mark:</div>
                                    <div >Verify</div>
                                    <Checkbox {...label} sx={{ color: "white" }} />
                                    <div>Not Verify</div>
                                    <Checkbox {...label} sx={{ color: "white" }} />
                                </Grid>
                            </Grid>
                            <Grid className=' flex justify-between text-white mt-6 '>

                                <div className='w-24'>Selfie</div>
                                <div className='w-20' style={{ color: "rgba(136, 105, 251, 1)" }}>Verification Request</div>
                                <Button
                                    className='w-20 h-7 ml-6 '
                                    style={{
                                        borderWidth: '1.24px',
                                        borderStyle: 'solid',
                                        borderImage: 'linear-gradient(91.67deg, #162777 40.26%, #0F8288 76.26%, #0B5789 106.43%) 1',
                                        borderRadius: "3.73px"
                                    }}
                                >
                                    View</Button>
                                <Grid className="flex justify-center items-center gap-2">
                                    <div style={{ color: 'rgba(0, 165, 131, 1)' }}>Mark:</div>
                                    <div>Verify</div>
                                    <Checkbox {...label} sx={{ color: "white" }} />
                                    <div>Not Verify</div>
                                    <Checkbox {...label} sx={{ color: "white" }} />
                                </Grid>
                            </Grid>
                        </div>
                        <div className="w-1/6 flex justify-end items-center">
                            <Button
                                sx={{
                                    backgroundColor: "rgba(0, 165, 131, 1)",
                                    color: "white",
                                    height: "32px",
                                    '&:hover': {
                                        backgroundColor: "orange",
                                        color: "black",
                                    }
                                }}
                            >
                                Submit
                            </Button>
                        </div>
                    </div>
                </Box>

            </Box>
            </Main>
        </Box>
    );
}

export default KycDetails;
