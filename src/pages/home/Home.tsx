import React from 'react'
import "./Home.css" 
import homeLogo from "../../assets/home.jpg"

export const Home = () => {
  return (
    <>
        <h1 className="titulo" >Home</h1>

        <img src={homeLogo} className="img" alt="Imagem Tela Inicial" />
    </>
  )
}

export default Home
