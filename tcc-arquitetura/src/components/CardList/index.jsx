import { useEffect, useState } from "react"
import Card from "../Card"
import styles from "./styles.module.css"
import axios from "axios";

export default function CardList(){

    const [cards, setCards] = useState([]);

    useEffect(() => {
       axios.get('/api/publicacoes')
        .then(resposta => setCards(resposta.data))
    }, [])

    return(
        <div className={styles.card_list}>
            {cards.map( c => (
                <Card
                key={c.id}
                titulo={c.titulo}
                autor={c.autor}
                orientador={c.orientador}
                capa={c.capa}
                />
            ))}
        </div>
    )
}