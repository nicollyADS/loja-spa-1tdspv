
export default async function TodosLaticinios() {

    const response = await fetch('/api/laticinios')
    const queijos = await response.json();


    return (
      <div>
            <h1>Laticinios</h1>

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Imagem</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Descricao</th>
                    </tr>
                </thead>

                <tbody>
                    
                </tbody>

                <tfoot>
                    
                </tfoot>

            </table>
      </div>
    )
  }