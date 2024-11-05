
// import { Box, Grid, Input } from '@mui/material';
// import first_image from '../images/market_title.png'
// import Paper from '@mui/material/Paper';
// import InputBase from '@mui/material/InputBase';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import TuneIcon from '@mui/icons-material/Tune';
// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css'
// import Card from '@mui/joy/Card';
// import land from '../images/land.png';
// import image3 from '../images/market_foot.png';
// import ellipse2 from '../images/ellipse2.png';
// import { CCard, CCardImage, CCardBody } from '@coreui/react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses, } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import { styled } from '@mui/material/styles';
// import InputAdornment from '@mui/material/InputAdornment';
// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
// import Header from '../components/Head';
// import { useEffect, useState } from 'react';


// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: 'black',
//     ...theme.typography.body2,
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//     borderRadius: "20px"
// }));

// const StyledTableCell = styled(TableCell)(({ theme }) => ({

//     [`&.${tableCellClasses.head}`]: {
//         color: theme.palette.common.white,
//         textAlign: "left",
//     },
//     [`&.${tableCellClasses.body}`]: {
//         fontSize: 14,
//         color: theme.palette.common.white,
//         textAlign: "left",
//     },
// }));
// console.log(tableCellClasses.head);
// const StyledTableRow = styled(TableRow)(({ theme }) => ({

//     '&:nth-of-type(even)': {
//         backgroundImage: "linear-gradient(to right, black, gray, black)",
//     },
//     '&:nth-of-type(odd)': {
//         backgroundColor: "black"
//     },
//     // hide last border
//     '&:last-child td, &:last-child th': {
//         border: 0,
//     },
// }));


// const fadeImages = [
//     {
//         url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
//         caption: 'First Slide'
//     },
//     {
//         url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
//         caption: 'Second Slide'
//     },
//     {
//         url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
//         caption: 'Third Slide'
//     },
//     {
//         url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
//         caption: 'Third Slide'
//     },
//     {
//         url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
//         caption: 'Third Slide'
//     },
//     {
//         url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
//         caption: 'Third Slide'
//     },
//     {
//         url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
//         caption: 'Third Slide'
//     },
//     {
//         url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
//         caption: 'Third Slide'
//     },
//     {
//         url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
//         caption: 'Third Slide'
//     },
// ];
// const data = [
//     {
//         image: ellipse2,
//         d1: "ggg",
//         d2: "dd",
//         seller: "ff",
//         buyer: "fffgf",
//         type: "listing",
//         time: "ABOUT 2HR AGO",
//         price: "100gyr"
//     },
//     {
//         image: ellipse2,
//         d1: "gefd",
//         d2: "ddddd",
//         seller: "ffrfre",
//         buyer: "f",
//         type: "listing",
//         time: "ABOUT 2HR AGO",
//         price: "400gyr"
//     }
// ]

// const yourDataArray = [
//     {
//         name: "Mr. Abhi",
//         role: "Land Owner",
//         image: ellipse2 // Assuming ellipse2 is the URL or import for the image
//     },
//     {
//         name: "Ms. Emma",
//         role: "Developer",
//         image: ellipse2// Assuming ellipse3 is the URL or import for the image
//     },
//     {
//         name: "Mr. Abhi",
//         role: "Land Owner",
//         image: ellipse2
//     },
//     {
//         name: "Ms. Emma",
//         role: "Developer",
//         image: ellipse2
//     },
//     {
//         name: "Ms. Emma",
//         role: "Developer",
//         image: ellipse2
//     },
// ];


// const MarketPlace = () => {
//     let x = window.innerWidth
//     console.log(x)

//     const [position, setPosition] = useState(false);

//   window.addEventListener("scroll", function (event) {
//     let scroll_y = this.scrollY;
//     if (scroll_y > 0) {
//       setPosition(true);
//     } else {
//       setPosition(false);
//     }
//   });
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//     return (
//         <div style={{ overflowX: "hidden" }}>
//             <Header isTransparent={position} isHeaderText={true} />
//             <Box className="flex justify-center mt-24 h-[calc(5/6*100vh)] w-screen bg-white items-center relative ">
//                 <img src={first_image} className='h-[calc(5/6*100vh)]' />
//                 <Paper
//                     component="form"
//                     sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, position: "absolute", backgroundColor: "black", borderRadius: "10px" }}
//                 >
//                     <InputBase
//                         sx={{ ml: 1, flex: 1, color: 'white' }}
//                         placeholder="EXPLORE VIRTUAL REALM"
//                         inputProps={{ 'aria-label': 'search google maps' }}
//                     />
//                     <IconButton type="button" sx={{ p: '10px', color: "white" }} aria-label="search">
//                         <SearchIcon />
//                     </IconButton>
//                     <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
//                     <IconButton sx={{ p: '10px', color: "gray" }} aria-label="directions">
//                         <TuneIcon />
//                     </IconButton>
//                 </Paper>
//             </Box>
//             <Box className="mt-12 h-screen bg-rgba(231, 231, 230, 1)">
//                 <div className='mt-24 text-center font-bold text-5xl'>TRENDING</div>
//                 <div >

//                     <div className="container ">
//                         <Swiper
//                             effect={'coverflow'}
//                             grabCursor={true}
//                             centeredSlides={false}
//                             loop={true}
//                             slidesPerView={3}
//                             coverflowEffect={{
//                                 rotate: 0,
//                                 stretch: 0,
//                                 depth: 100,
//                                 modifier: 3,
//                             }}
//                             pagination={{ el: '.swiper-pagination', clickable: true }}

//                             modules={[EffectCoverflow, Pagination, Navigation]}
//                             className="swiper_container"

//                         >
//                             {fadeImages.map((image, index) => (
//                                 <SwiperSlide key={index}>
//                                     <img src={image.url} alt={`slide_image_${index}`} />
//                                     {/* Additional content or manipulation for each image can be placed here */}
//                                 </SwiperSlide>
//                             ))}

//                         </Swiper>

//                     </div>
//                     <div className='w-screen text-center font-bold text-2xl'>dfdfff</div>
//                     <div className='w-screen text-center  text-xl'>PRICE: 200 GYR</div>
//                     <div className='flex justify-center'>
//                         <button className='bg-black text-white rounded-3xl mt-8 w-40 font-bold py-3'>BUY NOW</button>
//                     </div>
//                 </div>

//             </Box>
//             <Box className="mt-24 h-[calc(2/3*100vh)] bg-black  flex  items-center">
//                 <div >

//                     <div className="text-center w-screen  text-5xl text-white">
//                         POPULAR <b>CREATORS</b>
//                     </div>
//                     <div className="flex justify-center mt-20 gap-2 ">

//                         {yourDataArray.map((item) => (
//                             <div key={item.id} style={{ position: "relative" }}>
//                                 <Card className="w-40" sx={{ backgroundColor: "white", borderRadius: "10%" }}>
//                                     <div className='font-bold text-4xl text-center mt-5'>{item.name}</div>
//                                     <div className='text-center mx-2 mb-5'>
//                                         {item.role}
//                                     </div>
//                                     <img src={item.image} className="absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-full h-1/3" />
//                                 </Card>
//                             </div>
//                         ))}
//                     </div>


//                 </div>
//             </Box>
//             <Box className="h-screen flex  items-center">
//                 <div>
//                     <div className='text-5xl text-center font-bold w-screen'>LATEST</div>
//                     <div className='text-4xl text-center font-500 w-screen mt-4'>LISTING</div>
//                     <div className='flex justify-center items-center'>
//                         <div className='text-center font-500'>LANDS</div>
//                         <Divider sx={{ height: 28, m: 1 }} orientation="vertical" style={{ width: 4 }} />
//                         <div className='text-center font-500'>WEARABLES</div>
//                         <Divider sx={{ height: 28, m: 1 }} orientation="vertical" style={{ width: 4 }} />
//                         <div className='text-center font-500'>EMOTES</div>

//                     </div>
//                     <div className="flex justify-center mt-20 gap-2 " >
//                         <CCard className='w-60 bg-white rounded-3xl'>
//                             <CCardImage orientation="top" src={land} className='w-full' />
//                             <CCardBody className='flex items-center px-2 py-4 gap-4 '>
//                                 <div>
//                                     <div className='font-bold'>
//                                         Some quick
//                                     </div>
//                                     <div className="mt-2">
//                                         Some quick
//                                     </div>
//                                 </div>
//                                 <button className='bg-black text-white rounded-xl px-1'>300 GYR</button>
//                             </CCardBody>
//                         </CCard>

//                         <CCard className='w-60 bg-white rounded-3xl'>
//                             <CCardImage orientation="top" src={land} className='w-full' />
//                             <CCardBody className='flex items-center px-2 py-4 gap-4 '>
//                                 <div>
//                                     <div className='font-bold'>
//                                         Some quick
//                                     </div>
//                                     <div className="mt-2">
//                                         Some quick
//                                     </div>
//                                 </div>
//                                 <button className='bg-black text-white rounded-xl px-1'>300 GYR</button>
//                             </CCardBody>
//                         </CCard>

//                         <CCard className='w-60 bg-white rounded-3xl'>
//                             <CCardImage orientation="top" src={land} className='w-full' />
//                             <CCardBody className='flex items-center px-2 py-4 gap-4 '>
//                                 <div>
//                                     <div className='font-bold'>
//                                         Some quick
//                                     </div>
//                                     <div className="mt-2">
//                                         Some quick
//                                     </div>
//                                 </div>
//                                 <button className='bg-black text-white rounded-xl px-1'>300 GYR</button>
//                             </CCardBody>
//                         </CCard>

//                         <CCard className='w-60 bg-white rounded-3xl'>
//                             <CCardImage orientation="top" src={land} className='w-full' />
//                             <CCardBody className='flex items-center px-2 py-4 gap-4 '>
//                                 <div>
//                                     <div className='font-bold'>
//                                         Some quick
//                                     </div>
//                                     <div className="mt-2">
//                                         Some quick
//                                     </div>
//                                 </div>
//                                 <button className='bg-black text-white rounded-xl px-1'>300 GYR</button>
//                             </CCardBody>
//                         </CCard>

//                         <CCard className='w-60 bg-white rounded-3xl'>
//                             <CCardImage orientation="top" src={land} className='w-full' />
//                             <CCardBody className='flex items-center px-2 py-4 gap-4 '>
//                                 <div>
//                                     <div className='font-bold'>
//                                         Some quick
//                                     </div>
//                                     <div className="mt-2">
//                                         Some quick
//                                     </div>
//                                 </div>
//                                 <button className='bg-black text-white rounded-xl px-1'>300 GYR</button>
//                             </CCardBody>
//                         </CCard>
//                     </div>
//                     <div className='flex justify-center'>
//                         <button className='bg-black text-white rounded-3xl mt-16 w-40 font-bold py-3'>VIEW ALL</button>
//                     </div>
//                 </div>
//             </Box>
//             <Box className="bg-black ml-36 mr-24 mt-24 bg-black p-16">
//                 <div className='w-full text-center text-4xl font-bold text-white'>RECENTLY SOLD</div>
//                 <div className='flex justify-center items-center w-full mb-16'>
//                     <div className='text-center font-500 text-white'>LANDS</div>
//                     <Divider sx={{ height: 28, m: 1, backgroundColor: "white", }} orientation="vertical" />
//                     <div className='text-center font-500 text-white'>WEARABLES</div>
//                     <Divider sx={{ height: 28, m: 1, backgroundColor: "white" }} orientation="vertical" />
//                     <div className='text-center font-500 text-white'>EMOTES</div>

//                 </div>
//                 <TableContainer component={Paper} >
//                     <Table sx={{ minWidth: 700 }} aria-label="customized table">
//                         <TableHead style={{ backgroundImage: "linear-gradient(to right, black, gray, black)" }}>
//                             <TableRow style={{ backgroundImage: "linear-gradient(to right, black, gray, black)" }}>
//                                 <StyledTableCell>ITEM</StyledTableCell>
//                                 <StyledTableCell align="right">SELLER</StyledTableCell>
//                                 <StyledTableCell align="right">BUYER</StyledTableCell>
//                                 <StyledTableCell align="right">TYPE</StyledTableCell>
//                                 <StyledTableCell align="right">TIME</StyledTableCell>
//                                 <StyledTableCell align="right">PRICE</StyledTableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {data.map((row) => (
//                                 <StyledTableRow key={row.seller}>
//                                     <StyledTableCell component="th" scope="row">
//                                         <div className='flex items-center gap-4'>
//                                             <img src={row.image} className='h-12' />
//                                             <div>
//                                                 <div className='text-2xl'>{row.d1}</div>
//                                                 <div>BY {row.d1}</div>
//                                             </div>
//                                         </div>
//                                     </StyledTableCell>
//                                     <StyledTableCell align="right">{row.seller}</StyledTableCell>
//                                     <StyledTableCell align="right">{row.buyer}</StyledTableCell>
//                                     <StyledTableCell align="right">{row.type}</StyledTableCell>
//                                     <StyledTableCell align="right">{row.time}</StyledTableCell>
//                                     <StyledTableCell align="right">{row.price}</StyledTableCell>

//                                 </StyledTableRow>
//                             ))}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//             </Box>
//             <div className='ml-36 text-5xl font-bold mt-24'>FAQ's</div>
//             <Box className="ml-36 mr-24 mt-20 mb-36">
//                 <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//                     <Grid item xs={4}>
//                         <Item sx={{ color: "white", textAlign: "center", alignItems: "center" }}>aass asd asd asdasd  das asdasd a sdas asd ?{" "}
//                             <span style={{ fontWeight: "bold" }}>+</span></Item>
//                             <Item sx={{ color: "white", textAlign: "center", alignItems: "center" }}>aass asd asd asdasd  das asdasd a sdas asd ?</Item>
//                     </Grid>
//                     <Grid item xs={4}>
//                         <Item sx={{ color: "white" }}>aass asd asd asdasd  das asdasd a sdas asd ?{" "}<span style={{ fontWeight: "bold" }}>+</span></Item>
//                     </Grid>
//                     <Grid item xs={4}>
//                         <Item sx={{ color: "white" }}>aass asd asd asdasd  das asdasd a sdas asd ?{" "}<span style={{ fontWeight: "bold" }}>+</span></Item>
//                     </Grid>
//                     <Grid item xs={4}>
//                         <Item sx={{ color: "white" }}>aass asd asd asdasd  das asdasd a sdas asd ?{" "}<span style={{ fontWeight: "bold" }}>+</span></Item>
//                     </Grid>
//                     <Grid item xs={4}>
//                         <Item sx={{ color: "white" }}>aass asd asd asdasd  das asdasd a sdas asd ?{" "}<span style={{ fontWeight: "bold" }}>+</span></Item>
//                     </Grid>
//                     <Grid item xs={4}>
//                         <Item sx={{ color: "white" }}>aass asd asd asdasd  das asdasd a sdas asd ?{" "}<span style={{ fontWeight: "bold" }}>+</span></Item>
//                     </Grid>
//                 </Grid>
//             </Box>
//             <Box className="h-[calc(1/2*100vh)] bg-black relative w-screen flex justify-center">
//                 <div className="h-[calc(2/5*100vh)] w-[calc(1/2*100vw)] absolute rounded-2xl bottom-1/3 flex items-center" style={{ backgroundImage: `url(${image3}) `, backgroundSize: 'cover', backgroundPosition: 'center' }}>
//                     <Box className='ml-4 w-3/5'>
//                         <div className='text-3xl'>GET NEWS AND UPDATES</div>
//                         <div>SIGN UP FOR THE LATEST NEWS ON  HOW WE ARE SHAPING A NEW FUTURE </div>
//                         <div className='mt-2'>
//                             <Input
//                                 id="standard-adornment-password"
//                                 placeholder='aass asd asd asdasddas?'
//                                 disableUnderline
//                                 sx={{ paddingX: "10px", backgroundColor: "transparent", border: "1px solid black", borderRadius: "20px" }}
//                                 endAdornment={
//                                     <InputAdornment position="end">
//                                         <button className='bg-black text-white py-1 px-2 rounded-2xl'>
//                                             Sign up
//                                         </button>
//                                     </InputAdornment>
//                                 }
//                             />
//                         </div>
//                     </Box>

//                 </div>
//             </Box>
//         </div>

//     );
// };

// export default MarketPlace;
