import React, {useState,useEffect,useRef} from 'react';
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

const StyledSlider = styled(Slider)`
color: #20b2aa;

:hover {
  color: #2e8b57;
}

& .MuiSlider-thumb {
  border-radius: 4px;
}
`;  

const PriceController = () => {

  // Our States
  const [value, setValue] = useState([10000, 100000]);


  // Changing State when range changes
  let minValue = 10000
  const rangeSelector = (event, newValue) => {
    // If the left handle (newValue[0]) is less than the minValue, prevent it from going below minValue
    if (newValue[0] < minValue) {
      setValue([minValue, newValue[1]]);
      return;
    }
    setValue(newValue);
  };

  return (
    <div className="mx-auto block w-fit-content">
      <h3 className="text-lg font-bold mb-2">How to create Price Range Selector in ReactJS?</h3>
      <div className="mb-4">
        <label htmlFor="range-slider" className="block text-sm font-medium text-gray-700">
          Select Price Range:
        </label>
        <div >
        <StyledSlider
          id="range-slider"
          value={value}
          onChange={rangeSelector}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          step={1}
          min={0}
          max={100000}  
        />
        </div>
      </div>
    </div>
  );
};

export default PriceController;
