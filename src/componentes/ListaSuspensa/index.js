import './ListaSuspensa.css';

const ListaSuspensa = (props) => {    
    return (
        <div className="ListaSuspensa">
            <label>{props.label}</label>
            <select 
                required={props.obrigatorio}
                onChange={evento => props.aoAlterado(evento.target.value)}
                value={props.valor}
            >
                {props.itens.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
        </div>
    );
}

export default ListaSuspensa;