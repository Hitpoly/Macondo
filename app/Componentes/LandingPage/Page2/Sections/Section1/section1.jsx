import styles from './section1.module.css'
import Image from 'next/image'

const Nav = () =>{
    return (
       
      <div >  

      <div className={styles.banner} >
   <a href="cafes.php?id=7"><div className={styles.taza}></div></a>
        <h6><span className={styles.oscuro}>Delicadamente irresistible</span></h6>
        <h5><span className={styles.oscuro}>DESCUBRE LA</span> SENSIBILIDAD</h5>
        <h5><span className={styles.oscuro}>DEL CAFÉ ORIGEN DEL QUINDÍO,</span></h5>
        <h5><span className={styles.oscuro}>COLOMBIA</span></h5>
        <div className={styles.btncontenedor}>
        <button className={styles.button} >REGÍSTRATE</button>
        <button className={styles.button2}>CONTÁCTANOS</button>
        </div>
        
        </div>
        </div>
    )
  
  }
  
  export default Nav
  