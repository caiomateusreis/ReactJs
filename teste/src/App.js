import './App.css';
import Cadastro from './components/cadastro-component/cadastro';
import Tabela from './components/tabela-component/tabela';
import SelectLista from './components/select-component/select';
import React, { Component } from 'react';

class App extends Component {
  obj2 = {"desc" : "sim" , "valor" : 1}
  obj1 = {"id" : 1, "nome" : "nome" , "obj" : this.obj2}
  table = [];
  tablesetores = [{nome: "teste1"},{nome: "teste2"},{nome: "teste3"},{nome: "teste4"}];

  
  constructor(){
    super();
    this.state = {
      table : this.table
      ,tablesetores : this.tablesetores
    }
  }

  create(model) {
    this.table.push(model)
    this.setState({
      table : this.table
    })
    console.log("chamandocreate")
    console.log(this.table)
  }

  createsetor(model) {
    this.tablesetores.push(model)
    this.setState({
      tablesetores : this.tablesetores
    })
  }
  
  delete(id, event){
    console.log("deletando")
    this.table.splice(this.table.findIndex(t => t.Id === id),1)
    event.stopPropagation();
    this.setState({
      table : this.table
    })
  }

  find_by_id(id, lista, event){
    lista.find(c => id === lista.id)
  }

  update(id, event){
    const model = this.table.find(t => t.id === id)
    console.log(model)
    document.getElementById("Id").value = model.Id
    document.getElementById("Nome").value = model.Nome
    document.getElementById("Setor").value = model.Setor

    event.stopPropagation();
    this.setState({
      table : this.table
    })
  }

  render(){
    return (
      <section>
      <div id="maindiv">
      <Cadastro create = {this.create.bind(this)}/>
      <Tabela table_pessoa = {this.state.table} delete={this.delete.bind(this)} update={this.update.bind(this)}/>
      <SelectLista tablesetores = {this.state.tablesetores} createsetor={this.createsetor.bind(this)} />
      </div>
      {console.log(this.obj1), console.log(this.obj2)}
      </section>
    );
  }
}
export default App;
