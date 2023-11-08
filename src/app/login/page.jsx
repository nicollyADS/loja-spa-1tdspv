'use client'
import { useState } from "react"

export default function Login() {

    const [msgstatus, setMsgStatus] = useState("")

    //criando um useState para comportar o usuario
    const [usuario, setUsuario] = useState({
        "email":"",
        "senha":""
    });
    //função de preenchimento do FORM...
    const handleChange = (e)=>{
        //Destruturing
        const{name, value} = e.target;
        //Prenchendo o campo, utilizando o useState com SPREAD + OnChance:
        setUsuario({...usuario,[name]:value});
    }

    //Função de validação e ENVIO dos dados.
    const handleSubmit = async (e)=> {
        e.preventDefault();


        try {
            const response = await fetch("http://localhost:3000/api/base/base-users/0", {
                method: "POST",
                headers:{
                    "Content-Type":"aplication/json"
                },
                body: JSON.stringify(usuario)
            });
            if(response.ok){
                let status = await response.json();
                
                if(status.status == true){
                    setMsgStatus("Login realizado com SUCESSO!");
                }else{
                    setMsgStatus("USUARIO OU SENHA INVÁLIDOS!");
                    
                }
            }
        } catch (error) {
            
        }
    }

  return (
    <div>
        <h1>Informações dos usuarios</h1>

            <h2>{msgstatus}</h2>

        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>LOGIN</legend>
                    <div>
                        <label htmlFor="idEmail">EMAIL:</label>
                        <input type="email" name="email" id="idEmail" placeholder="Digite o seu email:"
                        value={usuario.email} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="idSenha">SENHA:</label>
                        <input type="password" name="senha" id="idSenha" placeholder="Digite a sua senha:"
                        value={usuario.senha} onChange={handleChange}/>
                    </div>
                    <div>
                        <button>Login</button>
                    </div>
                </fieldset>
            </form>
        </div>
    </div>
  )
}