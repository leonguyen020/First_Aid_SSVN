import React, {Component} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ViewPagerAndroid, BackHandler, Dimensions, AppState } from 'react-native'
import PageControl from 'react-native-page-control';
import { YellowBox } from 'react-native';
import { Icon } from 'react-native-elements'
import { HeaderBackButton } from 'react-navigation'

var {width, height} = Dimensions.get('window')
var SoundPlayer = require('react-native-sound');
SoundPlayer.setCategory('Playback', true)
var song = null;
var list = [
//   {
//     id: 0,
//     name: 'unconsious6.mp3'
//   },
  {
    id: 0,
    name: 'unconscious2_1.mp3'
  },
  {
    id: 1,
    name: 'unconscious2_2.mp3'
  },
]

class Unconscious2 extends Component {
    
    static navigationOptions = ({ navigation }) => ({
        headerTitle:<View style={styles.headerTitle}>
          <Text style={styles.buttonText}>BẤT TỈNH</Text>
          <Text style={styles.text}>Kiểm tra phản ứng của nạn nhân</Text>
        </View>,
        headerLeft: <HeaderBackButton onPress={() => navigation.goBack() && song.stop(()=>song = null)}/>,
        headerRight: <TouchableOpacity style={{alignSelf: 'center', paddingRight: 10}}>
        <Icon name = 'home' type='entyco' size={35} onPress = {() => navigation.navigate('Login') && song.stop(()=> song = null)}/>
        </TouchableOpacity>,
        //  headerTitleStyle : {flex: 1, textAlign: 'center',alignSelf:'center', justifyContent: 'center', alignItems: 'center'},
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
          mute: false, name: '', icon: 'unmute', stop: true, appState: AppState.currentState
        }
        YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
        this.handleChange = this.handleChange.bind(this)
        this.onPressButtonStop = this.onPressButtonStop.bind(this)
        this.onPressButtonMute = this.onPressButtonMute.bind(this)
    }

    componentWillMount() {
      BackHandler.addEventListener('hardwareBackPress', function() {
        if (song != null) {song.stop(()=> song = null)}
        return false;
      });
      // AppState.removeEventListener('change', this.handleAppStateChange);
      
    }
    componentDidMount(){
      AppState.addEventListener('change', this.handleAppStateChange)
    }

    handleAppStateChange(currentAppState) {
      if(currentAppState == "background" ) {
          song.stop()
      } 
      if(currentAppState == "active") {
        song.play()
      }
    }

    onPressButtonPlay() {
        if(song == null){
            song = new SoundPlayer('unconscious2_1.mp3', SoundPlayer.MAIN_BUNDLE, () => {
                    song.setNumberOfLoops(-1).play(()=>song.stop())
            });  
        }
    }

    // onPressButtonPause() {
    //   // if(song != null) {
    //   //   if(this.state.pause) // play resume
    //   //     song.play();
    //   //   else 
    //     song.pause();
  
    //     this.setState({pause: true});
    //   // }
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

    onPressButtonStop(state) {
        if(this.state.icon === "unmute"){
            if (state === "idle") {
                song.stop().release()
                song = new SoundPlayer(this.state.name, SoundPlayer.MAIN_BUNDLE, () => {
                    song.setNumberOfLoops(-1).play(()=>song.release())
                });
            }
            else song.stop()
        }
        // else {
        //     if (state === "idle") {
        //         song.stop().release()
        //         song = new SoundPlayer(this.state.name, SoundPlayer.MAIN_BUNDLE, () => {
        //             song.setNumberOfLoops(-1).play(()=>song.release())
        //         });
        //         song.setVolume(0)
        //     }
        //     else song.stop()
        // }
    }

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
          numberOfPages={3}
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
            onPageScrollStateChanged = {this.onPressButtonStop}
            // onTouchCancel = {this.onPressButtonStop}
        >
              <View style={{justifyContent: 'center', alignItems: 'center'}} onLayout={this.onPressButtonPlay}>
                <View style={styles.slide1}>
                  <Image style={styles.image}/>
                  <Text style={styles.semiButtonText}>
                  Hỏi lớn “Anh/ chị/ em/ cô/ chú ơi có sao không?”.
                  </Text>

                  <View style={{ position: 'absolute', margin: 30, alignSelf: 'flex-end', paddingRight:20}}>
                    <TouchableOpacity onPress={this.onPressButtonMute.bind(this)}>
                      <Icon name = {this.state.icon} type='octicon' size={25}/>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <View style={styles.slide1}>
                  <Image style={styles.image}/>
                  <Text style={styles.semiButtonText}>
                  Nếu nạn nhân không có phản ứng, tiếp tục hỏi lớn và lắc mạnh vai hoặc 
                  đập vào mu bàn tay.
                  </Text>

                  <View style={{ position: 'absolute', margin: 30, alignSelf: 'flex-end', paddingRight:20}}>

                    <TouchableOpacity onPress={this.onPressButtonMute.bind(this)}>
                      
                      <Icon name = {this.state.icon} type='octicon' size={25}/> 

                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <View style={styles.slide1}>
                
                  <Text style={styles.buttonText}>TÌNH TRẠNG HIỆN TẠI CỦA NẠN NHÂN?</Text>

                    <View style={{flexDirection:'row', marginTop: '15%'}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Unconscious4') && song.stop(()=>song = null)}
                        style={styles.button}>
                            <View>
                                <Text style={styles.text}>Còn ý thức</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Unconscious3') && song.stop(()=>song = null)}
                        style={styles.button}>
                            <View>
                                <Text style={styles.text}>Mất ý thức</Text>
                            </View>
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
        fontSize: 17
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
    // button: {
    //   backgroundColor:'blue',
    // },

    image: {
        width: '112%',
        height: '60%',
        marginBottom: '5%'
    },

    button: {
      marginBottom: 8,
      marginRight: 4,
      marginLeft: 4,
      width: 125,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#2196F3',
      borderRadius: 10,
      backgroundColor: 'white',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.2,
      shadowRadius: 6,
      elevation: 7,
      borderColor: 'blue',
      borderColor:'black',
      borderWidth: 1
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

export default Unconscious2