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
    name: 'unconscious9_1.mp3'
  },
  {
    id: 1,
    name: 'unconscious9_2.mp3'
  },
  {
    id: 2,
    name: 'unconscious9_3.mp3'
  },
  {
    id: 3,
    name: 'unconscious9_4.mp3'
  },
  {
    id: 4,
    name: 'unconscious9_5.mp3'
  },
]

class Unconscious9 extends Component {
    
    static navigationOptions = ({ navigation }) => ({
        headerTitle:<View style={styles.headerTitle}>
          <Text style={styles.buttonText}>BẤT TỈNH</Text>
          <Text style={styles.text}>Nạn nhân nằm ngửa</Text>
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
        song = new SoundPlayer('unconscious9.mp3', SoundPlayer.MAIN_BUNDLE, () => {
            song.play(()=> song = new SoundPlayer('unconscious9_1.mp3', SoundPlayer.MAIN_BUNDLE, () => {
                song.setNumberOfLoops(-1).play(()=>song.stop())
            }))
        });
      }
    }
    
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
          numberOfPages={6}
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
                  <Image style={styles.image} source={require('../GIF/Unconsious9-1.gif')}/>
                  <Text style={styles.text}>
                  Nạn nhân bất tỉnh, còn thở ở tư thế nằm ngửa
                  </Text>
                  <Text style={styles.semiButtonText}>
                  Qùy xuống bên cạnh nạn nhân. Đặt tay nạn nhân phía bạn lên vị trí cao qua đầu cơ thể nạn nhân.
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
                  <Image style={styles.image} source={require('../GIF/Unconsious9-2.gif')}/>
                  <Text style={styles.semiButtonText}>
                  Đặt cánh tay còn lại của nạn nhân ở vị trí chéo với bàn tay đặt lên ngực.
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
                  <Image style={styles.image} source={require('../GIF/Unconsious9-3.gif')}/>
                  <Text style={styles.semiButtonText}>
                  Nâng khuỷa gối chân bên kia của nạn nhân lên. 
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
                  <Image style={styles.image} source={require('../GIF/Unconsious9-4.gif')}/>
                  <Text style={styles.semiButtonText}>
                  1 tay giữ vai, 1 tay giữ mông, lăn nạn nhân về phía bạn.
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
                  <Image style={styles.image} source={require('../GIF/Unconsious9-5.gif')}/>
                  <Text style={styles.semiButtonText}>
                  Sau đó nâng đầu nạn nhân lên 1 chút để làm thoáng đường thở. 
                  Miệng của nạn nhân hướng về mặt sàn để họ có thể nôn, ợ ra sàn.
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
                <View style={{ justifyContent: 'center',alignItems: 'center', marginBottom: 20}}>
                  <Text style={styles.buttonText}>
                  LƯU Ý
                  </Text>
                  <Text style={styles.semiButtonText}>
                  Xử lý các thương tích và vấn đề khác (nếu có) theo thứ tự ưu tiên bắt buộc như sau:
                  </Text>
                </View>
                    <View style={{justifyContent: 'center'}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Bleeding1') && song.stop()}
                        style={styles.button}>
                            <View>
                              <Image style={styles.image1} source={require('../menu-icon.png')}/>
                              <Text style={styles.text}>Mất máu</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Burn1') && song.stop()}
                        style={styles.button}>
                            <View>
                              <Image style={styles.image1} source={require('../menu-icon.png')}/>
                              <Text style={styles.text}>Bỏng/phỏng</Text>
                            </View>
                        </TouchableOpacity>
                    
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Bone1') && song.stop()}
                        style={styles.button}>
                            <View>
                              <Image style={styles.image1} source={require('../menu-icon.png')}/>
                              <Text style={styles.text}>Gãy xương</Text>
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
      fontSize: 16,
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
      marginBottom: 22,
      marginRight: 5,
      marginLeft: 5,
      width: width/1.3,
      height: height/5.1,
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

    image1: {
      width: 60,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      alignContent: 'center',
      alignSelf: 'center',
      marginBottom: 24
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

export default Unconscious9