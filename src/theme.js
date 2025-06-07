// theme.ts or theme.js
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  typography: {
    fontFamily: `'Sora', sans-serif`,

    h1: {
      fontSize: '3rem', // 48px
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.25rem', // 36px
      fontWeight: 600,
    },
    h3: {
      fontSize: '2rem', // 32px
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.75rem', // 28px
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.5rem', // 24px
      fontWeight: 500,
    },
    h6: {
      fontSize: '1.25rem', // 20px
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 400,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 300,
    },
    overline: {
      fontSize: '0.7rem',
      fontWeight: 300,
      textTransform: 'uppercase',
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 500,
      textTransform: 'uppercase',
    },
  },
});

// Enable automatic scaling across screen sizes
theme = responsiveFontSizes(theme);

export default theme;
