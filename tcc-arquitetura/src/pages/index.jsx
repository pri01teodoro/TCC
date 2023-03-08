import Link from "next/link";
import Header from "../components/Header";

export default function Home(){
    
    return (
    <>
        <Header />
        Página inicial
        <Link href="/visualizar">Visualizar</Link>
    </>

    )
}