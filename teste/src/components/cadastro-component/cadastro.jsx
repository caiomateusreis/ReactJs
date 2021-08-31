import { Component } from "react";
import './style_cadastro.css'
class Cadastro extends Component {
    id;
    nome;
    setor;
    constructor(props){
        super(props);
    }

    handleinputId(event){
        this.id = event.target.value
        event.stopPropagation();
    }

    handleinputNome(event){
        this.nome = event.target.value
        console.log(event.target.value)
        event.stopPropagation();
    }

    handleinputSetor(event){
        this.setor = event.target.value
        event.stopPropagation();
    }
    handlesubmit(event){
        let pessoa = {"Id" : this.id, "Nome" : this.nome, "Setor" : document.getElementById("selectinput").value} 
        event.stopPropagation();
        event.preventDefault();
        this.props.create(pessoa);
        console.log(pessoa);
    }
    render() { 
        return (
            <form className="form" onSubmit={this.handlesubmit.bind(this)}>
                <label>Id</label><input id="Id" type="text" placeholder="ID" onChange={this.handleinputId.bind(this)}/>
                <label>Nome</label><input id="Nome" type="text" placeholder="Nome" onChange={this.handleinputNome.bind(this)}/>
                <input type="submit" value="Salvar"/>
            </form>  
        )
        }
}
 
export default Cadastro;