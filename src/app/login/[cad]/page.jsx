'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export default function CadUser({params} ) {

    //Utilizando o redirecionamento quando estamos no cliente:
    const router = useRouter();

    const [msgstatus, setMsgStatus] = useState("")
    const [classLoginMsg, setClassLoginMsg] = useState("")

    //criando um useState para comportar o usuario
    const [usuario, setUsuario] = useState({
        "nome":"",
        "email":"",
        "senha":""
    });

    useEffect(() => {
      if(msgstatus == "Login realizado com SUCESSO!"){
        setClassLoginMsg("login-suc")
      }else if(msgstatus == "USUARIO OU SENHA INVÁLIDOS!"){
        setClassLoginMsg("login-err");
      }else{
        setClassLoginMsg("login");
      }
    }, [msgstatus])
    
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
               const user = await response.json();
                
                if(user){
                    setMsgStatus("Cadastro realizado com SUCESSO!");
                    setTimeout(()=>{
                        setMsgStatus("");
                        router.push("/");
                    },5000)
                }else{
                    setMsgStatus("USUARIO NÃO CADASTRADO");
                    setTimeout(()=>{
                        setMsgStatus("");
                        setUsuario({
                            "nome": "",
                            "email":"",
                            "senha":""
                        });
                    },5000)
                }
            }
        } catch (error) {
            
        }
    }

  return (
    <div>
        <h1>Cadastro de Usuários</h1>

            <h2 className={classLoginMsg}>{msgstatus}</h2>

        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>LOGIN</legend>
                    <div>
                        <label htmlFor="idNome">NOME:</label>
                        <input type="text" name="nome" id="idNome" placeholder="Digite o seu nome:"
                        value={usuario.nome} onChange={handleChange}/>
                    </div>
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
                        <button>Cadastrar</button>
                    </div>
                    <div>
                        <p>Se ja possui registro. <Link href="/login">Clique aqui</Link></p>
                    </div>
                </fieldset>
            </form>
        </div>
    </div>
  )
}