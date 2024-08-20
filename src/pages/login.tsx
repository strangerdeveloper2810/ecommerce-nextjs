import { NextPage } from "next";
import LoginPage from "src/views/pages/login";

type NextPageProps = {}

const Login: NextPage<NextPageProps> = () => {
    return <LoginPage />
}

export default Login;