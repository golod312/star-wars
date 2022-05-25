import React, { useState } from "react";

import { Autocomplete, Stack, TextField, InputAdornment } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

import { Card } from "./Card";

const searchFilds = ["people", "planets", "starships", "vehicles", "films", "species"]

const App = () => {
  const [category, setCategory] = useState(" ")
  const [showCard, setShowCard] = useState(false)

  const hendleSearch = () => {
    setShowCard(true)
  }

  return <div className="wrapper" >
    <Stack spacing={2} width="600px" className="app">
      <Autocomplete
        freeSolo
        size="large"
        options={searchFilds}
        renderInput={(params) => <TextField
          {...params}
          label="Search"
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <>
                <InputAdornment position="end">
                  <SearchIcon onClick={hendleSearch} style={{ cursor: "pointer" }} />
                </InputAdornment>

              </>
            )
          }}
        />}
        value={category}
        onChange={(e, value) => {
          setCategory(value)
          setShowCard(false)
        }}
      />
    </Stack>

    {showCard && category && (<Card category={category} />)}
  </div>

}

export default App;
