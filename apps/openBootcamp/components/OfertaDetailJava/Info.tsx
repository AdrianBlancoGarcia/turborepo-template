import styles from "../OfertaDetail/OfertaDetailCss/Info.module.css"

const Info = ({data}:{data:any}) => {
    return(
        <div className={styles.info}>
            <div>
                <h3>Descripción:</h3>
                <p>{data.descripcion}</p>
            </div>
            <div>
                <h3>Experiencia:</h3>
                <ul>
                    {data.experiencia}
                </ul>
            </div>
            <div>
                <h3>Tecnologías:</h3>
                <ul>
                    {data.tecnologias.map((tarea: any, index: number) => {
                        return (<li key={index}>{tarea}</li>)
                    })}
                </ul>
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