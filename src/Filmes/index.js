import React, {Component} from 'react';
import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native';


export default class Filmes extends Component {
    constructor(props){
        super(props);
    }
    render(){

        const{ nome, foto, sinopse } = this.props.data;

        return(
            <View>
                <View style={styles.Card}>
                    <Text style={styles.title}>{nome}</Text>
                    <Image
                    source={{uri:foto}}
                    style={styles.photo}
                    />

                    <View style={styles.buttonArea}>
                        <TouchableOpacity style={styles.button} onPress={()=>{alert(sinopse)}}>
                            <Text style={styles.buttonText}>Saiba Mais</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card:{
        shadowColor:'#000',
        backgroundColor:'#fff',
        shadowOffset: {
            width:0,
            height:1
        },
        shadowOpacity:0.8,
        margin:15,
        shadowRadius:5,
        borderRadius:5,
        elevation:3
    },

    title:{
        fontSize:18,
        padding:15
    },

    photo: {
        height:250,
        zIndex:2
    },

    buttonArea:{
        alignItems:'flex-end',
        marginTop:-40,
        zIndex:9
    },

    button:{
        width:100,
        backgroundColor:'#09a6ff',
        opacity:1,
        padding:8,
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5
    },

    buttonText:{
        textAlign:'center',
        color:'#fff'
    }

})