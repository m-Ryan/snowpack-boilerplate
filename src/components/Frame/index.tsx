import React, { useMemo, useState, useEffect } from 'react';
import { UserStorage } from '@/util/user-storage';
import { message } from 'antd';

export default function Frame({ children }: { children: React.ReactNode; }) {
  const [hasLogin, setHasLogin] = useState(false);

  useEffect(() => {
    UserStorage.getAccount()
      .then(() => {
        setHasLogin(true);
      })
      .catch(err => message.error(err.message));
  }, []);

  if (!hasLogin) return null;

  return (
    children
  );
}
