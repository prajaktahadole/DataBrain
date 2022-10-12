import React from "react";
import { Box, Heading, HStack, Image, FormLabel, Input, Text, VStack, Button } from "@chakra-ui/react"
export default function Filter({ state, handleChange,setSort }) {
  return (
    <Box  className="filter">
      <VStack>
      <Text className="subhead1">Filters</Text>

      <Text className="subhead">Category</Text>
      
        <HStack>
          <Input
            type="checkbox"
            name="men"
            checked={state.men}
            onChange={(e) => handleChange(e, "men")}
          />
          <Text> Men's Clothing</Text>
        </HStack>
        <HStack>
          <Input
            type="checkbox"
            name="jewelery"
            checked={state.jewelery}
            onChange={(e) => handleChange(e, "jewelery")}
          />
          <Text > Jewelery</Text>
        </HStack>
        <HStack>
          <Input
            type="checkbox"
            name="electronics"
            checked={state.electronics}
            onChange={(e) => handleChange(e, "electronics")}
          />
          <Text > Electronics</Text>
        </HStack>
        <HStack>
          <Input
            type="checkbox"
            name="women"
            checked={state.women}
            onChange={(e) => handleChange(e, "women")}
          />
          <Text > Women's Clothing</Text>
        </HStack>
      
        
         <Text className="subhead">Sort By</Text>
          <Button  onClick={() => setSort('name')}>Name</Button>
          <Button onClick={() => setSort('price')} > Price</Button>
        
      </VStack>
    </Box>
  );
}
