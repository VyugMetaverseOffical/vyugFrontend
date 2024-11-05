// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import MuiAppBar from '@mui/material/AppBar';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import MailIcon from '@mui/icons-material/Mail';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import { Input, Button, Grid } from '@mui/material';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import image from "../images/search-icon.png";
// import { DataGrid } from '@mui/x-data-grid';
// import { styled, useTheme } from '@mui/material/styles';

// const drawerWidth = 320;
// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
//     ({ theme, open }) => ({
//         flexGrow: 1,
//         padding: theme.spacing(3),
//         transition: theme.transitions.create('margin', {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//         }),
//         marginLeft: `-${drawerWidth}px`,
//         ...(open && {
//             transition: theme.transitions.create('margin', {
//                 easing: theme.transitions.easing.easeOut,
//                 duration: theme.transitions.duration.enteringScreen,
//             }),
//             marginLeft: 0,
//         }),
//     }),
// );

// const AppBar = styled(MuiAppBar, {
//     shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//     transition: theme.transitions.create(['margin', 'width'], {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//     }),
//     ...(open && {
//         width: `calc(100% - ${drawerWidth}px)`,
//         marginLeft: `${drawerWidth}px`,
//         transition: theme.transitions.create(['margin', 'width'], {
//             easing: theme.transitions.easing.easeOut,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//     }),
// }));

// const DrawerHeader = styled('div')(({ theme }) => ({
//     display: 'flex',
//     alignItems: 'center',
//     padding: theme.spacing(0, 1),
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar,
//     justifyContent: 'flex-end',
// }));

// const columns = [
//     { field: 'symbol', headerName: 'Symbol', type: "image", width:250},
//     { field: 'coinName', headerName: 'Coin name', type: "text",width:250 },
//     {
//         field: 'users',
//         headerName: 'Users',
//         type: 'number',
//         width:250
//     },
//     {
//         field: 'holdings',
//         headerName: 'Holdings',
//         type: 'number',
//         width:250
//     },
//     {
//         field: '24_hour_trading',
//         headerName: 'Trading Volume 24 hour',
//         type: 'number',
//         width:250
//     },
//     {
//         field: '1_month_trading',
//         headerName: 'Trading Volume 1 Month',
//         type: 'number',
//         width:250
//     },
//     {
//         field: '1_week_trading',
//         headerName: 'Trading Volume 1 Week',
//         type: 'number',
//         width:250
//     },
// ];

// const rows = [
//     { id: 1, symbol: 'BTC', coinName: 'Bitcoin', users: 1000, holdings: 2000, '24_hour_trading': 5000, '1_month_trading': 10000, '1_week_trading': 3000 },
//     { id: 2, symbol: 'ETH', coinName: 'Ethereum', users: 800, holdings: 1800, '24_hour_trading': 4500, '1_month_trading': 9000, '1_week_trading': 2500 },
//     { id: 3, symbol: 'XRP', coinName: 'Ripple', users: 600, holdings: 1500, '24_hour_trading': 4000, '1_month_trading': 8000, '1_week_trading': 2000 },
//     // Add more rows as needed
// ];


// function ResponsiveDrawer(props) {
//     const theme = useTheme();
//     const [open, setOpen] = React.useState(false);
//     const handleDrawerOpen = () => {
//         setOpen(true);
//     };

//     const handleDrawerClose = () => {
//         setOpen(false);
//     };


//     return (
//         <Box  
//             sx={{
//                 backgroundImage: 'radial-gradient(321.81% 354.7% at -6.05% -19.94%, rgba(137, 103, 253, 1) 0%, rgba(51, 47, 94, 1) 8.67%, rgba(12, 0, 24, 1) 31.74%)',
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 display: 'flex',
//                 width: '100%',
//                 minHeight: "100vh"
//             }}>
//             <CssBaseline />
//             <AppBar
//                 position="fixed"
//                 sx={{

//                     ml: { sm: `${drawerWidth}px` },
//                     backgroundColor: "transparent"
//                 }}
//             >
//                 <Toolbar sx={{ backgroundColor: 'transparent' }}>
//                     <IconButton
//                         color="inherit"
//                         aria-label="open drawer"
//                         onClick={handleDrawerOpen}
//                         edge="start"
//                         sx={{ mr: 2, ...(open && { display: 'none' }) }}
//                     >
//                         <MenuIcon />
//                     </IconButton>

//                     <Typography variant="h6" noWrap component="div">

//                     </Typography>
//                 </Toolbar>
//             </AppBar>
//             <Box
//                 component="nav"
//                 sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
//                 aria-label="mailbox folders"
//             >
//                 {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
//                 <Drawer
//                     sx={{
//                         width: drawerWidth,
//                         flexShrink: 0,
//                         '& .MuiDrawer-paper': {
//                             width: drawerWidth,
//                             boxSizing: 'border-box',
//                         },
//                     }}
//                     variant="persistent"
//                     anchor="left"
//                     open={open}
//                 >
//                     <DrawerHeader>
//                         <IconButton onClick={handleDrawerClose}>
//                             {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//                         </IconButton>
//                     </DrawerHeader>
//                     <Divider />
//                     <List>
//                         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//                             <ListItem key={text} disablePadding>
//                                 <ListItemButton>
//                                     <ListItemIcon>
//                                         {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                                     </ListItemIcon>
//                                     <ListItemText primary={text} />
//                                 </ListItemButton>
//                             </ListItem>
//                         ))}
//                     </List>
//                     <Divider />
//                     <List>
//                         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//                             <ListItem key={text} disablePadding>
//                                 <ListItemButton>
//                                     <ListItemIcon>
//                                         {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                                     </ListItemIcon>
//                                     <ListItemText primary={text} />
//                                 </ListItemButton>
//                             </ListItem>
//                         ))}
//                     </List>
//                 </Drawer>
//             </Box>
//             <Main open={open}>
//                 <DrawerHeader />
//             <Box
//                 component="main"
//                 sx={{ flexGrow: 1, p: 3,  }}
//             >
//                 <Box className="mt-24   h-5/6 text-white ">
//                     <Grid className='flex justify-between h-7 w-full'>
//                         <div className="font-sans text-xl font-bold leading-6 tracking-normal text-justify">Left Card</div>
//                         <Input
//                             sx={{ '--Input-decoratorChildHeight': '45px' }}
//                             placeholder="mail@gmail.com"
//                             type="email"
//                             required
//                             className='w-1/6 h-7 ml-6 '
//                             style={{
//                                 borderWidth: '1.24px',
//                                 borderStyle: 'solid',
//                                 borderImage: 'linear-gradient(91.67deg, #162777 40.26%, #0F8288 76.26%, #0B5789 106.43%) 1',
//                                 borderRadius: "3.73px"
//                             }}
//                             endAdornment={
//                                 <img
//                                     src={image}
//                                     alt="Subscribe"
//                                     style={{
//                                         borderTopLeftRadius: '0',
//                                         borderBottomLeftRadius: '0',
//                                         cursor: 'pointer' // Add this to make it look clickable
//                                     }}
//                                     onClick={(e) => console.log(e)}
//                                 />
//                             }
//                         />
//                     </Grid>
//                     <Button
//                         sx={{
//                             backgroundColor: "rgba(0, 165, 131, 1)",
//                             color: "white",
//                             marginTop: "52px",
//                             height: "32px",
//                             '&:hover': {
//                                 backgroundColor: "orange", // Change background color on hover
//                                 color: "black", // Change text color on hover
//                             }
//                         }}>
//                         Send Notifications
//                     </Button>
//                     <div style={{ height: 400,width:"100%" }} className='mt-12'>
//                         <DataGrid
//                             rows={rows}
//                             columns={columns}
//                             sx={{
//                                 '&, [class^=MuiDataGrid]': { border: 'none',color: 'white' },
//                                 '& .hideRightSeparator > .MuiDataGrid-columnSeparator': {
//                                     display: 'none'
//                                 },
//                                 '& .MuiCheckbox-root': {
//                                     color: 'white', // Set checkbox color to white
//                                 },
//                                 '& .MuiDataGrid-columnHeaderCheckbox': {
//                                     color: 'white', // Set checkbox color in header to white
//                                 },
//                             }}

//                             initialState={{
//                                 pagination: {
//                                     paginationModel: { page: 0, pageSize: 5 },
//                                 },
//                             }}
//                             pageSizeOptions={[5, 10]}
//                             checkboxSelection
//                         />
//                     </div>
//                 </Box>
//             </Box>
//             </Main>
//         </Box>
//     );
// }


// export default ResponsiveDrawer;
