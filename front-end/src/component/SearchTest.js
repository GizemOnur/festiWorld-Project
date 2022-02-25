import React, { useState, useEffect } from 'react';
import TextField from "@mui/material/TextField";
import { Stack } from '@mui/material';
import { Autocomplete } from '@mui/material';
import { Box } from '@mui/system';


function SearchTest() {

  // Make the API Call with useState and useEffect//

  const [jsonResults, setJsonResults] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8001/api/festivals/")
      .then((response) => response.json())
      .then((json) => setJsonResults(json))
  }, []);
  console.log(jsonResults);


  return (

    <Stack sx={{ width: 300, margin: "auto" }}>
      <Autocomplete
        id="input_demo"
        getOptionLabel={(jsonResults) => `${jsonResults.location} ${jsonResults.location}`}
        options={jsonResults}
        sx={{ width: 300 }}
        isOptionEqualToValue={(option, value) =>
          option.location === value.location
        }
        noOptionsText={"No available data"}
        renderOption={(props, jsonResults) => (
          <Box component="li" {...props} key={jsonResults.id}>
            {jsonResults.location} {jsonResults.location}
          </Box>
        )}
        renderInput={(params) => <TextField {...params} label="Select you location" />}
      />

    </Stack>

  )
}

export default SearchTest;