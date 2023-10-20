import Link from "next/link"


export default function Cabecalho (){
    return(
        <header className="bg-slate-800  text-white" >
            <h1 className="text-center text-3x1 font-extrabold">Produtos</h1>
            <hr className="bg-red-600 border-red-700" />
            <nav className="menu">
                <ul>
                    <li className="inline" >
                        <Link href="/produtos/calca">Calca</Link>
                    </li>

                    <li >
                        <Link href="/produtos/tenis">Tenis</Link>
                    </li>

                    <li>
                        <Link href="/produtos/camiseta">Camiseta</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )

}