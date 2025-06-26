import { create } from 'zustand';

interface User {
    id: string;
    username: string;
    email: string;
    avatar_url: string;
}

interface UserState {
    user: User | null;
    isLoading: boolean;
    setUser: (user: User) => void;
    clearUser: () => void;
    setLoading: (isLoading: boolean) => void;
}

export const useUserStore = create<UserState>(set => ({
    user: null,
    isLoading: true,
    setUser: user => set({ user, isLoading: false }),
    clearUser: () => set({ user: null, isLoading: false }),
    setLoading: isLoading => set({ isLoading }),
}));
