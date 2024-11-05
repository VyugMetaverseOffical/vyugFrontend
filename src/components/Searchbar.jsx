import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";

const Searchbar = ({
  searchQuery,
  placeholder,
  onSearch,
  InputProps,
  ...rest
}) => {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };
  return (
    <div className="searchbar">
      <TextField
        type={"search"}
        id={"searchText"}
        size="small"
        placeholder={placeholder}
        value={searchQuery}
        fullWidth
        onChange={handleChange}
        sx={{
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "transparent",
            },
            ":not(.Mui-focused) fieldset": {
              borderColor: "transparent",
            },
            "&:hover fieldset": {
              borderColor: "transparent",
            },
          },
          "& .MuiInputBase-root": {
            fontFamily: '"Montserrat", sans-serif',
            fontWeight: 500,
            fontSize: "16px",
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment className="me-4" position="end">
              <SearchIcon
                sx={{
                  borderRadius: "50%",
                  padding: "5px",
                  fontSize: "34px",
                  background: "#ffffff",
                }}
              />
              <TuneRoundedIcon className="logoheader ml-3" />
            </InputAdornment>
          ),
          ...InputProps,
        }}
        {...rest}
      />
    </div>
  );
};

export default Searchbar;
