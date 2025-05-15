import { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Button,
  AppBar,
  Toolbar,
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/hello`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("API error:", err));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">MERN Vite + MUI</Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm" sx={{ mt: 5, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Welcome to MERN Stack (Frontend)
        </Typography>

        <Button variant="contained" color="primary" sx={{ mb: 2 }}>
          Material UI Button
        </Button>

        <Typography variant="h6" sx={{ mt: 4 }}>
          Message from Backend:
        </Typography>
        <Typography variant="body1">{message || "Loading..."}</Typography>
      </Container>
    </ThemeProvider>
  );
}

export default App;
