import { ITabs } from '@/types';
import { create } from 'zustand'

interface IStore {
  currentTab: ITabs['name'];
  isCanvaOpen: boolean;
  isMobileSidebarOpen: boolean;
  setCurrentTab: (tab: ITabs['name']) => void;
  setIsCanvaOpen: (isOpen: boolean) => void;
  setIsMobileSidebarOpen: (isOpen: boolean) => void;
}
const useStore = create<IStore>((set) => ({
  currentTab: "Home",
  isCanvaOpen: true,
  isMobileSidebarOpen: false,
  setCurrentTab: (tab) => set({ currentTab: tab }),
  setIsCanvaOpen: (isOpen) => set({ isCanvaOpen: isOpen }),
  setIsMobileSidebarOpen: (isOpen) => set({ isMobileSidebarOpen: isOpen }),
}));

export default useStore;
