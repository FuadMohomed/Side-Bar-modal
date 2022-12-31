import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import {useGlobalContext } from './context'

const Home = () => {
  const {showModal,sideBarOpen } = useGlobalContext()

  return <main>
    <button className='sidebar-toggle' onClick={sideBarOpen}>
      <FaBars/>
    </button>
    <button onClick={showModal} className='btn'> show modal</button>
  </main>
}

export default Home
