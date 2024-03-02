import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import "./DropdownMenu.css";

const DropdownMenu = () => {
  return (
    <div className="dropdown-menu">
      <FormControl
        className="dropdown-menu1"
        variant="outlined"
        sx={{
          borderRadius: "0px 0px 0px 0px",
          width: "366px",
          height: "32px",
          m: 0,
          p: 0,
          "& .MuiInputBase-root": {
            m: 0,
            p: 0,
            minHeight: "32px",
            justifyContent: "center",
            display: "inline-flex",
          },
          "& .MuiInputLabel-root": {
            m: 0,
            p: 0,
            minHeight: "32px",
            display: "inline-flex",
          },
          "& .MuiMenuItem-root": {
            m: 0,
            p: 0,
            height: "32px",
            display: "inline-flex",
          },
          "& .MuiSelect-select": {
            m: 0,
            p: 0,
            height: "32px",
            alignItems: "center",
            display: "inline-flex",
          },
          "& .MuiInput-input": { m: 0, p: 0 },
          "& .MuiInputBase-input": { textAlign: "left", p: "0 !important" },
        }}
      >
        <InputLabel color="success" />
        <Select color="success" disableUnderline displayEmpty>
          <MenuItem value="Balanced">Balanced</MenuItem>
          <MenuItem value="High-Fibre">High-Fibre</MenuItem>
          <MenuItem value="Low-Carb">Low-Carb</MenuItem>
          <MenuItem value="Keto">Keto</MenuItem>
          <MenuItem value="Vegetarian">Vegetarian</MenuItem>
          <MenuItem value="Vegan">Vegan</MenuItem>
          <MenuItem value="Paleo">Paleo</MenuItem>
          <MenuItem value="Gluten-Free">Gluten-Free</MenuItem>
          <MenuItem value="Dairy-Free">Dairy-Free</MenuItem>
        </Select>
        <FormHelperText />
      </FormControl>
    </div>
  );
};

export default DropdownMenu;
