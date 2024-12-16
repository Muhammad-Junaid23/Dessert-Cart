import { BrowserRouter, Route, Routes } from 'react-router';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import About from './components/About';
import Blogs from './components/Blogs';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: 'hsl(14, 86%, 42%)',
    },
    secondary: {
      main: 'hsl(159, 69%, 38%)',
    },
    rose: {
      50: 'hsl(20, 50%, 98%)',
      100: 'hsl(13, 31%, 94%)',
      300: 'hsl(14, 25%, 72%)',
      400: 'hsl(7, 20%, 60%)',
      500: 'hsl(12, 20%, 44%)',
      900: 'hsl(14, 65%, 9%)',
    },
  },
  typography: {
    fontFamily: "'Red Hat Text', sans-serif",
    body1: {
      fontSize: '16px',
      fontWeight: 400,
    },
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Layout />} />
          <Route path='about' element={<About />} />
          <Route path='blogs' element={<Blogs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
