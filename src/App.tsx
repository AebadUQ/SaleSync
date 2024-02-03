import React, { useState, useRef } from 'react';
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
        <Grid
          item
          xs={5}
          className="border border-red-500 flex justify-center items-center"
        >
          <Box className="border border-black h-4/5 w-4/5 flex flex-col items-center">
            <Box className="border border-black w-full flex flex-col items-center">
              <img src={Images?.Logo} />
              <Typography fontWeight={'bold'} mt={2} mb={1}>
                Sign In
              </Typography>
              <Typography>Please sign in to your account </Typography>
            </Box>
            <Box className="w-full">
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
                      <MailOutlined style={{ fontSize: 14 }} />
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
                <Button fullWidth color="primary" variant="contained">
                  Sign In
                </Button>
              </form>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={7} className="h-screen">
          <img src={Images?.AuthBanner} className="object-fit h-full w-full" />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
