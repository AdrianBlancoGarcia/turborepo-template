import styles from "./OfertaDetailCss/Info.module.css"

const Info = ({data}:{data:any}) => {
    return(
        <div className={styles.info}>
            <div>
                <h3>Pedimos:</h3>
                <ul>
                    {data.habilidades.map((habilidad: string, i: number) => {
                        return (<li key={i}>{habilidad}</li>)
                    })}
                </ul>
            </div>
            <div>
                <h3>Tareas:</h3>
                <ul>
                    {data.tareas.map((tarea: any, index: number) => {
                        return (<li key={index}>{tarea}</li>)
                    })}
                </ul>
            </div>
            <div>
                <h3>Descripción de la empresa:</h3>
                <p>{data.descripcion}</p>
            </div>
            <div>
                <h3>Beneficios de la oferta:</h3>
                {data.beneficios.map((beneficio: any, i: number) => {
                    return (<li key={i}>{beneficio}</li>)
                })}
            </div>
        </div>
    )
}

export default Info