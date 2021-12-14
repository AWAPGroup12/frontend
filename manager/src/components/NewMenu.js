import React from 'react'
import styles from "../components/Heading.module.css";

export default function NewMenu() {
  return (
      
     <form>
     <div className={styles.res}>Add a new restaurant menu</div>    
    <div>
    <label>Menu Name</label><br></br>
     <input type="text" size='50' />
     </div>
     <div>
     <label>Description</label><br></br>
     <input type="text" size='50'/>
     </div>
     <div>
     <label>Price</label><br></br>
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
