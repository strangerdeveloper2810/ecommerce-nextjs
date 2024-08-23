import { NextPage } from 'next'
import RegisterPage from 'src/views/pages/register'

type NextPageProps = {}

const Login: NextPage<NextPageProps> = () => {
  return <RegisterPage />
}

export default Login
