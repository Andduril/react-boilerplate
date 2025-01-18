import { create } from "zustand"

export type CountState = {
    count: number;
}

export type CountActions = {
    increment: () => void;
    decrement: () => void;
    reset: () => void;
}

const useCountStore = create<CountState & CountActions>()((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 })
}))

export default useCountStore;
