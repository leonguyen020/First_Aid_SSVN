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
  {
    id: 0,
    name: 'unconscious1.mp3'
  },
  {
    id: 1,
    name: 'unconscious2.mp3'
  },
]

class Bleeding4_1 extends Component {
    
    static navigationOptions = ({ navigation }) => ({
        headerTitle:<View style={styles.headerTitle}>
          <Text style={styles.buttonText}>CHẢY MÁU</Text>
          <Text style={styles.text}>Kiểu tra dấu hiệu sốc</Text>
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
            song = new SoundPlayer('unconscious1.mp3', SoundPlayer.MAIN_BUNDLE, () => {
                song.setNumberOfLoops(-1).play(()=>song.release())
                song.setVolume(1)
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
            onPageScrollStateChanged = {this.onPressButtonStop}
            // onTouchCancel = {this.onPressButtonStop}
        >
              <View style={{justifyContent: 'center', alignItems: 'center'}} onLayout={this.onPressButtonPlay}>
                <View style={styles.slide1}>
                  <Image style={styles.image}/>
                  <Text style={styles.semiButtonText}>
                  Sốc là hiện tượng cơ thể không có đủ máu lưu thông để duy trì mức huyết áp và 
                  cung cấp oxy cần thiết cho các mô cơ thể. Sốc là tình trạng khẩn cấp đe dọa mạng sống.
                  </Text>
                  <Text style={styles.text2}>
                  Dấu hiệu sốc:
                  </Text>
                  <Text style={styles.semiButtonText}>
                  - Làn da xanh xao, nhờn lạnh, cảm thấy khát nước;
                  </Text>
                  <Text style={styles.semiButtonText}>
                  - Thở nhanh, hơi thở cạn;
                  </Text>
                  <Text style={styles.semiButtonText}>
                  - Mạch đập nhanh, yếu;
                  </Text>
                  <Text style={styles.semiButtonText}>
                  - Các dấu hiệu của việc mất chất lỏng cơ thể;
                  </Text>
                  <Text style={styles.semiButtonText}>
                  - Qụy dần và bất tỉnh;
                  </Text>
                  <Text style={styles.text2}>
                  Xử lí: 
                  </Text>
                  <Text style={styles.semiButtonText}>
                  Gọi 115 kêu xe cấp cứu.
                  </Text>
                  <Text style={styles.semiButtonText}>
                  - Nếu nạn nhân còn tỉnh táo, đặt nằm ngửa, 2 chân nâng cao.
                  </Text>
                  <Text style={styles.semiButtonText}>
                  - Nếu nạn nhân bất tỉnh, đặt nằm nghiêng 1 bên, cho 2 chân nâng cao.
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
        fontSize: 12,
        alignSelf:'flex-start'
    },
    text: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 15,
      bottom: 3
    },

    text2: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 12,
      // bottom: 3
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

    image: {
        width: '112%',
        height: '60%',
        marginBottom: '5%'
    },

    button: {
      marginBottom: 8,
      marginRight: 5,
      marginLeft: 5,
      width: 120,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#2196F3',
      height: 50,
      borderRadius: 6,
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

export default Bleeding4_1