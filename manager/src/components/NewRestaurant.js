import React from 'react'
import styles from "../components/Heading.module.css"


export default function NewRestaurant() {
  return (
  
    <form>
   <div>
   <div className={styles.res}>Create a new restaurant</div>
   <label>Restaurant name</label><br></br>
    <input type="text" size='50' />
    </div>

    <div>
    <label>Restaurant operating hours</label><br></br>
    <input type="text" size='50'/>
    </div>

    <div>
    <label>Restaurant address</label><br></br>
    <input type="text" size='50'/>
    </div>

    <div>
    <label>Restaurant type</label><br></br>
    <input type="text" size='50'/>
    </div>

    <div>
    <label>Price level</label><br></br>
    <input type="number"size='50'/>
    <div>
    <label>Upload image</label><br></br>
    <input type="file"size='50' />

    <input type="submit" value="Submit"/>
   </div>
   </div>
   </form>
  

    
    
  )
}
