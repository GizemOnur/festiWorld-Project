import React, { useState, useEffect } from 'react';
import TextField from "@mui/material/TextField";
import { Stack } from '@mui/material';
import { Autocomplete } from '@mui/material';
import { Box } from '@mui/system';


function SearchMusic() {

  // Make the API Call with useState and useEffect//

  const [jsonResults, setJsonResults] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8001/api/festivals/")
      .then((response) => response.json())
      .then((json) => setJsonResults(json))
  }, []);
  console.log(jsonResults);


  return (

    <Stack sx={{ width: 250, margin: "auto" }}>
      <Autocomplete
        id="input_demo"
        getOptionLabel={(jsonResults) => `${jsonResults.location} ${jsonResults.artists}`}
        options={jsonResults}
        sx={{ width: 250 }}
        isOptionEqualToValue={(option, value) =>
          option.artists === value.artists
        }
        noOptionsText={"No available data"}
        renderOption={(props, jsonResults) => (
          <Box component="li" {...props} key={jsonResults.id}>
            {jsonResults.artists} {jsonResults.artists}
          </Box>
        )}
        renderInput={(params) => <TextField {...params} label="Select music type" />}
      />

    </Stack>

  )
}

export default SearchMusic;