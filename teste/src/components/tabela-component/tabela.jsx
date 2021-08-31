import { Component } from "react";
import { ReactComponent as DeleteImg } from "../../assets/img/delete.svg";
import { ReactComponent as UpdateImg } from "../../assets/img/edit.svg";
import './style_tabela.css'
class Tabela extends Component {

    render() { 
        return (  
            <table id="tabelapessoa">
                <thead>
                <tr>
                    <th>id</th>
                    <th>nome</th>
                    <th>setor</th>
                </tr>
                </thead>
                <tbody>
                {this.props.table_pessoa.map( (t,k) => {
                    return(
                        <tr key={k}>
                        <td>{t.Id}</td>
                        <td>{t.Nome}</td>
                        <td>{t.Setor}</td>
                        <td>
                            <DeleteImg 
                            onClick = {this.props.delete.bind(this,t.Id)}id="del">{t.Id}
                            </DeleteImg>
                            <UpdateImg
                            onClick = {this.props.update.bind(this,t.id)}id="updt">{t.id}
                            </UpdateImg>
                        </td>
                    </tr>
                )
                })}
                </tbody>
            </table>
        );
    }
}
 
export default Tabela;