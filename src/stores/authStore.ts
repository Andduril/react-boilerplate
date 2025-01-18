import { User } from "@/models/User";
import { create } from "zustand";

export type AuthState = {
    token: string | null;
    user: User | null;
}

export type AuthActions = {
    login: (token: string) => void;
    logout: () => void;
}

const useAuthStore = create<AuthState & AuthActions>()((set) => ({
    token: null,
    user: null,
    login: (token: string) => set({ token }),
    logout: () => set({ token: null })
}))

export default useAuthStore;
