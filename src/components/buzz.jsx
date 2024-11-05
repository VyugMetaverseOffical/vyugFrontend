import React, { useRef, useEffect, useState } from 'react';
import icon from "../images/vect.svg";
import { Box } from "@mui/material";
import land from "../images/land.svg"
import wearables from "../images/wearables.svg"
import emotes from "../images/emotes.svg"
import privacy from "../images/privacy_policy.svg"
import content from "../images/content_policy.svg"
import security from "../images/security.svg"
import { useNavigate } from 'react-router-dom';
const Buzz = ({ isBuzzOpen, isTransparent, onClose }) => {
    const buzzRef = useRef(null);
    const [isOpen, setIsOpen] = useState(true);
    const [Rotated1, set1Rotated] = useState(false);
    const [Rotated2, set2Rotated] = useState(false);
    const [Rotated3, set3Rotated] = useState(false);
    const [Rotated4, set4Rotated] = useState(false);
    const navigate = useNavigate();

    const handleRotation1 = () => {
        set1Rotated(!Rotated1);
        set3Rotated(false);
        set4Rotated(false);
        set2Rotated(false);
    };
    const handleRotation2 = () => {
        set2Rotated(!Rotated2);
        set3Rotated(false);
        set4Rotated(false);
        set1Rotated(false);
    };
    const handleRotation3 = () => {
        set3Rotated(!Rotated3);
        set2Rotated(false);
        set4Rotated(false);
        set1Rotated(false);
    };
    const handleRotation4 = () => {
        set4Rotated(!Rotated4);
        set3Rotated(false);
        set2Rotated(false);
        set1Rotated(false);
    };

    useEffect(() => {
        setIsOpen(isBuzzOpen);
    }, [isBuzzOpen]);


    useEffect(() => {
        const handleHoverOutside = (event) => {
            if (buzzRef.current && !buzzRef.current.contains(event.target)) {
                setIsOpen(false);
                onClose();
            }
        };
        document.addEventListener("mouseover", handleHoverOutside);
        return () => {
            document.removeEventListener("mouseover", handleHoverOutside);
        };
    }, []);


    return (
        <>
            {isOpen && (
                <div ref={buzzRef} style={{ opacity: '0.8', zIndex: "1000" }} className='bg-black top-32 fixed h-3/5 w-screen  '  >
                    <div className="flex ml-28 mt-24">
                        <Box className="w-1/3">
                            <div className=' text-white  flex items-center'>

                                <div className='ml-2 cursor-pointer' onMouseOver={handleRotation1}>ANNOUNCEMENTS</div>
                                <img src={icon} className='h-2 ml-2' style={{
                                    transition: 'transform 0.3s',
                                    transform: Rotated1 ? 'rotate(-90deg)' : 'rotate(0deg)'
                                }} />
                            </div>
                            <div className='mt-5 text-white flex items-center'>

                                <div className='ml-2 cursor-pointer' onMouseOver={handleRotation2}>
                                    EVENTS
                                </div>
                                <img
                                    src={icon}
                                    className='h-2 ml-2 '
                                    style={{
                                        transition: 'transform 0.3s',
                                        transform: Rotated2 ? 'rotate(-90deg)' : 'rotate(0deg)',
                                    }}

                                />
                            </div>

                            <div className='mt-5 text-white flex items-center'>

                                <div className='ml-2 cursor-pointer' onMouseOver={handleRotation3}>
                                    PR / NEWS
                                </div>
                                <img
                                    src={icon}
                                    className='h-2 ml-2 '
                                    style={{
                                        transition: 'transform 0.3s',
                                        transform: Rotated3 ? 'rotate(-90deg)' : 'rotate(0deg)',
                                    }}

                                />
                            </div>



                            <div className='mt-5 text-white flex items-center'>

                                <div className='ml-2 cursor-pointer' onMouseOver={handleRotation4}>
                                    BLOGS
                                </div>
                                <img
                                    src={icon}
                                    className='h-2 ml-2 '
                                    style={{
                                        transition: 'transform 0.3s',
                                        transform: Rotated4 ? 'rotate(-90deg)' : 'rotate(0deg)',
                                    }}

                                />
                            </div>
                        </Box>
                        <div className="h-[100px] min-h-full w-px bg-gradient-to-tr from-transparent via-white to-transparent opacity-25 dark:via-neutral-400 "></div>
                        {Rotated1 ?
                            (
                                <Box className="w-2/5 ml-20 items-center text-white flex justify-center text-xl">

                                    Coming Soon
                                </Box>
                            ) : (Rotated2 ?
                                (
                                    <Box className="w-2/5 ml-20 items-center text-white flex justify-center text-xl">

                                        Coming Soon
                                    </Box>
                                ) : (Rotated3 ?
                                    (
                                        <Box className="w-2/5 ml-20 items-center text-white flex justify-center text-xl">

                                            Coming Soon
                                        </Box>
                                    ) : (Rotated4 ?
                                        (
                                            <Box className="w-2/5 ml-20 items-center text-white flex justify-center text-xl">

                                                Coming Soon
                                            </Box>
                                        ) : (
                                            <></>
                                        )
                                    )
                                )
                            )}
                    </div>
                </div>
            )}

        </>
    );
}
export default Buzz;