import collect from "collect.js";
import React from "react"
import TableItens from './TableItens.js';
import * as Mui from "@mui/material"

export default function Table(props) {
    let itens = collect(props.Itens)
    
    
    return (
        <>
            <Mui.Typography variant="h5" component="div">Itens: </Mui.Typography>
            <>
                
                <Mui.TableContainer component={Mui.Paper}color="Black">
                    <Mui.Table sx={{ minWidth: 650 }} aria-label="caption table">
                        <caption>Quantidade de Itens: {itens !== null ? itens.count() : 0} | Preço total: R${itens !== null ? itens.sum("Preco").toFixed(2) : "0.00"}</caption>
                        <Mui.TableHead>
                            <Mui.TableRow>
                                <Mui.TableCell align="center">Usúario </Mui.TableCell>
                                <Mui.TableCell align="center">Item</Mui.TableCell>
                                <Mui.TableCell onClick={props.orderByPreco} align="center">Preço</Mui.TableCell>
                                <Mui.TableCell  onClick={props.orderByDate} align="center">Data de Inclusão</Mui.TableCell>
                                <Mui.TableCell align="center">Deletar</Mui.TableCell>
                            </Mui.TableRow>
                        </Mui.TableHead>
                        <Mui.TableBody>
                        {itens.isNotEmpty() &&
                            itens.map((item, index) => <TableItens Item={item} key={index} index={index} updateItens={props.updateItens} />)
                        }
                        </Mui.TableBody>
                    </Mui.Table>
                </Mui.TableContainer>
            </>

            


        </>
    );
}