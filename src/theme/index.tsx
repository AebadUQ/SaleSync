import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&.MuiButton-root': {
            backgroundColor: 'red',
            transition: 'background-color 0.3s',
            '&:hover': {
              backgroundColor: 'blue',
            },
          },
        },
      },
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            backgroundColor: '#FF5733',
            textTransform: 'none',
            border: '2px dashed red',
          },
        },
      ],
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: '40px',
          border: '1px solid #f5f7f9',
          fontSize: '14px',
          color: 'white',
          backgroundColor: '#FF5733',
        },
      },
    },
  },

  typography: {
    h1: {
      fontSize: '50px',
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
  },
});

function ThemeCustomization({ children }: any) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default ThemeCustomization;
