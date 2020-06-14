import { Box } from 'theme-ui'

export default (props) => (
  <Box
    {...props}
    sx={{
      ul: {
        listStyle: 'none',
        p: 0,
        m: 0,
        display: 'grid',
        gridGap: [3, 4],
        gridTemplateColumns: [null, 'repeat(auto-fit, minmax(384px, 1fr))']
      },
      li: {
        variant: 'cards.interactive',
        color: 'accent',
        a: {
          display: 'block'
        },
        '> a:first-of-type': {
          display: 'block',
          m: [-3, -4],
          mb: [2, 3, 4]
        }
      },
      h2: {
        fontSize: [2, 3],
        mb: 1,
        lineHeight: 'caption',
        a: {
          color: 'inherit',
          textDecoration: 'none'
        }
      },
      p: {
        my: 0
      },
      img: {
        display: 'block',
        width: '100%',
        maxWidth: '100%',
        maxHeight: 284,
        objectFit: 'cover',
        objectPosition: 'center'
      },
      ...props.sx
    }}
  />
)
