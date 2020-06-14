/** @jsx jsx */
import { Box, Heading, jsx, Styled } from 'theme-ui'

const Banner = ({ children }) => (
  <Box
    as="header"
    sx={{
      bg: 'pink',
      h1: {
        fontSize: [5, 6]
      },
      textAlign: 'center',
      py: [3, 5],
      px: 3
    }}
  >
    <Styled.h1>Anwita Scarves Co.</Styled.h1>
  </Box>
)

export default Banner
