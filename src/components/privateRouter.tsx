import { isAuthenticate } from "@/../utils/localStorage";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const withAuth = (Component:any) => {
    const AuthenticatedComponent = () => {
        const router = useRouter();
        const [data, setData] = useState()

        useEffect(() => {
            const getUser = async () => {
                const { user } = isAuthenticate();
                if (!user ) {
                    toast.warning("bạn chưa đăng nhập")
                    return router.replace("/auth/login")
                }else if (!user.role) {
                    toast.warning("Bạn Không phải admin")
                    return router.replace("/auth/login")
                }else{
                    setData(user)
                }
                    
            };
            getUser();
        }, [router]);

        return !!data ? <Component  /> : null; // Render whatever you want while the authentication occurs
    };

    return AuthenticatedComponent;
};
export default withAuth