import { useEffect, useState, RefObject } from "react";
import { create } from "zustand";

type Store = {
  observed: boolean;
  setObserved: () => void;
};

const useObserve = create<Store>((set) => ({
  observed: false,
  setObserved: () => set((state: any) => ({ observed: true })),
}));

export function useIsVisible(ref: any) {
  const [isVisibleOnce, setIsVisibleOnce] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isVisibleOnce) {
        setIsVisibleOnce(true);
        observer.disconnect();
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref, isVisibleOnce]);

  return isVisibleOnce;
}
