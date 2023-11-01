import Link from "next/link"


export default function Cabecalho (){
    return(
        <header className="bg-slate-800  text-white" >
            <h1 className="text-center text-3x1 font-extrabold">
                <Link href="/">Produtos</Link>
            </h1>
            <hr className="bg-red-600 border-red-700" />
            <nav className="menu">
                <ul>

                    <li >
                        <Link href="/login">Login</Link>
                    </li>
                    <li className="inline" >
                        <Link href="/produtos/calca">Calca</Link>
                    </li>

                    <li >
                        <Link href="/produtos/tenis">Tenis</Link>
                    </li>

                    <li>
                        <Link href="/produtos/camiseta">Camiseta</Link>
                    </li>

                    <li>
                        <Link href="/produtos/fazenda/loja/laticinios">Queijos</Link>
                    </li>
                    <li>
                        <Link href="/user-pages">Git Users</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )

}