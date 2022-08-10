import Image from 'next/image'
import Link from 'next/link'
import styles from "./OfertaDetailCss/Header.module.css"
import LogoOB from "../../public/Isotipo_OB_Color (1).svg"

const Header = ({data}:{data:any}) =>{

    return(
        <div className={styles.header}>
            <div className={styles.headerInfo}>
                <Image
                    src={LogoOB}
                    width={"80px"}
                    height={"80px"}
                    alt="Logo de OpenBootcamp"
                />
                <div className={styles.headerInfoText}>
                    <h1>{data.nombre}</h1>
                </div>
            </div>
            <div className={styles.headerButtons}>
                <button><Link href={data.typeform}><span>Inscribirse</span></Link></button>
            </div>
        </div>
    )
}

export default Header