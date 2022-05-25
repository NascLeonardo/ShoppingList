import './App.css';
import FormItem from './components/FormItem.js';
import Table from './components/Table.js';
import React from "react"
import collect from 'collect.js';
import * as Mui from "@mui/material"

export default function App() {

  const [itens, setItens] = React.useState(JSON.parse(localStorage.getItem("Itens")));
  const handleUpdate = () => {
    setItens([...JSON.parse(localStorage.getItem("Itens"))])
  }
  const orderByPreco = () => {    
    setItens(collect(itens).sortBy("Preco").all().reverse())
  }
  const orderByDate = () => {    
    setItens(collect(itens).sortBy("DtAdd").all().reverse())
  }
  
  return (
    <Mui.Grid justifyContent="center" container>
      <Mui.Grid item justifyContent="center" xs={12} md={8}>
        <FormItem updateItens={handleUpdate}/>
      </Mui.Grid>
      <Mui.Grid item xs={12} md={8}>
        <Table orderByDate={orderByDate} orderByPreco={orderByPreco} Itens={collect(itens).all()} updateItens={handleUpdate}/>
      </Mui.Grid>      
    </Mui.Grid>);
}