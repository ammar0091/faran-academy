import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#005baa' },
    secondary: { main: '#ffd43b' },
    background: { default: '#f5f7fa' },
  },
  typography: {
    fontFamily: "'Montserrat', 'Roboto', 'Segoe UI', sans-serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
  }
});
export default theme;
