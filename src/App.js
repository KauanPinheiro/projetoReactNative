import React from "react";
import { Text,View } from "react-native";

//Exportando as funções
import Parte ,{Parte1,Parte2} from "./components/Primeiro";

function App(){

    return(
            <View> 
                    <Parte/> 
                    <Parte1/>
                    <Parte2/>
             </View>
    )
}

export default App;  