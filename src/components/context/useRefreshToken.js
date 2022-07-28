import axios from 'axios';
import { useAuth } from './AuthProvider';

const useRefreshToken = () => {
    const { setAuth } = useAuth();
    const refresh = async () => {
        // axios.get(/refresh...) needs to be changed according to the path in the backend
        // http://localhost:8080/refresh
        const response = await axios.get('/refresh', {
            withCredentials: true
        });
        setAuth(prev => {
            console.log(JSON.stringify(prev));
            //This variable may not be accessToken, depends on the name of the variable we
            //send from the backend
            console.log(response.data.accessToken);
            return { ...prev, accessToken: response.data.accessToken }
        });
        return response.data.accessToken;
    }
    return refresh
};

export default useRefreshToken;