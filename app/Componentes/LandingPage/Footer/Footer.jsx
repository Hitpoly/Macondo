import styles from './footer.module.css'
import Image from 'next/image'

const Footer = ()=>{
    return (
        <div>

<div  className={styles.footerc}>
    <div>
   <p>Copyright Macondo 2023</p>
   <h3>PÁGINA OFICIAL DE MACONDO</h3>
   <p>RUC 25485648544</p><br/>
   <a href="#">
    TERMINOS Y CONDICIONES
   </a>
   <a href="#">
    POLÍTICAS DE PRIVACIDAD
   </a>   
   <a href="#">
    CONTÁCTANOS
   </a>
   </div>
   <div className={styles.bloqderfot}>
    <div>
    <a href="#"><span>CONTACTO</span></a>
    <a href="#"><span>SOPORTE</span></a>
    <a href="#"><span>ENVÍOS</span></a>
    <a href="#"><span>COOKIES</span></a>
    <a href="#"><span>SUSCRÍBETE</span></a>
    </div>
    <div>
    <a href="#"><span>F.A.Q.</span></a>
    <a href="#"><span>DEVOLUCIONES</span></a>    
    <a href="#"><span>EMPLEOS</span></a>
    <a href="#"><span>ÁREA PRIVADA</span></a>
    <a href="#"><span>BLOG</span></a>    
    </div>
    <div>
    <a href="#"><span>HISTORIA</span></a>
    <a href="#"><span>NUESTRA SEDE</span></a>    
    <a href="#"><span>CAFETERÍA</span></a>
    <a href="#"><span>SOCIAL</span></a>
    <a href="#"><span>MI CUENTA</span></a>
    </div>
    
   </div>

</div>


        </div>
    )
}

export default Footer;