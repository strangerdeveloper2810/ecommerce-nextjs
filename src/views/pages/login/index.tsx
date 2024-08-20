import React, { useState } from 'react'
import { NextPage } from 'next'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {
    Button,
    FormControlLabel,
    Checkbox,
    Link,
    Grid,
    Box,
    Typography,
    Container,
    InputAdornment,
    IconButton
} from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { validationSchema } from './validationSchema'
import CustomeTextField from 'src/components/text-field'
import CustomIcon from 'src/components/Icon'

type NextPageProps = {}

interface LoginInputProps {
    email: string
    password: string
}

const LoginPage: NextPage<NextPageProps> = () => {
    const [showPassword, setShowPassword] = useState(false);
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
        <Container component='main' maxWidth='xs'>
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
                                    label='Email *'
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
                                    label='Password *'
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
                                                <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
                                                    {
                                                        showPassword ? (
                                                            <CustomIcon icon="material-symbols:visibility-outline" />) : (
                                                            <CustomIcon icon="ic:outline-visibility-off" />
                                                        )
                                                    }
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            )}
                            name='password'
                        />

                    </Box>

                    <FormControlLabel control={<Checkbox value='remember' color='primary' />} label='Remember me' />
                    <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href='#' variant='body2'>
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href='#' variant='body2'>
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Container>
    )
}

export default LoginPage
