import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, Image, ScrollView} from 'react-native';

const request = async(callback) => {
  const response = await fetch('https://api.disneyapi.dev/characters');
  const parsed = await response.json();
  callback(parsed.data);
}

export default function App() {
  const [anime,setAnime] = useState([]);

  useEffect(()=>{
    request(setAnime);
  },[]);
  
  return (

    <View style={styles.container}>
    <ScrollView>
    <Image style={styles.logo} source={require('./components/logo.png')} />

      <Text style={styles.titulo}>Disney Api</Text>

      <FlatList

      data={anime}

      keyExtractor={(item)=> item.videoGames.toString()}

      renderItem={({item})=>
      
      <View style={styles.container2}>
      <Text style={styles.texto}>

        Séries de TV: {item.tvShows} {'\n'}
        Filmes: {item.films} {'\n'}
        Curtas :{item.shortFilms} {'\n'}
        Parques: {item.parkAttractions} {'\n'}

      </Text>
      </View>
      }
      />
    </ScrollView>
    </View>

  );
    }


    const styles = StyleSheet.create({

      container: {
        flex: 1,
        backgroundColor: '#4040ff',
        alignItems: 'center',
        justifyContent: 'center',
    
      },
        container2: {
        flex:2,
        backgroundColor: '#101084',
        borderRadius: 30,
        marginTop: 15
      },
    
      logo: {
        flex:2,
        height: 100,
        width: 200,
        alignItems: 'center',
        marginLeft: 80 
      },
      titulo:{
        color: 'white',
        textAlign: 'center',
        fontSize: 40
      },
      texto:{
      color: 'white',
       fontSize: 20,
      textAlign: 'center',
      marginTop: 20
    
      }
    
    });