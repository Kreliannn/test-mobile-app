import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

// Define the shape of your store
interface UserState {
  firstName: string;
  lastName: string;
  email: string;
  setUser: (user: Partial<Omit<UserState, 'setUser' | 'clearUser'>>) => void;
  clearUser: () => void;
}

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      firstName: '',
      lastName: '',
      email: '',
      setUser: (user) => set(user),
      clearUser: () => set({ firstName: '', lastName: '', email: '' }),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useUserStore;
