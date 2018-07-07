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
    name: 'unconscious8_1.mp3'
  },
  {
    id: 1,
    name: 'unconscious8_2.mp3'
  },
  {
    id: 2,
    name: 'unconscious8_3.mp3'
  },
  {
    id: 3,
    name: 'unconscious8_4.mp3'
  },
]

class Unconscious8 extends Component {
    
    static navigationOptions = ({ navigation }) => ({
        headerTitle:<View style={styles.headerTitle}>
          <Text style={styles.buttonText}>BẤT TỈNH</Text>
          <Text style={styles.text}>Nạn nhân nằm ngửa CÓ chấn thương cột sống cổ</Text>
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
        song = new SoundPlayer('unconscious8.mp3', SoundPlayer.MAIN_BUNDLE, () => {
            song.play(()=> song = new SoundPlayer('unconscious8_1.mp3', SoundPlayer.MAIN_BUNDLE, () => {
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
            loadMinimalSize={3}
            onPageSelected = {this.handleChange}
            onPageScrollStateChanged = {this.onPressButtonStop}
            // onTouchCancel = {this.onPressButtonStop}
        >
              <View style={{justifyContent: 'center', alignItems: 'center'}} onLayout={this.onPressButtonPlay}>
                <View style={styles.slide1}>
                  <Image style={styles.image}/>
                  <Text style={styles.text2}>
                  Trường hợp nạn nhân bất tỉnh, còn thở và có nghi ngờ chấn thương cột sống cổ thường do va 
                  chạm mạnh hoặc có rơi té từ trên cao.
                  </Text>
                  <Text style={styles.semiButtonText}>
                  Cần phải có từ 2 đến 3 người trợ giúp để xử lý trường hợp này.
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
                  Bạn sẽ làm nhóm trưởng để xác định lăn nạn nhân về phía nào là tốt nhất cho họ. 
                  Sau đó, đưa cánh tay sẽ lăn qua của nạn nhân lên cao hoặc ngang vai, để khi lăn nghiêng thì nạn 
                  nhân sẽ nằm lên vai/ cánh tay đó. Nhóm trưởng gọi thêm 2, 3 người trợ giúp, quỳ về phía mà nạn nhân 
                  sẽ được lăn nghiêng về phía đó. Nhóm trưởng quỳ gối thấp trước đầu của nạn nhân, 2 tay giữ chắt 
                  vùng cơ cổ, vai, hạ thấp 2 cánh tay, ôm kẹp chắt phần cổ, tai và đầu của nạn nhân.
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
                  Những người trợ giúp sẽ kéo sát cánh tay còn lại của nạn nhân ép vào thân mình của nạn nhân. 
                  Tay của người trợ giúp bám chắc vào phần thân, bao gồm cả cánh tay của nạn nhân ở vị trí vai, hông, 
                  đùi và chân. Các cánh tay của người trợ giúp cần để chéo nhau để tạo lực chắc chắn.
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
                  Nhóm trưởng đảm bảo những người trợ giúp ở đúng tư thế và đếm "1, 2, 3" để ra hiệu 
                  lệnh. Khi tất cả sẵn sàng, nhóm trưởng ra hiệu lệnh để đồng bộ lăn phần đầu, cổ, cột sống và 
                  toàn thân c ủa nạn nhân sao cho đầu, cổ , cột sống và toàn thân của nạn nhân khi lăn trên 1 đường 
                  thẳng và cùng 1 thời điểm, nhằm tránh mọi va chạm vào tủy sống, vì va chạm tủy sống có thể dẫn 
                  đến liệt người nạn nhân.
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
                    <View style={{flexDirection:'column', marginBottom: 20}}>
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
        fontSize: 14.5,
    },
    text: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 12,
      bottom: 3,
      alignSelf: 'center'
    },
    text2: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 17,
      bottom: 5,
      alignSelf: 'center'
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

export default Unconscious8