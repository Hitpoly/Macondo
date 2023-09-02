import styles from './navStyle.module.css'
import Image from 'next/image'
import Link from 'next/link' // Importa el componente Link de Next.js

import React from "react";

const Nav = () => {
  return (
    <div className={styles.headerfixed}>
      <div className={styles.nav}>
        <img className="logo" src="images/logo.png" width="20%" />

        <nav>
          {/* Usar Link en lugar de <a> para la navegación interna */}
          <Link href="/">INICIO</Link>
          <Link href="/Componentes/LandingPage/Page1">NOSOTROS</Link>
          <Link href="/historia">HISTORIA</Link>
          <Link href="/cafes">CAFÉS</Link>
          <Link href="/tienda">TIENDA</Link>
          <Link href="/contacto">CONTACTO</Link>
          <Link href="/login">INICIO DE SESIÓN</Link>
        </nav>
      </div>
    </div>
  )
}

export default Nav
