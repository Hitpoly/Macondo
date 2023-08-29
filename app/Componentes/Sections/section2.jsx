import styles from '../Sections/section2.module.css'
import Image from 'next/image'

const Nav = () =>{
    return (
       
      <div >  

<div className={styles.secbanner} >
        <h6>Producción premium:</h6>       
        <h5>EL CAFÉ COLOMBIANO</h5>
        <h5>QUE EMOCIONA A EUROPA Y AL MUNDO.</h5>
        <h6>Café de alta calidad con puntaje de <span className={styles.negrita}>84 en la escala (SCA).</span></h6>               
        <button className={styles.buttonhome}>ENCUENTRA UN LUGAR CERCA</button>
        
        </div>

      
        </div>
    )
  
  }
  
  export default Nav
  