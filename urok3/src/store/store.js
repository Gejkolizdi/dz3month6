
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { devtools, persist } from 'zustand/middleware'

const countStore = create(
  persist(
    devtools(
      immer((set) => ({
        count: 0,

incrementCount: () => {
  set((state) => {
    if (state.count < 15) {
      state.count += 5
    }
  })
},

decrementCount: () => {
  set((state) => {
    if (state.count >= 5) {
      state.count -= 5
    }
  })
},

        reset: () => {
          set((state) => {
            state.count = 0
          })
        },
      }))
    ),
    {
      name: 'count-storage',
    }
  )
)

export default countStore
