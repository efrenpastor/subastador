import { createContext, useContext } from 'react'
import { Domain } from '../domain'

export const DomainContext = createContext(null)

export const DomainContextProvider = ({ children }) => {
  const domain = Domain.create()
  return <DomainContext.Provider value={ domain }>{children}</DomainContext.Provider>
}

export const useDomainContext = () => {
  const context = useContext(DomainContext)

  if (!context) {
    console.error('Error deploying Domain Context')
  }

  return context
}

export default useDomainContext