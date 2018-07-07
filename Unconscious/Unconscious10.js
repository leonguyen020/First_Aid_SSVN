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

]

class Unconscious10 extends Component {
    
    static navigationOptions = ({ navigation }) => ({
        headerTitle:<View style={styles.headerTitle}>
          <Text style={styles.buttonText}>BẤT TỈNH</Text>
          <Text style={styles.text}>Không thở</Text>
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
        this.handleChange = this.handleChange.bind(this)
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
    //         song = new SoundPlayer('unconsious6.mp3', SoundPlayer.MAIN_BUNDLE, () => {
    //             song.play(()=> song = new SoundPlayer('unconsious6_1.mp3', SoundPlayer.MAIN_BUNDLE, () => {
    //                 song.setNumberOfLoops(-1).play(()=>song.stop())
    //             }))
    //         });
            
    //     }
    // }

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
    //     // else {
    //     //     if (state === "idle") {
    //     //         song.stop().release()
    //     //         song = new SoundPlayer(this.state.name, SoundPlayer.MAIN_BUNDLE, () => {
    //     //             song.setNumberOfLoops(-1).play(()=>song.release())
    //     //         });
    //     //         song.setVolume(0)
    //     //     }
    //     //     else song.stop()
    //     // }
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
            // onPageScrollStateChanged = {this.onPressButtonStop}
            // onTouchCancel = {this.onPressButtonStop}
        >
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <View style={styles.slide1}>
                  <Image style={styles.image}/>
                  <Text style={styles.text}>
                  Khi nạn nhân không có dấu hiệu thở hoặc thở bất thường.
                  </Text>
                  <Text style={styles.semiButtonText}>
                  Gọi cấp cứu 115 và gọi thêm người trợ giúp.
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
                  <Text style={styles.text}>
                  Cách hồi sinh tim phổi CPR. Ấn tim ngoài lồng ngực.
                  </Text>
                  <Text style={styles.semiButtonText}>
                  Để nạn nhân nằm trên mặt phẳng cứng, khô ráo. Nới lỏng quần áo chặt và trang sức 
                  to bản trên ngực nạn nhân nếu có.
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
                  Quỳ 2 chân sát bên ngực nạn nhân, 2 bàn tay lồng hoặc đặt chồng lên nhau.
                  </Text>
                  <Text style={styles.semiButtonText}>
                  Lực đi theo phương thẳng đứng xuống sâu 1/3 bề dày lòng ngực nạn nhân với tốc độ ép 100 - 120 lần/phút. 
                  Sau 30 lần ấn tim ngoài lồng ngực, thực hiện thao tác thổi oxy vào phổi nạn nhân bằng cách 
                  đẩy cổ nạn nhân ngửa ra sau rồi thổi vào miệng hoặc mũi của nạn nhân. Quan sát lồng ngực của 
                  nạn nhân phồng nhẹ là thổi đúng cách và tiếp tục chu trình ấn tim ngoài lồng ngực 30 lần, 
                  sau đó là 2 lần thổi ngạc vào nạn nhân. Tiếp tục như vậy cho đến khi nào xe cứu thương đến.
                  </Text>

                  <View style={{ position: 'absolute', margin: 30, alignSelf: 'flex-end', paddingRight:20}}>

                    <TouchableOpacity onPress={this.onPressButtonMute.bind(this)}>
                      
                      <Icon name = {this.state.icon} type='octicon' size={25}/> 

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
        fontSize: 14,
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

export default Unconscious10