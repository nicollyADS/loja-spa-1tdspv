import Link from "next/link"

export default function Cabecalho (){
    return(
        <div>
            <ul>
                <li><Link href="/produtos/calca">Calca</Link></li>
                <li><Link href="/produtos/camiseta">Camiseta</Link></li>
                <li><Link href="/produtos/tenis">Tenis</Link></li>
            </ul>
        </div>
    )

}