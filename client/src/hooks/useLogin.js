import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';
import { useState } from 'react';

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async ({ username, password }) => {
    setLoading(true);
    try {
      const res = await fetch(
        import.meta.env.VITE_SERVER_DOMAIN + '/api/auth/login',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({ username, password }),
        }
      );

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem('chat-user', JSON.stringify(data));
      setAuthUser(data);
      toast.success('User Logged in Successfully');
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
};

export default useLogin;
