import React, {Component} from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, Image, ViewPagerAndroid, BackHandler, Dimensions, DeviceEventEmitter, AppState } from 'react-native'
import PageControl from 'react-native-page-control';
import { YellowBox } from 'react-native';
import { Icon } from 'react-native-elements'
import { HeaderBackButton } from 'react-navigation'

var {width, height} = Dimensions.get('window')
var SoundPlayer = require('react-native-sound');
// SoundPlayer.setCategory('Playback', true)
var song = null;
var list = [
//   {
//     id: 0,
//     name: 'unconsious6.mp3'
//   },
  // {
  //   id: 0,
  //   name: 'unconscious1.mp3'
  // },
  // {
  //   id: 1,
  //   name: 'unconscious2.mp3'
  // },
]

class Chocking3 extends Component {
    
    static navigationOptions = ({ navigation }) => ({
        headerTitle:<View style={styles.headerTitle}>
          <Text style={styles.buttonText}>HÓC</Text>
          <Text style={styles.text}>Hóc- Không tự ho được</Text>
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
        // this.handleChange = this.handleChange.bind(this)
        // this.onPressButtonStop = this.onPressButtonStop.bind(this)
        this.onPressButtonMute = this.onPressButtonMute.bind(this)
    }

    componentWillMount() {
      BackHandler.addEventListener('hardwareBackPress', function() {
        // if (song != null) {song.stop(()=> song = null)}
        return false;
      });
      // AppState.removeEventListener('change', this.handleAppStateChange);
    }
    // componentDidMount(){
    //   AppState.addEventListener('change', this.handleAppStateChange)
    // }
    // handleAppStateChange(currentAppState) {
    //   if(currentAppState == "background") {
    //       song.pause();
    //   } 
    //   if(currentAppState == "active") {
    //       song.play();
    //   }
    // }

    

    // onPressButtonPlay() {
    //     if(song == null){
    //         song = new SoundPlayer('unconscious1.mp3', SoundPlayer.MAIN_BUNDLE, () => {
    //             song.setNumberOfLoops(-1).play(()=>song.stop())
    //         });
            
    //     }
    // }
    
    onPressButtonMute() {
      if(song != null) {
        if(this.state.mute) {// play resume
          song.setVolume(1)
          this.setState({icon: 'unmute'})}
        else {song.setVolume(0);
          this.setState({icon: 'mute'})
        }
        this.setState({mute: !this.state.mute});
      }
    }

    // onPressButtonStop(state) {
    //     if(this.state.icon === "unmute"){
    //         if (state === "idle") {
    //             song.stop().release()
    //             song = new SoundPlayer(this.state.name, SoundPlayer.MAIN_BUNDLE, () => {
    //                 song.setNumberOfLoops(-1).play(()=>song.release())
    //             });
    //         }
    //         else song.stop()
    //     }
    // }

    handleChange({nativeEvent}) {
      let change = nativeEvent.position
      if (this.state.currentPage !== change) {
        this.setState({currentPage: change, 
          name: list.filter(s=>s.id === change).map(s=>s.name).toString(),
          icon: 'unmute', mute: false
        })
      }
    }
    
render() {
    
    return (
      <View style={styles.container}>
        <PageControl
          style={{position:'absolute', left:0, right:0, bottom:10}}
          numberOfPages={1}
          currentPage={this.state.currentPage}
          pageIndicatorTintColor='gray'
          currentPageIndicatorTintColor='blue'
          indicatorStyle={{borderRadius: 5}}
          currentIndicatorStyle={{borderRadius: 5}}
          indicatorSize={{width:9, height:9}}
          />
        <ViewPagerAndroid
            style={styles.container}
            initialPage={0}
            peekEnable={true}
            pageMargin={-width + width/1.1}
            loadMinimal={true}
            loadMinimalSize={3}
            onPageSelected = {this.handleChange}
            // onPageScrollStateChanged = {this.onPressButtonStop}
            // onTouchCancel = {this.onPressButtonStop}
        >
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <View style={styles.slide1}>
                  <View style={{ justifyContent: 'center',alignItems: 'center', marginBottom: 20}}>
                    <Text style={styles.buttonText}>
                    Nếu nạn nhân không ho được, thì đây là trường hợp cấp cứu, họ có thể tử vong nhanh.
                    </Text>
                  </View>
                  <View style={{flexDirection:'column', marginBottom: 20}}>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Chocking5')}
                      style={styles.button}>
                        <Image style={styles.image} source={require('../Images/hocnguoilon.png')} position='absolute'/>
                        <View style={styles.overlay}/>
                    <Text style={styles.buttonText1}>Hóc người lớn</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Chocking4')}
                      style={styles.button}>
                        <Image style={styles.image} source={require('../Images/hoctresosinh.png')} position='absolute'/>
                        <View style={styles.overlay}/>
                    <Text style={styles.buttonText1}>Hóc trẻ sơ sinh</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
          </ViewPagerAndroid>
      </View>
    )
  }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
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
      height: height/3.5,
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
      height: height/3.5,
      borderRadius: 10,
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
    
    slide1: {
      // backgroundColor: 'green',
      alignItems:'center',
      flex: 1,
      height: '50%',
      width: '90%',
      borderRadius: 10,
      padding: '5.5%',
      // shadowColor: '#000',
      shadowOffset: { width: 0, height: 0 },
      // shadowOpacity: 2,
      shadowRadius: 20,
      elevation: 5,
      borderColor:'white',
      marginTop: '2.5%',
      marginBottom: '8%',
    },

    button: {
      marginBottom: 22,
      marginRight: 5,
      marginLeft: 5,
      width: width/1.3,
      height: height/3.5,
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

export default Chocking3