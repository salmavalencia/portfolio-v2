import { create } from "zustand";

type Store = {
    isOpen: boolean;
    toggle: () => void;
    close: () => void;
};

export const useStore = create<Store>((set) => ({
    isOpen: false,
    toggle: () => set((state: any) => ({ isOpen: !state.isOpen })),
    close: () => set({ isOpen: false }),
}));
