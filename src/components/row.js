import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    flexDirection: 'row',
  },
  rowText: {
    fontSize: 16,
    color:'gray'
  },
  rowDate:{
    fontSize: 16,
    color: 'gray'
  },
  rowHeading:{
    fontSize: 18,
    color: 'black'
  },
  rowImage:{
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 5,
  },
  textContainer:{
    flex:4,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 10
  },
  moreContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  },
  moreIcon: {
     color: "#A9A9A9"
   }
});

const Row = (props) => (
    <View style={styles.container}>
    <View style={styles.rowImage}>
        <Image 
        borderRadius={32}
            source={require('../assets/profile.png')}
            style={{width: 64, height: 64, margin: 5}}
      />
    </View>
    <View style={styles.textContainer}>
      <Text numberOfLines={2} style={styles.rowHeading}>{props.title}</Text>
      <Text numberOfLines={2} style={styles.rowText}>{props.byline}</Text>
      <View style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
      <View style={styles.moreContainer}>
          <Icon name="calendar" size={15} style={styles.moreIcon} />
      </View>
      <Text style={styles.rowDate}>{props.date}</Text>
    </View>
    </View>
    <View style={styles.moreContainer}>
          <Icon name="chevron-right" size={15} style={styles.moreIcon} />
    </View>
    </View>
);

export default Row;
