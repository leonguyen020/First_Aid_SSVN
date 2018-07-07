import React, {Component} from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, Image, ViewPagerAndroid, BackHandler, Dimensions, DeviceEventEmitter, AppState } from 'react-native'
import { YellowBox } from 'react-native';
import { Icon } from 'react-native-elements'
import { HeaderBackButton } from 'react-navigation'

var {width, height} = Dimensions.get('window')
class Bleeding1 extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'CHẢY MÁU',
        headerLeft: <HeaderBackButton onPress={() => navigation.goBack()
          //  && song.stop()
          }/>,
        headerRight: <TouchableOpacity style={{alignSelf: 'center', paddingRight: 10}}>
        <Icon name = 'home' type='entyco' size={35} onPress = {() => navigation.navigate('Login')
        //  && song.stop()
         }/>
        </TouchableOpacity>,
         headerTitleStyle : {flex: 1, textAlign: 'center',alignSelf:'center'},
            headerStyle:{
                backgroundColor:'white',
                paddingTop: 15,
                bottom: 15,
                marginBottom: -15,
            },
        })

        constructor(props) {
            super(props)
              YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
          }
        render() {
            return (
              <View style={styles.container}>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Bleeding2')}
                 style={styles.button}>
                    <Image style={styles.image} source={require('../Images/vetcatsau.jpg')} position='absolute'/>
                    <View style={styles.overlay}/>
                    <Text style={styles.buttonText}>Vết cắt sâu</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Bleeding6')}
                 style={styles.button}>
                    <Image style={styles.image} source={require('../Images/vetdamxuyen.jpg')} position='absolute'/>
                    <View style={styles.overlay}/>
                    <Text style={styles.buttonText}>Vết đâm xuyên</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Bleeding11')}
                 style={styles.button}>
                    <Image style={styles.image} source={require('../Images/dutliangon.png')} position='absolute'/>
                    <View style={styles.overlay}/>
                    <Text style={styles.buttonText}>Đứt lìa ngón</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Bleeding12')}
                 style={styles.button}>
                    <Image style={styles.image} source={require('../Images/chaymaumui.jpg')} position='absolute'/>
                    <View style={styles.overlay}/>
                    <Text style={styles.buttonText}>Chảy máu mũi</Text>
                </TouchableOpacity>
              </View>
            )
          }
      }
      
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30,
    alignSelf: 'center',
  },
  
  semiButtonText: {
    color: 'black',
    fontSize: 16,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    bottom: 3
  },

  image: {
    flex: 1,
    width: width/1.3,
    height: height/5.4,
    // marginTop: 20,
    alignSelf: 'center',
    justifyContent:'center',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.5,
    backgroundColor: 'black',
    width: width/1.3,
    height: height/5.4,
    borderRadius: 10,
  },

  button: {
    marginBottom: 22,
    marginRight: 5,
    marginLeft: 5,
    width: width/1.3,
    height: height/5.4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3',
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 7,
  },
})

export default Bleeding1