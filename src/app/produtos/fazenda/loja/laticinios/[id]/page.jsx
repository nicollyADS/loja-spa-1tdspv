import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Item({params}) {
        let queijo;
        try{
            const response = await fetch(`http://localhost:3000/api/laticinios/${params.id}`);
            queijo = await response.json();
        }catch(error){
            console.log(error);
            redirect("/error");
        }
  return (
    <div>

        <h1>ITEMS</h1>

        <section>  
                    {
                    <div key={queijo.id}>
                        <h1>PRODUTO: {queijo.nome}</h1>
                        <h2>CATEGORIA: {queijo.categoria}</h2>
                        <figure>
                            <Image src={queijo.imagem} width={100} height={100} alt={queijo.descricao} />
                            <figcaption>{queijo.descricao} - R$ <span>{queijo.preco}</span></figcaption>
                        </figure>
                    </div>
                }
           </section>

    </div>
  )
}