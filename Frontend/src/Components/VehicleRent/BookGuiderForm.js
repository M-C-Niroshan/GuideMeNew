import React from "react";
import { TextField, Button, Grid, Box } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Checkbox from "@mui/material/Checkbox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import "./BookGuiderForm.css";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const top100Films = [
  { title: "Sinhala" },
  { title: "English" },
  { title: "Tamil" },
  { title: "Korean" },
  { title: "Japanese" },
  { title: "Spanish" },
  { title: "Mandarin" },
  { title: "Arabic" },
  { title: "Portuguese" },
  { title: "Russian" },
];

const BookGuiderForm = () => {
  return (
    <div className="Form">
      <Box
        sx={{
          p: 2,
          bgcolor: "background.paper",
          borderRadius: 5,
          boxShadow: 5,
          display: "flex",
          justifyContent: "center",
          width: "100%",
          maxWidth: "800px", // Ensure the max width is consistent
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "8px",
            }}
          >
            <Autocomplete
              multiple
              id="checkboxes-tags-demo"
              options={top100Films}
              disableCloseOnSelect
              getOptionLabel={(option) => option.title}
              renderOption={(props, option, { selected }) => {
                const { key, ...optionProps } = props;
                return (
                  <li key={key} {...optionProps}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.title}
                  </li>
                );
              }}
              sx={{ width: "100%" }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select Native Language"
                  placeholder="Select Language"
                />
              )}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "8px",
            }}
          >
            <Button
              variant="contained"
              sx={{
                bgcolor: "#0056b3",
                width: "100%",
                "&:hover": {
                  bgcolor: "#063f7c",
                },
              }}
            >
              Find a Vehicle
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default BookGuiderForm;
