import React from "react"
import collect from 'collect.js';
import * as Mui from "@mui/material"
export default function FormItem(props) {
    const [usuario, setUsuario] = React.useState(null);
    const [preco, setPreco] = React.useState(null);
    const [item, setItem] = React.useState(null);

    const inputUsuario = React.useRef();
    const inputItem = React.useRef();    
    const inputPreco = React.useRef();
    const cleanInput =(input) =>{
        input.value = "";
    }        
    const postItem = () => {
        if(isNaN(parseFloat(preco)) || toString(preco) === null ){
            alert("Entre com um valor monetario válido!");
        }else{
            const Info = {
                Usuario: usuario,
                Item: item,
                Preco: parseFloat(preco).toFixed(2),
                DtAdd: Date()
            };
            const atualListItens = collect(JSON.parse(localStorage.getItem("Itens")));
    
            
            atualListItens.push(Info);
           
            localStorage.setItem("Itens", atualListItens.toJson());
            props.updateItens();
            setUsuario(null);
            setItem(null);
            setPreco(null);
            cleanInput(inputPreco.current);
            cleanInput(inputItem.current);
            cleanInput(inputUsuario.current);

        }     
        
    }
    const button = <Mui.Button type="submit" variant="outlined" size="small" onClick={postItem}>Inserir compra</Mui.Button>

    return (
        <Mui.Card  sx={{ marginBottom: 5, marginTop:2 }}>
            <Mui.Card sx={{ minWidth: 275 }}>
                <form action="" method="post" target="hiddenFrame">
                    <Mui.CardContent>                            
                        <Mui.Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Shopping-List:
                        </Mui.Typography>
                        <Mui.Typography variant="h6" component="div">
                            Adicione itens a lista
                        </Mui.Typography>
                        <Mui.TextField inputRef={inputUsuario} required fullWidth margin="dense" label="Usúario" onChange={(e) => setUsuario(e.target.value)} type="text" id="usuario" name="usuario" placeholder="Quem está inserindo?" /><br />
                        <Mui.TextField inputRef={inputItem} required fullWidth margin="dense" label="Item" onChange={(e) => setItem(e.target.value)} type="text" id="item" name="item" placeholder="Item a ser comprado" /><br />

                        <Mui.TextField                                
                            inputRef={inputPreco}
                            required
                            fullWidth
                            margin="dense"
                            id="preco"
                            type="text"
                            onChange={(e) => setPreco(e.target.value.replace(",", "."))}
                            label="Preço"
                            placeholder="Preço do Item"
                            />
                    </Mui.CardContent>
                    <Mui.CardActions>
                        {button}
                    </Mui.CardActions>
                </form>
            </Mui.Card>
            <iframe title="whyatitle?" name="hiddenFrame" width="0" height="0" border="0" style={{display:"none"}}></iframe>
        </Mui.Card>

    );
}