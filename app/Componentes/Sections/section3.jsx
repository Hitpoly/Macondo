import styles from '../Sections/section3.module.css'
import Image from 'next/image'

const Nav = () =>{
    return (
       
      <div >  

<div className={styles.padreslice}>  
<div>
<div className={styles.slice1}>
    <h1>FILOSOFIA</h1>
    <span>Macondo se esfuerza por respetar cada paso del proceso de producción. Con un enfoque meticuloso en la recolección y selección de los granos más finos, garantizan lacalidad excepcional de cada taza. La maestría en la tostura del café despierta lossabores y aromas más sutiles...</span>
    <img  className={styles.flec}/>
    
</div>
</div>

<div>
<div className={styles.slice2}>
    <h1>MISIÓN</h1>
    <span>Reconfigurar la experiencia del consumo de café en una vivenciamemorable, cautivando los sentidos de los consumidores másexigentes del mundo, mediante una meticulosa y esmeradaelaboración que sobrepasa expectativas...</span>
    <img className={styles.flec} />
</div>
</div> 
<br/>
</div>
<br/>
<div className={styles.padreslicedos}> 
<div className={styles.slice3}>
<h1>VISIÓN</h1>
<span>Alcanzar el liderazgo incontestable en el mercado cafetero alposicionar a Macondo Café Sensible, como la marca quepersonifica la sensibilidad humana y materializa los anhelos másprofundos de los apasionados del café...</span>
<img className={styles.flec} />
</div>
</div>

      </div>
    )
  
  }
  
  export default Nav
  