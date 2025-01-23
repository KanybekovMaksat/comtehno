import { BrowserRouter } from './router';
import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { QueryClientProvider as TanStackQueryClientProvider } from '@tanstack/react-query';
import '../index.css';
import { queryClient } from '~shared/lib/react-query/react-query.lib';
import { ToastContainer } from 'react-toastify';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat',
  },
});

function App() {
  return (
    <>
      <TanStackQueryClientProvider client={queryClient}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <ToastContainer
              position="top-right"
              autoClose={1500}
              hideProgressBar
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
            <BrowserRouter />
          </ThemeProvider>
        </StyledEngineProvider>
      </TanStackQueryClientProvider>
    </>
  );
}

export default App;
