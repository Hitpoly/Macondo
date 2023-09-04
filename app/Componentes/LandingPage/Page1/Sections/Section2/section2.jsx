import styles from './section2.module.css'
import Image from 'next/image'

const Nav = () =>{
    return (
       
      <div > 

    <div className={styles.sedebansec}>
    <div className={styles.imgcafesec}></div>
    <div className={styles.imgcafedersec}>
    <div className={styles.columleftmetdos}><h1 className={styles.titulocafdos}>MACONDO CAFÉ SENSIBLE</h1><br/><p className={styles.parrafcafedos}>
    Ha sido más que una marca de café en el Quindío. Somos un compromiso arraigado en la tierra y en las vidas de nuestros productores. Nuestro principal objetivo es tratar cada grano con el máximo respeto, desde su humilde origen en la semilla hasta su llegada a las tazas de quienes lo disfrutan.
Somos la conexión entre la siembra y la degustación, un puente que une a los caficultores con aquellos que aprecian la sutileza de nuestros cafés. Cada taza cuenta una historia de esfuerzo y pasión, desde las montañas del Quindío hasta su presencia en mesas en todo el mundo.
    </p>    
    <p className={styles.parrafcafeinfdos}>
    Nuestra misión va más allá del café. Es un compromiso con la sostenibilidad, la calidad y la equidad. En Macondo Café Sensible, cada paso en la producción es guiado por el respeto a las normas más rigurosas y el amor por la tradición cafetera, sus hombres y mujeres que lo hacen posible y también sus familias. 
    Este es nuestro legado: una historia tejida con la semilla del café y el espíritu de quienes lo cultivan. Cada sorbo es un testimonio de nuestra dedicación y de la riqueza de la tierra del Quindío.
    </p>
    <br/>
    <button className={styles.button3}>ENCUENTRANOS AQUÍ</button>
    </div>
    </div>
    </div>

    </div>

    )
  
  }
  
  export default Nav
  