import styles from "./OfertaDetailCss/MainInfo.module.css"

const MainInfo = ({data}:{data:any}) =>{
    return(
        <div className={styles.mainInfo}>
            <div>
                <h4><span>Modalidad:</span></h4>
                <p>{data.modalidad}</p>
            </div>
            <div>
                <h4><span>Tipo de jornada:</span></h4>
                <p>Jornada Completa</p>
            </div>
            <div>
                <h4><span>Salario:</span></h4>
                <p>{data?.salario}</p>
            </div>
        </div>
    )
}

export default MainInfo 