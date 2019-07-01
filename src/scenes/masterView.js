import React, { Component } from 'react';
import { Text, View, ListView, StyleSheet, TouchableHighlight, ActivityIndicator } from 'react-native';
import Row from '../components/row'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    padding: 0,
    backgroundColor: '#FFFFFF'
  },
  text: {
    marginLeft: 12,
    fontSize: 28,
  },
  row: {
      flex: 1,
      padding: 12,
      flexDirection: 'row',
      alignItems: 'center',
  }
});

export default class MasterView extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerTintColor: 'white',
    title: 'NY Times Most Popular',
    headerTitleStyle:{
      color: 'white',
      fontSize: 21
    },
    headerStyle: {
     backgroundColor:'#52b6ac'
   }
 });

  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2, r3) => r1 !== r2 & r2 !== r3})
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3'])
    }
  }

  componentWillMount() {
    this.fetchData();
  }

  async fetchData(){
    try{
      let response = await fetch("https://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/7.json?api-key=oUpyJ5HQaNwvOKlKXQcFzjnbCIOV7Gkm");
      let responseJson = await response.json();
      this.setState({dataSource: this.state.dataSource.cloneWithRows(responseJson.results)});
      //this.props.navigation.setParams({isAnimating: false});
    } catch(error){
      console.error(error);
    }
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <ListView
        contentInset={{bottom:15}}
        automaticallyAdjustContentInsets={true}
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow = {
           (rowData) => (
             <TouchableHighlight
              onPress={() => navigate('DetailView', {data: rowData})}
              >
               <View>
                <Row title={rowData.title} byline={rowData.byline} date={rowData.published_date} />
              </View>
            </TouchableHighlight>
           )
        }
        />
      </View>
    );
  }
}
