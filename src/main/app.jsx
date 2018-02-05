import React from 'react'
import '../common/dependencies'



import Header from '../common/templates/header'
import Apresentacoes from "../apresentacoes/apresentacoes";
import { fstat } from "fs";

export default props => (
     <div>
         <Header/>
         <Apresentacoes/>
     </div>
)
