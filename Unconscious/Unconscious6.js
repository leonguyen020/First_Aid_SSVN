import React, {Component} from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, Image, ViewPagerAndroid, BackHandler, Dimensions, AppState, TouchableHighlight } from 'react-native'
import PageControl from 'react-native-page-control';
import { YellowBox, Animated } from 'react-native';
import { Icon } from 'react-native-elements'
import { HeaderBackButton } from 'react-navigation'

var {width, height} = Dimensions.get('window')
var SoundPlayer = require('react-native-sound');
// SoundPlayer.setCategory('Playback', true)
var song = null;
var list = [
  {
    id: 0,
    name: 'unconsious6_1.mp3'
    
  },
  {
    id: 1,
    name: 'unconsious6_2.mp3'
  },
  {
    id: 2,
    name: 'unconsious6_3.mp3'
  },
  {
    id: 3,
    name: 'unconsious6_4.mp3'
  },
  {
    id: 4,
    name: 'unconsious6_5.mp3'
  },
]

class Unconscious6 extends Component {
    
    static navigationOptions = ({ navigation }) => ({
        headerTitle:<View style={styles.headerTitle}>
          <Text style={styles.buttonText}>BẤT TỈNH</Text>
          <Text style={styles.text}>Nạn nhân nằm sấp</Text>
        </View>,
        headerLeft: <HeaderBackButton onPress={() => navigation.goBack() && song.stop(() => song = null)}/>,
        headerRight: <TouchableOpacity style={{alignSelf: 'center', paddingRight: 10}}>
        <Icon name = 'home' type='entyco' size={45} onPress = {() => navigation.navigate('Login') && song.stop(() => song = null)}/>
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
          mute: false, name: '', icon: 'unmute', showPic: false
        }
        YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
        this.handleChange = this.handleChange.bind(this)
        this.onPressButtonStop = this.onPressButtonStop.bind(this)
        this.onPressButtonMute = this.onPressButtonMute.bind(this)
        // this.handleController = this.handleController.bind(this)
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
            song = new SoundPlayer('unconsious6.mp3', SoundPlayer.MAIN_BUNDLE, () => {
                song.play(()=> song = new SoundPlayer('unconsious6_1.mp3', SoundPlayer.MAIN_BUNDLE, () => {
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
      // this.setState({showPic: false})
      let change = nativeEvent.position
      if (this.state.currentPage !== change) {
        this.setState({currentPage: change, 
          name: list.filter(s=>s.id === change).map(s=>s.name).toString(),
          
        })
        return true
      }
      else return false
    //   var pages = new Array(this.numberOfPages)
    //   for (let i = 0; i < pages.length; i++) {
    //     if(i == this.state.currentPage){
    //       var elements =  this.state.currentPage
    //       pages[i] = 'flex'
    //       var loading = pages[i]
    //     }
    //     else {
    //       pages[i] = 'none'
    //       var loading = pages[i]
    //   }
    // }
      // var arrayPage = new Array(numberOfPages)
      // for (let i = 0; i < arrayPage.length; i++) {
      //   arrayPage[i] = 0
      //   if (i == this.state.currentPage) {
      //     arrayPage[i] = 1
      //   }
      // }
      // else return loading = 0
      // let loading = 0
      // for (let i = 0; i < 5; i++) {
      //   loaing = asd;        
      // }
    }

    // handleControlled(){
    //   if(this.state.currentPage){
    //     var loading = 'flex'
    //     this.setState({showPic: false})
    //   }
      
    // }

render() {
    
    // var pages = new Array(this.numberOfPages)
    // for (let i = 0; i < pages.length; i++) {
    //   if(i == this.state.currentPage){
    //     var elements =  this.state.currentPage
    //     pages[i] = 'flex'
    //     var loading = pages[i]
    //   }
    //   else {
    //     pages[i] = 'none'
    //     var loading = pages[i]
    //   }
    // }

    return (
      <View style={styles.container}>
        <PageControl
          style={{position:'absolute', left:0, right:0, bottom:10}}
          numberOfPages={5}
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
            // loadMinimalSize={3}
            onPageSelected = {this.handleChange}
            onPageScrollStateChanged = {this.onPressButtonStop}
        >
              <View style={{justifyContent: 'center', alignItems: 'center'}} onLayout={this.onPressButtonPlay}>
                <View style={styles.slide1}>
                
                  <Image style={styles.image} source={require('../GIF/Unconsious6-1.gif')}/>
                
                  <Text style={styles.semiButtonText}>
                  Qùy xuống cạnh nạn nhân. Đặt tay nạn nhân phía bạn lên qua đầu cơ thể nạn nhân.
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
                  <Image style={styles.image} source={require('../GIF/Unconsious6-2.gif')} display={this.state.currentPage == true ? 'flex' : 'none'}/>
                  <Text style={styles.semiButtonText}>
                  Kéo bắp chân phía bên kia của nạn nhân chéo lên chân còn lại.
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
                  <Image style={styles.image} source={require('../GIF/Unconsious6-3.gif')} display={this.state.currentPage == true ? 'flex' : 'none'}/>
                  <Text style={styles.semiButtonText}>
                  Dùng 2 tay lăn nạn nhân về phía bạn.
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
                  <Image style={styles.image} source={require('../GIF/Unconsious6-4.gif')}/>
                  <Text style={styles.semiButtonText}>
                  Kéo khủy gối bên kia của nạn nhân tạo thế khóa.
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
                  <Image style={styles.image} source={require('../GIF/Unconsious6-5.gif')}/>
                  <Text style={styles.semiButtonText}>
                  Đặt bàn tay phía bên kia lên tay còn lại để nâng đầu nạn nhân lên làm thông thoáng đường thở. 
                  Hướng miệng nạn nhân về phía mặt đất để có thể nôn/ ợ ra mặt đất.
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
        marginBottom: '5%',
    },
  
    button: {
      marginBottom: 20,
      marginRight: 5,
      marginLeft: 5,
      width: width/1.3,
      height: height/5.5,
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

export default Unconscious6