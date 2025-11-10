import React from "react";
import { inputFieldData } from "../data/inputFieldData";
import { TextField, Box, Button, InputAdornment } from "@mui/material";
import { center } from "../styles/flexStyles";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

const InputForm = () => {
  return (
    <Box sx={{ p: 1,...center,flexDirection:'column' }}>
      {inputFieldData.map((field) => (
        <TextField
        key={field.id}
        label={field.label}
        name={field.name}
        type={field.type}
        placeholder={field.placeholder}
        required={field.required}
        multiline={field.multiline || false}
        rows={field.rows || 1}
        sx={{mb:2}}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{field.icon}</InputAdornment>
          ),
        }}
      />
      ))}
      <Button type="submit" size="large" variant="contained" endIcon={<SendRoundedIcon/>}>
        Submit
      </Button>
    </Box>
  );
};

export default InputForm;
