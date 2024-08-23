import React, { useState } from 'react'
import { NextPage } from 'next'
import Image from 'next/image'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  Button,
  FormControlLabel,
  Checkbox,
  Link,
  Box,
  Typography,
  InputAdornment,
  IconButton,
  CssBaseline
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { validationSchema } from './validationSchema'
import CustomeTextField from 'src/components/text-field'
import CustomIcon from 'src/components/Icon'
import LoginDark from '/public/images/login-dark.png'
import LoginLight from '/public/images/login-light.png'

type NextPageProps = {}

interface LoginInputProps {
  email: string
  password: string
}

const LoginPage: NextPage<NextPageProps> = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [isRemember, setIsRemember] = useState(true)

  const theme = useTheme()
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginInputProps>({
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'onBlur',
    resolver: yupResolver(validationSchema)
  })

  const onSubmit = (data: LoginInputProps) => {
    console.log({ data })
  }
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        alignItems: 'center',
        padding: '40px'
      }}
    >
      <Box
        display={{
          xs: 'none',
          md: 'flex',
          sm: 'flex'
        }}
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '20px',
          backgroundColor: theme.palette.customColors.bodyBg,
          height: '100%',
          minWidth: '50vw'
        }}
      >
        <Image
          src={LoginLight}
          alt='login image'
          style={{
            width: 'auto',
            height: 'auto'
          }}
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
            <Box sx={{ mt: 2 }}>
              <Controller
                control={control}
                rules={{
                  required: true
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <CustomeTextField
                    required
                    fullWidth
                    label='Email'
                    placeholder='Please enter your email!'
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={Boolean(errors.email)}
                    helperText={errors?.email?.message}
                  />
                )}
                name='email'
              />
            </Box>

            <Box sx={{ mt: 2 }}>
              <Controller
                control={control}
                rules={{
                  required: true
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <CustomeTextField
                    required
                    fullWidth
                    label='Password'
                    placeholder='Please enter your password!'
                    type={showPassword ? 'text' : 'password'}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={Boolean(errors.password)}
                    helperText={errors?.password?.message}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton edge='end' onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? (
                              <CustomIcon icon='material-symbols:visibility-outline' />
                            ) : (
                              <CustomIcon icon='ic:outline-visibility-off' />
                            )}
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />
                )}
                name='password'
              />
            </Box>

            <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <FormControlLabel
                control={
                  <Checkbox
                    value='remember'
                    name='remember'
                    onChange={event => setIsRemember(event.target.checked)}
                    color='primary'
                  />
                }
                label='Remember me'
              />
              <Link href='#' variant='body2'>
                Forgot password?
              </Link>
            </Box>

            <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
              <Typography>{"Don't have an account?"}</Typography>
              <Link href='/register' variant='body2'>
                {'Sign Up'}
              </Link>
            </Box>
            <Typography sx={{ textAlign: 'center', mt: 2, mb: 2 }}>Or</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              <IconButton sx={{ color: '#497ce2' }}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                  role='img'
                  font-size='1.375rem'
                  className='iconify iconify--mdi'
                  width='1em'
                  height='1em'
                  viewBox='0 0 24 24'
                >
                  <path
                    fill='currentColor'
                    d='M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z'
                  ></path>
                </svg>
              </IconButton>

              <IconButton sx={{ color: theme.palette.error.main }}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                  role='img'
                  font-size='1.375rem'
                  className='iconify iconify--mdi'
                  width='1em'
                  height='1em'
                  viewBox='0 0 24 24'
                >
                  <path
                    fill='currentColor'
                    d='M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27c3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10c5.35 0 9.25-3.67 9.25-9.09c0-1.15-.15-1.81-.15-1.81Z'
                  ></path>
                </svg>
              </IconButton>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  )
}

export default LoginPage
