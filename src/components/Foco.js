import React,{useState} from 'react'
import {Image, View, Button} from 'react-native'

const Foco =() =>{


    const [estatus, setEstatus] = useState( require('../../img/focoOff.png') );

    return(
        <View>
            <Image source={ estatus }
                style={{ width:300, height:300}}
            />
            <Button  title="Apagar" color="gray" onPress={()=>setEstatus(require('../../img/focoOff.png'))} />
            <Button  title="Amarillo" color="#FFBA1F" onPress={()=>setEstatus(require('../../img/focoOn.png'))} />
            <Button  title="Rojo" color="red" onPress={()=>setEstatus(require('../../img/focoRojo.png'))} />
            <Button  title="Azul" color="blue" onPress={()=>setEstatus(require('../../img/focoAzul.png'))} />
            <Button  title="Verde" color="green" onPress={()=>setEstatus(require('../../img/focoVerde.png'))} />
        </View>
        
    )
}

export default Foco;
