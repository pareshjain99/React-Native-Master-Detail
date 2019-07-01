import React, { Component } from 'react';
import { Text, Button, View, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    padding: 10,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  name: {
    color: 'black',
    fontSize: 18,
    padding:5,
    textAlign:'left',
    marginTop:10
  },
  text:{
    color:'gray',
    fontSize:16,
    textAlign:'left',
    padding:5
  }
});

export default class DetailView extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTintColor: 'white',
    title: navigation.state.params.data.title,
    headerTitleStyle:{
      color: 'white',
      fontSize: 18
    },
    headerStyle: {
     backgroundColor:'#52b6ac'
   }
 });
  render() {
    const { params } = this.props.navigation.state;
    return(

      <View style={styles.container}>
        <View style={{
                flexDirection: 'row',
                justifyContent: 'center'
              }}>
          <Image  
            source={require('../assets/profile.png')}
            style={{width: 128, height: 128, margin: 10}}
            />
        </View>
        <View style={{
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
              }}>
          <Text style={styles.name}>{params.data.title}</Text>
          <Text style={styles.text}>{params.data.byline}</Text>
          <Text style={styles.text}>Published Data: {params.data.published_date}</Text>
          <Text style={styles.text}>Abstract: {params.data.abstract}</Text>
        </View>
      </View>
    );
  }
}
