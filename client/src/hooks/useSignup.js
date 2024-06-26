import { useState } from 'react';
import toast from 'react-hot-toast';
import { json } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const useSignup = () => {
  const [loading, setLoading] = useState(false);

  const { setAuthUser } = useAuthContext();

  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    setLoading(true);
    try {
      const res = await fetch(
        import.meta.env.VITE_SERVER_DOMAIN + '/api/auth/signup',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({
            fullName,
            username,
            password,
            confirmPassword,
            gender,
          }),
        }
      );

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem('chat-user', JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};

export default useSignup;
