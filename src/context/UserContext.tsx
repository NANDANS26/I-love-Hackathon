import React, { createContext, useContext, useState } from 'react';

interface UserContextType {
  user: UserData | null;
  setUser: (user: UserData | null) => void;
}

interface UserData {
  name: string;
  email: string;
  age?: number;
  address?: string;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserData | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}; 