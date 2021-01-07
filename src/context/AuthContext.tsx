/* eslint-disable @typescript-eslint/no-empty-function */
import browserHistory from 'lib/browser-history';
import React, { useContext, createContext } from 'react';
import { useLocalStorage } from 'react-use';
import { isEmpty } from 'utils/validationHelper';

const USER_KEY = '@Auth/user';
const ACCESS_TOKEN_KEY = '@Auth/accessToken';

export const getAccessToken = (): string | null => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

    if ([null, undefined, 'null', 'undefined'].includes(accessToken)) {
        return null;
    }

    try {
        return JSON.parse(accessToken as string);
    } catch (_) {
        return accessToken;
    }
};

type AuthUserProps =
    | {
          email?: string;
          username?: string;
          id?: string;
          firstName?: string;
          lastName?: string;
      }
    | null
    | undefined;

type AuthContextProps = {
    isLoggedIn: boolean;
    user: AuthUserProps;
    saveAuthData: (authData: any) => void;
    removeAuthData: () => void;
};

const AuthContext = createContext<AuthContextProps>({
    isLoggedIn: false,
    user: {},
    saveAuthData: () => {},
    removeAuthData: () => {},
});
export const useAuth = (): AuthContextProps => useContext<AuthContextProps>(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [accessToken, setAccessToken] = useLocalStorage(ACCESS_TOKEN_KEY, null, {
        raw: true,
    });
    const [user, setUser] = useLocalStorage<AuthUserProps>(USER_KEY, null);
    const isLoggedIn = !isEmpty(accessToken) && !!user;

    const saveAuthData = (authData): void => {
        setAccessToken(authData.accessToken);

        const normalizedUser: AuthUserProps = {
            username: authData?.user.userName,
            email: authData?.user.email,
            id: authData?.user.id,
            firstName: authData?.user.firstName,
            lastName: authData?.user.lastName,
        };
        setUser(normalizedUser);
    };

    const removeAuthData = (): void => {
        setAccessToken(null);
        setUser(null);
        browserHistory.push('/auth/signin');
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                user,
                saveAuthData,
                removeAuthData,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
