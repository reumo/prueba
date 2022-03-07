
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useUserViewModel } from '../controller/userViewModel';
import { useUserStoreImplementation } from '../data/userStoreImplementation';
import { useNavigate } from 'react-router-dom';
import { UserViewIds } from './UserTestIds';
import Spinner from '../../shared/ui/Spinnner/Spinner';
import { Alert, Stack } from '@mui/material';


function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export type ErrorFieldType = {
  error: boolean;
  errorMessage?: string;
}

function UserView(): React.ReactElement {
  const [errorEmail, setErrorEmail] = React.useState<ErrorFieldType>({ error: false });
  const [errorPassword, setErrorPassword] = React.useState<ErrorFieldType>({ error: false });
  const [spinnerShow, setSpinnerShow] = React.useState<boolean>(false);
  const navigate = useNavigate();
  const userStore = useUserStoreImplementation();

  const {
    email,
    invalidLogin,
    login,
  } = useUserViewModel(userStore);

  React.useEffect(() => {
    if (email) navigate("/users");
  }, [email])

  React.useEffect(() => {
    console.log('showSpinner', spinnerShow)
  }, [spinnerShow])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorEmail({ error: false })
    setErrorPassword({ error: false })
    console.log('show spinner')
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const email = data.get('email')?.toString() ? data.get('email')?.toString() : '';
    const password = data.get('password')?.toString() ? data.get('password')?.toString() : '';

    if (!email) {
      setErrorEmail(
        {
          error: true,
          errorMessage: 'Empty field'
        }
      )
    }
    if (!password) {
      setErrorPassword(
        {
          error: true,
          errorMessage: 'Empty field'
        }
      )
    }
    if (errorEmail.error && errorPassword.error) return;


    setSpinnerShow(true);
    if (email && password) {
      login(email, password);

    }
    setSpinnerShow(false);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                error={errorEmail.error}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                helperText={errorEmail?.errorMessage}
                type="email"
                inputProps={{
                  'data-testid': UserViewIds.EMAIL_FIELD
                }}
              />
              <TextField
                error={errorPassword.error}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                helperText={errorPassword?.errorMessage}
                inputProps={{
                  'data-testid': UserViewIds.PASSWORD_FIELD
                }}
              />
              {
                invalidLogin && <Stack sx={{ width: '100%' }} spacing={2}>
                  <Alert severity="error">Invalid credentials</Alert>
                </Stack>
              }
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                data-testid="submit"
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
      <Spinner show={spinnerShow} />
    </>
  );
};

export default UserView;
