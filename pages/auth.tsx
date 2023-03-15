import {NextPage} from "next";
import {Auth} from "@/screens/auth/Auth";

interface IAuthProps {
}

const AuthPage: NextPage<IAuthProps> = () => {
  return (
    <Auth />
  );
};
export default AuthPage