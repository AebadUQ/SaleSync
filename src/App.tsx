import { useState, useRef } from 'react';
import { Divider, useTheme } from '@mui/material';
import {
  Box,
  Grid,
  Typography,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  IconButton,
  Button,
} from '@mui/material';
import { Images } from './assets/index';
import { useForm } from 'react-hook-form';
import {
  EyeOutlined,
  EyeInvisibleOutlined,
  MailOutlined,
} from '@ant-design/icons';
import togglePasswordVisibility from './utils/helpers/passwordVisibilityToggle';
import './App.css';
type FormData = {
  email: string;
  password: string;
};
const App = () => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <>
      <Grid container>
        <Grid item sm={12} md={5} className=" flex justify-center items-center">
          <Box className=" w-4/5 flex flex-col items-center">
            <Box className=" w-full flex flex-col items-center">
              <img src={Images?.Logo} />
              <Typography fontWeight={'bold'} mt={2} mb={1} variant="h1">
                Sign In
              </Typography>
              <Typography variant="h4">
                Please sign in to your account{' '}
              </Typography>
            </Box>
            <Box className="w-full mt-10">
              <form onSubmit={onSubmit}>
                <InputLabel>
                  Email Address <span className="text-red-500">*</span>
                </InputLabel>
                <OutlinedInput
                  id="email-login"
                  type="email"
                  placeholder="Enter email address"
                  fullWidth
                  {...register('email')}
                  endAdornment={
                    <InputAdornment position="end">
                      <MailOutlined
                        style={{
                          fontSize: 14,
                          color: theme.palette.primary.main,
                        }}
                      />
                    </InputAdornment>
                  }
                />
                <InputLabel>
                  Password <span className="text-red-500">*</span>
                </InputLabel>
                <OutlinedInput
                  id="password-login"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter Password"
                  fullWidth
                  inputRef={passwordInputRef}
                  {...register('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() =>
                          togglePasswordVisibility(
                            passwordInputRef,
                            setShowPassword
                          )
                        }
                        edge="end"
                        aria-label="toggle password visibility"
                      >
                        {showPassword ? (
                          <EyeOutlined style={{ fontSize: 18 }} />
                        ) : (
                          <EyeInvisibleOutlined style={{ fontSize: 18 }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <Typography
                  variant="h6"
                  color="primary"
                  className="text-right cursor-pointer"
                >
                  Forgot password?{' '}
                </Typography>
                <Button
                  fullWidth
                  color="primary"
                  variant="contained"
                  className="mt-3"
                >
                  Sign In
                </Button>
                <Grid
                  container
                  flexDirection={'row'}
                  justifyContent={'center'}
                  sx={{ mt: 1, mb: 2 }}
                >
                  <Typography variant="h3" className="text-center">
                    Don't have an account?
                  </Typography>
                  <Typography
                    variant="h3"
                    className="text-center font-semibold"
                    color={'primary'}
                  >
                    Sign Up
                  </Typography>
                </Grid>
                <Divider textAlign="center">Or</Divider>
                <Grid container spacing={2} sx={{ mt: 1 }}>
                  <Grid item xs={6}>
                    <IconButton className="bg-[#f5f7f9] rounded-none w-full text-black">
                      <img
                        src={Images?.Google}
                        width={22}
                        height={22}
                        className="mr-1"
                      />{' '}
                      Continue with Google
                    </IconButton>
                  </Grid>
                  <Grid item xs={6}>
                    <IconButton className="bg-[#f5f7f9] rounded-none w-full text-black">
                      <img
                        src={Images?.Facebook}
                        width={22}
                        height={22}
                        className="mr-1"
                      />{' '}
                      Continue with Facebook
                    </IconButton>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Box>
        </Grid>
        <Grid item sm={0} md={7}>
          <img src={Images?.AuthBanner} className="object-cover w-full " />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
