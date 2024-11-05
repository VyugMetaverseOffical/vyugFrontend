import { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

// Corrected version of handleScrollAnimation
const handleScrollAnimation = (triggerElementId, imgElementId, textElementId,img2ElementId) => {
  const triggerElement = document.getElementById(triggerElementId);
// console.log(triggerElementId,imgElementId,textElementId);
  if (triggerElement) {
    const bounding = triggerElement.getBoundingClientRect();
    const triggerTop = bounding.top;

    if (triggerTop <= (0.8) * window.innerHeight) {
      if (imgElementId) {
        const imgElement = document.getElementById(imgElementId);
        if (imgElement) {
          imgElement.classList.add("animate-slide-from-left");
          imgElement.classList.add("show-text");
        }
      }
      if (img2ElementId) {
        const textElement = document.getElementById(img2ElementId);
        if (textElement) {
          textElement.classList.add("animate-slide-from-right");
          textElement.classList.add("show-text");
        }
      }
      if (textElementId) {
        const textElement = document.getElementById(textElementId);
        if (textElement) {
          textElement.classList.add("animate-slide-from-bottom");
          textElement.classList.add("show-text");
        }
      }
    }
  }
};

// Corrected version of handleTypeAnimation
const handleTypeAnimation = (triggerElementId, setAnimationTriggered) => {
  const triggerElement = document.getElementById(triggerElementId);

  if (triggerElement) {
    const bounding = triggerElement.getBoundingClientRect();
    const triggerTop = bounding.top;

    if (triggerTop <= (0.7) * window.innerHeight) {
      setAnimationTriggered(true);
    }
  }
};

const handleTextAnimation = (triggerElementId,  textElementId) => {
  const triggerElement = document.getElementById(triggerElementId);

  if (triggerElement) {
    const bounding = triggerElement.getBoundingClientRect();
    const triggerTop = bounding.top;

    if (triggerTop <=  3/4*window.innerHeight) {
     
      if (textElementId) {
        const textElement = document.getElementById(textElementId);
        if (textElement) {
          textElement.classList.add("gradient-text");
          textElement.classList.add("show-text");
        }
      }
    }
  }
};
// Default export of the functions
export { handleScrollAnimation, handleTypeAnimation,handleTextAnimation };

