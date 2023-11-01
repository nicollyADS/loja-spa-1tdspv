"use client"

import { useState } from "react"

export default function Login() {

    //use state para comportar o usuario

    const [usuario, setUsuario] = useState({
        "email": "",
        "senha": ""
    })

    //preenchimento do form
    const handleChange = (e)=>{
        //Destructuring
        const{name, value} = e.target;

        //Preenchendo o campo utilizando useState com SPREAD + onChange:
        setUsuario({...usuario,[name]:value})
    }

    //validação e envio de dados 
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try{
            const response = await fetch("http://localhost:3000/api/base/base-users/0",{
                method: "POST",
                headers:{
                    "content-Type": "application/json"
                },
                body: JSON.stringify(usuario)
            })

            if(response.ok){

                let status = response.json().status;

                if(status){
                    console.log("USUARIO VALIDADO COM SUCESSO")
                }else{
                    console.log("USUARIO OU SENHA INVÁLIDOS")
                }
            }

        }catch(error) {

        }

    }


    return (
      <div>
          <h1>INFORMAÇÕES DOS USUÁRIOS</h1>
  
          <div>
              <form onSubmit={handleSubmit}>
                  <fieldset>
                      <legend>LOGIN</legend>
                      <div>
                          <label htmlFor="idEmail">EMAIL:</label>
                          <input type="email" name="email" id="idEmail" placeholder="Digite o seu EMAIL:" value={usuario.email} onChange={handleChange}  />
                      </div>
                      <div>
                          <label htmlFor="idSenha">SENHA:</label>
                          <input type="password" name="senha" id="idSenha" placeholder="Digite a sua SENHA:" value={usuario.senha}  onChange={handleChange} />
                      </div>
                      <div>
                          <button>LOGIN</button>
                      </div>
                  </fieldset>
              </form>
          </div>
      </div>
    )
  }
  