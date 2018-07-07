import React, {Component} from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import { YellowBox } from 'react-native';
import { HeaderBackButton } from 'react-navigation'
import { Icon } from 'react-native-elements'

var {width, height} = Dimensions.get('window')
class Bite extends Component {

    static navigationOptions = ({ navigation }) => ({
        headerTitle:<View style={styles.headerTitle}>
          <Text style={styles.buttonText}>VẾT CẮN</Text>
        </View>,
        headerLeft: <HeaderBackButton onPress={() => navigation.goBack()}/>,
        headerRight: <TouchableOpacity style={{alignSelf: 'center', paddingRight: 10}}>
        <Icon name = 'home' type='entyco' size={35} onPress = {() => navigation.navigate('Login')}/>
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
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Bite1')}
                 style={styles.button}>
                    <Image style={styles.image} source={require('../Images/rancan.jpg')} position='absolute'/>
                    <View style={styles.overlay}/>
                    <Text style={styles.buttonText1}>Rắn cắn</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Bite2')}
                 style={styles.button}>
                    <Image style={styles.image} source={require('../Images/ongchich.png')} position='absolute'/>
                    <View style={styles.overlay}/>
                    <Text style={styles.buttonText1}>Ong chích</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Bite3')}
                 style={styles.button}>
                    <Image style={styles.image} source={require('../Images/sinhvatbiencan.jpg')} position='absolute'/>
                    <View style={styles.overlay}/>
                    <Text style={styles.buttonText1}>Sinh vật biển</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Bite4')}
                 style={styles.button}>
                    <Image style={styles.image} source={require('../Images/dogbite.jpg')} position='absolute'/>
                    <View style={styles.overlay}/>
                    <Text style={styles.buttonText1}>Chó cắn</Text>
                </TouchableOpacity>
              </View>
            )
          }
      }
      
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 15
  },

  buttonText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
    justifyContent: 'center',
    alignItems: 'center',
    // alignSelf: 'center',
    alignContent: 'center',
  },
  
  buttonText1: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30,
    alignSelf: 'center',
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

  headerTitle: {
    flex: 1,
    width: '50%', 
    height: '90%',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10
  },
})

export default Bite