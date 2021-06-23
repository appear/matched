import React, { createContext, useContext, useMemo, useState } from 'react'

import { User } from '$types/user'

const Context = createContext<{
  user: User | null
  setUser: (user: User) => void
}>({
  user: null,
  setUser: () => {},
})

interface UserContextProviderProps {
  user?: User
  children: React.ReactNode
}

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [user, setUser] = useState<User | null>(null)

  const values = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user, setUser],
  )

  return <Context.Provider value={values}>{children}</Context.Provider>
}

export function useUserContext() {
  return useContext(Context)
}
