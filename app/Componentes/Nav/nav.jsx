import styles from './navStyle.module.css'
import Image from 'next/image'

const Nav = () =>{
    return (
       
      <div className={styles.headerfixed}>          
        <div className={styles.nav}>
  
        <img className="logo" src="images/logo.png" width="20%" />
  
          <nav >
            <a className="selected" href="index.php">INICIO</a>
            <a href="sede.php">NOSOTROS</a>
            <a href="historia.php" >HISTORIA</a>
            <a href="cafes.php">CAFÉS</a>	
            <a href="tienda.php">TIENDA</a>                        
            <a href="contacto.php">CONTACTO</a>
            <a href="index.php">INICIO DE SESIÓN</a>
          </nav>
        </div>           
      </div>
    )
  
  }
  
  export default Nav
  