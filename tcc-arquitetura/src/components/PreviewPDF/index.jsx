import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import styles from "./styles.module.css"

export default function PreviewPDF(){

    const router = useRouter();
    const {id} = router.query;

    const [publicacao, setPublicacao] = useState({});

    useEffect(() => { //consultar na API
        axios.get(`/api/publicacoes/${id}`)
            .then(resposta => setPublicacao (resposta.data));
    }, [router]);

    return (
        <>
        <p>Titulo: {publicacao.titulo}</p>
        <p>Autor: {publicacao.autor}</p>
        <p>Orientador: {publicacao.orientador}</p>   
        <iframe className={styles.pdf} src={publicacao.arquivo}></iframe>     
        </>
    )

}