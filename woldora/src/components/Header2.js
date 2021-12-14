import React from 'react'
import { icons } from 'react-icons'
import { Link } from 'react-router-dom'
import styles from "../components/Header2.module.css"
import { AiOutlineArrowRight} from "react-icons/ai"
import  { FiChevronsRight } from "react-icons/fi"

export default function Header2() {
  return (


    <div className={styles.btn} >

      <ul className={styles.buttons}>
        <div className={styles.button}> <Link to="/Header2/Sushi">Sushi</Link>  <AiOutlineArrowRight /> </div>
      </ul>
    </div>
  )
}
