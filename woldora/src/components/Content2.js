import React from 'react'
import Product from "./Product";
import Sushi from "./Sushi";
import Hamburger from "./Hamburger";
import Pizza from "./Pizza";
import Drinks from "./Drinks";
import { Link } from 'react-router-dom'

export default function Content2() {
  return (
    <>
   <Sushi/>
   <Hamburger/>
   <Pizza/>
   <Drinks/>
    </>
  )
}
