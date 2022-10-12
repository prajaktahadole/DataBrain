import { Box,  Input } from "@chakra-ui/react";
import { SearchIcon} from '@chakra-ui/icons'
import React from "react";

export default function Search({setSearch,search}) {
  return (
    <Box className="Search">
      <Input className="inpsearch" type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value) }/>
      <SearchIcon ></SearchIcon>
    </Box>
  );
}
