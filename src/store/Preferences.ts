import {create} from 'zustand'

type PreferencesProps = {
  soundEnabled: boolean
  setSound: () => void
}

export const usePreferences = create<PreferencesProps>((set, get) => ({
  soundEnabled: true,
  setSound: () => set({ soundEnabled:  !get().soundEnabled }),
}))