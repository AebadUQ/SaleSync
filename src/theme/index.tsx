import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { blue, red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#525CEB',
    },
    secondary: {
      main: '#3D3B40',
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&.MuiButton-root': {
            backgroundColor: '#525CEB',
            transition: 'background-color 0.3s',
            '&:hover': {
              backgroundColor: '#3D3B40',
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
          },
        },
      ],
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: '40px',
          fontSize: '14px',
          margin: '4px 0px',
          backgroundColor: '#f5f7f9',
          boxShadow: 'none',
          border: '1px solid #f5f7f9',

          '&:hover .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #C8C8C8	',
          },
          '&.Mui-focused': {
            boxShadow: red[600],
            '& .MuiOutlinedInput-notchedOutline': {
              border: `1px solid #B0B0B0	`,
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '14px',
          color: 'black',
          margin: '4px 0px',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#525CEB',
          fontSize: '14px',
          
        },
      },
    },
  },

  typography: {
    h1: {
      fontSize: '22px',
      fontWeight: 1100,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontSize: '14px',
    },

    h4: {
      fontSize: '14px',
      color: 'black',
      fontWeight: 500,
    },

    h5: {
      fontSize: '12px',
      color: 'black',
      fontWeight: 500,
    },
    h6: {
      fontSize: '12px',
      fontWeight: 500,
      textDecoration: 'underline',
      color: '#525CEB',
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
