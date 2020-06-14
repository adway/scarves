import { Container, Avatar, Box, NavLink } from 'theme-ui'
import Link from 'next/link'

export default () => (
  <Box
    as="header"
    sx={{
      display: 'flex',
      alignItems: 'center',
      bg: 'pink',
      px: 3,
      py: 3,
      'a + a': { mx: [2, 3] }
    }}
  >
    <Container
      sx={{
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Avatar size={48} sx={{ mr: 3 }} src="/anwita.png" />
      <Box sx={{ mx: 'auto' }} />
      <Link href="/about" passHref>
        <NavLink>About Us</NavLink>
      </Link>
    </Container>
  </Box>
)
