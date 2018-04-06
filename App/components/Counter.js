import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Counter extends Component{
    render(){
        return(
          <View>
              
              <Text
                style={styles.counter}
                onPress={this.props.reset}
                >
                { this.props.count }
              </Text>

              <View style={styles.incrementView}>
                <TouchableOpacity
                    style={ styles.button }
                    onPress={this.props.decrement} 
                >
                  <Text style={styles.textButton} >UP</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                  style={ styles.button } 
                  onPress={this.props.increment}
                >
                  <Text style={styles.textButton} >DOWN</Text>
                </TouchableOpacity>
              </View>

          </View>
        );
    }
}

const styles = StyleSheet.create({
    background:{
        backgroundColor: '#a1a1a1'
    },
    incrementView: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    counter: {
        padding:  30,
        alignSelf: 'center',
        fontSize: 90,
        fontWeight: 'bold',
        color: 'white'
    },
    button: {
        backgroundColor: 'white',
        width: 150,
        height: 50,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    textButton: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red'
    }
})