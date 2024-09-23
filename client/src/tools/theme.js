import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#D3D3D3',
        color: '#000000',
      },
      a: {
        color: '#000000',
        _hover: {
          textDecoration: 'underline',
        },
      },
      h1: {
        color: 'black',
      },
      h2: {
        color: 'black',
      },
      p: {
        color: 'black',
      },
    },
  },
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat',
  },
});

export default theme;
