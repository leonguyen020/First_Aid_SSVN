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
  {
    id: 0,
    name: 'unconscious3.mp3'
  },
]

class Unconscious3 extends Component {
    
    static navigationOptions = ({ navigation }) => ({
        headerTitle:<View style={styles.headerTitle}>
          <Text style={styles.buttonText}>BẤT TỈNH</Text>
          <Text style={styles.text}>Mất ý thức</Text>
        </View>,
        headerLeft: <HeaderBackButton onPress={() => navigation.goBack() && song.stop(()=> song = null)}/>,
        headerRight: <TouchableOpacity style={{alignSelf: 'center', paddingRight: 10}}>
        <Icon name = 'home' type='entyco' size={35} onPress = {() => navigation.navigate('Login') && song.stop(()=> song = null)}/>
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

    

    onPressButtonPlay() {
        if(song == null){
          this.onPressButtonPlay1
            song = new SoundPlayer('unconscious3.mp3', SoundPlayer.MAIN_BUNDLE, () => {
                      song.setNumberOfLoops(-1).play(()=> song.stop())
            })
            
        }
    }

    onPressButtonPlay1() {
      if(song != null){
          song.stop()
          song = new SoundPlayer('unconscious3_2.mp3', SoundPlayer.MAIN_BUNDLE, () => {
            song.play(()=> song = new SoundPlayer('unconscious3_2_1.mp3', SoundPlayer.MAIN_BUNDLE, () => {
                song.setNumberOfLoops(-1).play(()=>song.stop())
            }))
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
          numberOfPages={2}
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
                  Nạn nhân không có dấu hiệu phản ứng là bất tỉnh.
                  </Text>
                  <Text style={styles.semiButtonText}>
                  Kiểm tra hơi thở nạn nhân.
                  </Text>
                  <Text style={styles.buttonText}>
                  NẠN NHÂN NẰM NGỬA:
                  </Text>
                  <Text style={styles.semiButtonText}>
                  Nâng cằm và ngửa nạn nhân ra sau.
                  </Text>
                  <Text style={styles.semiButtonText}>
                  Ghé tai vào vùng mũi- miệng của nạn nhân, nghe có tiếng thở hay không.
                  </Text>
                  <Text style={styles.semiButtonText}>
                  Mắt hướng về bụng, ngực xem nhịp thở phập phồng hay không.
                  </Text>
                  <Text style={styles.buttonText}>
                  NẠN NHÂN NẰM SẤP:
                  </Text>
                  <Text style={styles.semiButtonText}>
                  Ghé tai vào vùng mũi của nạn nhân.
                  </Text>
                  <Text style={styles.semiButtonText}>
                  Mắt hướng vào lưng để xem có dấu hiệu thở hay không.
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
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Unconscious5') && song.stop()}
                        style={styles.button}>
                            <View>
                                <Text style={styles.buttonText}>Còn thở</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Unconscious10') && song.stop()}
                        style={styles.button}>
                            <View>
                                <Text style={styles.buttonText}>Không thở</Text>
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
    slide: {
        flex: 1,
        justifyContent: 'center',
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
      // marginBottom: 8,
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

export default Unconscious3