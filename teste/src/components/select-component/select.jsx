import { Component } from "react";
import { Simulate } from "react-dom/test-utils";
import './style_select.css'
class SelectLista extends Component {
    constructor(props){
        super(props);
        this.tabela_setores = props.tablesetores;
    }

handleslect(event){
    document.getElementById("selectinput").value = event.target.value;
    console.log(document.getElementById("selectinput"))
}

handlekeydown(event){
    if (event.keyCode === 13|| event.which === 13){
        let setor = {"nome" : document.getElementById("selectinput").value}
        console.log("entrou no if")
        console.log(setor)
        this.props.createsetor(setor);
    }
}
render(){
    return(    
        <section id= "divselect">

            <input type="text" id="selectinput" placeholder="setor" onKeyUp = {this.handlekeydown.bind(this)}/>
            <select name="select" onChange={this.handleslect}>
            {this.tabela_setores.map( (t,k) =>
            {  
                return(
                    <option key={k} value={t.nome}>{t.nome}</option>        
                    )
                }
                )}
            </select>
        </section>
 
    );
}
}

export default SelectLista;