import React, { useState, useContext } from 'react'

const AppContext = React.createContext();


const AppProvider = ({children}) => {
const [showModal,setShowModal] = useState(false)
const [sideBarOPen, setSideBarOpen] = useState(false)    

const openSideBar = () => {
 setSideBarOpen(true)
}

const closeSideBar = () => {
setSideBarOpen(false)
}
const openModal = () => {
 setShowModal(true)
}

const closeModal = () => {
setShowModal(false)
}

return <AppContext.Provider 
 value={showModal,
    sideBarOPen,
    openSideBar,
    closeSideBar,
    openModal,
    closeModal}>
        {children}
</AppContext.Provider>
}

export const useGlobalContext = () => {
return useContext(AppContext)
}

export {AppContext, AppProvider}