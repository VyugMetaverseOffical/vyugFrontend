// import * as React from 'react';
// import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import CssBaseline from '@mui/material/CssBaseline';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import { Input, Button, Grid } from '@mui/material';
// import image from "../images/search-icon.png";
// import image2 from "../images/vector.png";
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// const drawerWidth = 320;
// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
//     ({ theme, open }) => ({
//       flexGrow: 1,
//       padding: theme.spacing(3),
//       transition: theme.transitions.create('margin', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//       }),
//       marginLeft: `-${drawerWidth}px`,
//       ...(open && {
//         transition: theme.transitions.create('margin', {
//           easing: theme.transitions.easing.easeOut,
//           duration: theme.transitions.duration.enteringScreen,
//         }),
//         marginLeft: 0,
//       }),
//     }),
//   );
  
//   const AppBar = styled(MuiAppBar, {
//     shouldForwardProp: (prop) => prop !== 'open',
//   })(({ theme, open }) => ({
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     ...(open && {
//       width: `calc(100% - ${drawerWidth}px)`,
//       marginLeft: `${drawerWidth}px`,
//       transition: theme.transitions.create(['margin', 'width'], {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//     }),
//   }));
  
//   const DrawerHeader = styled('div')(({ theme }) => ({
//     display: 'flex',
//     alignItems: 'center',
//     padding: theme.spacing(0, 1),
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar,
//     justifyContent: 'flex-end',
//   }));
// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];


// function MoreDetails2(props) {
//     const theme = useTheme();
//     const [open, setOpen] = React.useState(false);
//     const handleDrawerOpen = () => {
//         setOpen(true);
//       };
    
//       const handleDrawerClose = () => {
//         setOpen(false);
//       };

    
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
//                 <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{ mr: 2, ...(open && { display: 'none' }) }}
//           >
//             <MenuIcon />
//           </IconButton>
        
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
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           '& .MuiDrawer-paper': {
//             width: drawerWidth,
//             boxSizing: 'border-box',
//           },
//         }}
//         variant="persistent"
//         anchor="left"
//         open={open}
//       >
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <List>
//           {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//             <ListItem key={text} disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//         <Divider />
//         <List>
//           {['All mail', 'Trash', 'Spam'].map((text, index) => (
//             <ListItem key={text} disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//             </Box>
//             <Main open={open}>
//         <DrawerHeader />
//                 <Box className="mt-24  h-5/6 text-white ">
//                     <Grid className='flex justify-between h-7 w-full'>
//                         <Grid className='w-1/5 flex justify-between text-white text-opacity-50'>
//                             <div>User Details</div>
//                             <div >Kyc Details</div>
//                             <div className='text-white'>More Details</div>
//                         </Grid>
//                         <Grid className='gap-2 flex'>
//                         <img
//                                         src={image2}
//                                         alt="Subscribe"
//                                         style={{
//                                             borderTopLeftRadius: '0',
//                                             borderBottomLeftRadius: '0',
//                                             cursor: 'pointer',
//                                             width:"22px" // Add this to make it look clickable
//                                         }}
//                                         onClick={(e) => console.log(e)}
//                                     />
//                             <Input
//                                 sx={{ '--Input-decoratorChildHeight': '45px',color:"white" }}
//                                 placeholder="search"
                             
//                                 required
//                                 className='w-30 h-7 ml-6 '
//                                 style={{
//                                     borderWidth: '1.24px',
//                                     borderStyle: 'solid',
//                                     borderImage: 'linear-gradient(91.67deg, #162777 40.26%, #0F8288 76.26%, #0B5789 106.43%) 1',
//                                     borderRadius: "3.73px"
//                                 }}
//                                 endAdornment={
//                                     <img
//                                         src={image}
//                                         alt="Subscribe"
//                                         style={{
//                                             borderTopLeftRadius: '0',
//                                             borderBottomLeftRadius: '0',
//                                             cursor: 'pointer' // Add this to make it look clickable
//                                         }}
//                                         onClick={(e) => console.log(e)}
//                                     />
//                                 }
//                             />
//                         </Grid>
//                     </Grid>
//                     <Box className="mt-36 ">  
//                         <Box className="text-white px-16 h-16 flex justify-between items-center font-bold"
//                             sx={{
//                                 borderWidth: '2px',
//                                 borderStyle: 'solid',
//                                 borderImage: 'linear-gradient(91.67deg, #162777 40.26%, #0F8288 76.26%, #0B5789 106.43%) 1',
//                                 borderRadius: "3.73px",
//                                 boxShadow: '0px 7px 4px 0px rgba(0, 0, 0, 1)'
//                             }}>
//                             <div>Wallet & Address</div>
//                             <div style={{color:"rgba(0, 165, 131, 1"}}>Referral</div>
//                             <div>Transactions</div>
//                             <div>Trade History</div>
//                             <div>Balance Updation</div>
//                             <div>P2P Balance Updation</div>
//                             <div>Payment</div>
//                             <div>Referral Commission</div>
//                         </Box>
//                     </Box>
//                     <TableContainer component={Paper} sx={{backgroundColor:"transparent",marginTop:"100px"}}>
//                         <Table sx={{ minWidth: "81vw"}} aria-label="simple table">
//                             <TableHead >
//                                 <TableRow>
//                                     <TableCell style={{color:"rgba(0, 165, 131, 1)"}}>User Name</TableCell>
//                                     <TableCell align="right" style={{color:"rgba(0, 165, 131, 1)"}}>Email Address</TableCell>
//                                     <TableCell align="right" style={{color:"rgba(0, 165, 131, 1)"}}>Registered On</TableCell>
                                    
//                                 </TableRow>
//                             </TableHead>
//                             <TableBody >
//                                 {rows.map((row) => (
//                                     <TableRow
//                                         key={row.name}
//                                         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                                     >
//                                         <TableCell component="th" scope="row" style={{color:"white"}}>
//                                             {row.name}
//                                         </TableCell>
//                                         <TableCell align="right" style={{color:"white"}}>{row.calories}</TableCell>
//                                         <TableCell align="right" style={{color:"white"}}>{row.fat}</TableCell>
//                                     </TableRow>
//                                 ))}
//                             </TableBody>
//                         </Table>
//                     </TableContainer>    
//                 </Box> 
//             </Main>
//         </Box>
//     );
// }


// export default MoreDetails2;
