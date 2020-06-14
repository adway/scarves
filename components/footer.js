import { Container, Text, Box } from 'theme-ui'
import Link from 'next/link'

export default () => (
  <Box
    as="footer"
    sx={{
      bg: 'smoke',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      py: 4,
      mt: 5,
      a: { color: 'primary' }
    }}
  >
    <Text>All scarves and designs by Anwita.</Text>
  </Box>
)
