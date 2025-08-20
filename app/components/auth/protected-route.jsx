// app/components/auth/protected-route.jsx
'use client';

import { useAuth } from '../../context/resume/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/sign-in');
    }
  }, [user, router]);

  return user ? children : null;
};

export default ProtectedRoute;