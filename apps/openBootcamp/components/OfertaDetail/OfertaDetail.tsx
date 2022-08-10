import Header from './Header'
import Data from './Data'
import Info from './Info'

import styles from "./OfertaDetailCss/OfertaDetail.module.css"

const OfertaDetail = ({data}:{data:any}) => {
    return (
        <div className={styles.container}>
            <Header data={data} />
            <Data data={data} />
            <Info data={data} />
        </div>
    )
}

export default OfertaDetail