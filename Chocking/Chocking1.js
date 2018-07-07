import React, {Component} from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, Image, BackHandler, Dimensions, AppState} from 'react-native';
import { YellowBox } from 'react-native';
import { HeaderBackButton } from 'react-navigation'
import { Icon } from 'react-native-elements'

var {width, height} = Dimensions.get('window')
var SoundPlayer = require('react-native-sound');
// SoundPlayer.setCategory('Playback', true)
var song = null;
var list = [
  {
    id: 0,
    name: 'chocking1.mp3'
  },
]
class Chocking1 extends Component {

    static navigationOptions = ({ navigation }) => ({
        headerTitle:<View style={styles.headerTitle}>
          <Text style={styles.buttonText}>HÓC</Text>
          <Text style={styles.text}>Xử lý hóc dị vật vào đường thở</Text>
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
        this.state={currentPage: 0,
          mute: false, name: '', icon: 'unmute', stop: true
        }
        YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
    }

    componentWillMount() {
      BackHandler.addEventListener('hardwareBackPress', function() {
        if (song != null) {song.stop(()=> song = null)}
        return false;
      });
    }
        render() {
            return (
              <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Chocking2')}
                 style={styles.button}>
                  <View>
                    <Image style={styles.image} source={require('../menu-icon.png')}/>
                    <Text style={styles.buttonText}>Tự ho được</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Chocking3')}
                 style={styles.button}>
                  <View>
                    <Image style={styles.image} source={require('../menu-icon.png')}/>
                    <Text style={styles.buttonText}>Không tự ho được</Text>
                  </View>
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
    color: 'black',
    fontSize: 16
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
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    marginBottom: 24
  },

  button: {
    marginBottom: 22,
    marginRight: 5,
    marginLeft: 5,
    width: width/1.3,
    height: height/2.5,
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
    borderColor: 'blue',
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

export default Chocking1