import React from "react"
import collect from 'collect.js';
import * as Mui from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
export default function TableItens(props) {
    const deleteItem = () => {
        const listItens = collect(JSON.parse(localStorage.getItem("Itens")));
        listItens.splice(props.index, 1);
        localStorage.setItem("Itens", listItens.toJson());
        props.updateItens();
    }
    return (
        <>        
            <Mui.TableRow hover>
                <Mui.TableCell align="center" component="th" scope="row">{props.Item.Usuario}</Mui.TableCell>
                <Mui.TableCell align="center">{props.Item.Item}</Mui.TableCell>
                <Mui.TableCell align="center">R${props.Item.Preco}</Mui.TableCell>
                <Mui.TableCell align="center">{new Date(props.Item.DtAdd).toLocaleDateString()}</Mui.TableCell>
                <Mui.TableCell align="center"><Mui.Button onClick={deleteItem} variant="contained" color="error" startIcon={<DeleteIcon />}>Excluir</Mui.Button></Mui.TableCell>
            </Mui.TableRow>
        </>
    );
}