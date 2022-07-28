import { Outlet, outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useRefreshToken } from './useRefreshToken';
import { useAuth} from './AuthProvider';


// add persistLogin in App.js to enable restriction
// for the same functionality we used RequireAuth.
// We may need to get rid of RequireAuth and use PersistLogin instead
const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState();
    const refresh = useRefreshToken();
    const { auth } = useAuth();

    useEffect(()=> {
        const verifyRefreshToken = async () => {
            try {
                await refresh();
            }
            catch (err) {
                console.error(err);
            }
            finally {
                setIsLoading(false);
            }
        }

        !auth.accessToken ? verifyRefreshToken() : setIsLoading(false);
    }, []);

    return (
        <>
            {isLoading ? <p>Loading...</p> : <Outlet/> }
        </>
    )
}

export default PersistLogin;
