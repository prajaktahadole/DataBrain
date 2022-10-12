import React from 'react';
import { Box, Image, Text } from "@chakra-ui/react"
export default function Card({id, title, price, description, image, }) {
  return (
    <Box className="Card">
      <Text fontSize='3xl'>{title}</Text>
        <Image src={image} alt="" className='prodImg' />
        <Text>
         {description.length > 100 ? description.slice(0,110)+'...' : description}
        </Text>
        <Text>{price}</Text>
      </Box>
  )
}
