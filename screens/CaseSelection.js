import React, {Component} from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements'
import { YellowBox } from 'react-native';

var {width, height} = Dimensions.get('window')

class CaseSelection extends Component {

    static navigationOptions = ({ navigation }) => ({
        headerTitle:<View style={styles.headerTitle}>
          <Text style={styles.buttonText}>HƯỚNG DẪN CẤP TỐC</Text>
        </View>,
        headerRight: <TouchableOpacity style={{alignSelf: 'center', paddingRight: 10}}>
        <Icon name = 'home' type='entyco' size={35} onPress = {() => navigation.navigate('Login')}/>
        </TouchableOpacity>,
         headerTitleStyle : {flex: 1, textAlign: 'center', alignSelf:'center'},
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
              <ScrollView>
              <View style={styles.container}>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Unconscious1')}
                 style={styles.button}>
                    <Image style={styles.image} source={require('../Images/battinh.jpg')} position='absolute'/>
                    <View style={styles.overlay}/>
                    <Text style={styles.buttonText1}>Bất tỉnh</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Bleeding1')}
                 style={styles.button}>
                    <Image style={styles.image} source={require('../Images/chaymau.jpg')} position='absolute'/>
                    <View style={styles.overlay}/>
                    <Text style={styles.buttonText1}>Chảy máu</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Burn1')}
                 style={styles.button}>
                    <Image style={styles.image} source={require('../Images/vetbong.jpg')} position='absolute'/>
                    <View style={styles.overlay}/>
                    <Text style={styles.buttonText1}>Bỏng/Phỏng</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Bone1')}
                 style={styles.button}>
                    <Image style={styles.image} source={require('../Images/xuongkhop.jpg')} position='absolute'/>
                    <View style={styles.overlay}/>
                    <Text style={styles.buttonText1}>Gãy xương</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Stroke1')}
                 style={styles.button}>
                    <Image style={styles.image} source={require('../Images/dotquy.jpg')} position='absolute'/>
                    <View style={styles.overlay}/>
                    <Text style={styles.buttonText1}>Đột quỵ</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Heart1')}
                 style={styles.button}>
                  <View>
                    <Image style={styles.image} source={require('../menu-icon.png')}/>
                    <Text style={styles.buttonText}>Nhồi máu cơ tim</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Electricshock1')}
                 style={styles.button}>
                    <Image style={styles.image} source={require('../Images/diengiat.jpg')} position='absolute'/>
                    <View style={styles.overlay}/>
                    <Text style={styles.buttonText1}>Điện giật</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Drown1')}
                 style={styles.button}>
                  <View>
                    <Image style={styles.image} source={require('../menu-icon.png')}/>
                    <Text style={styles.buttonText}>Đuối nước</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Chocking1')}
                 style={styles.button}>
                    <Image style={styles.image} source={require('../Images/hoc.jpg')} position='absolute'/>
                    <View style={styles.overlay}/>
                    <Text style={styles.buttonText1}>Hóc</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Bite')}
                 style={styles.button}>
                  <View>
                    <Image style={styles.image} source={require('../menu-icon.png')}/>
                    <Text style={styles.buttonText}>Vết cắn</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Poison')}
                 style={styles.button}>
                  <View>
                    <Image style={styles.image} source={require('../menu-icon.png')}/>
                    <Text style={styles.buttonText}>Nhiễm độc</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Softtisue1')}
                 style={styles.button}>
                    <Image style={styles.image} source={require('../Images/gancobam.jpg')} position='absolute'/>
                    <View style={styles.overlay}/>
                    <Text style={styles.buttonText1}>Gân cơ, bầm</Text>
                </TouchableOpacity>
              </View>
              </ScrollView>
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
    paddingTop: 8
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
    fontSize: 18,
    alignSelf: 'center',
    top: 55
    // justifyContent: 'flex-end'
  },

  image: {
    flex: 1,
    width: width/3.5,
    height: height/5,
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
    width: width/3.5,
    height: height/5,
    borderRadius: 10,
  },

  button: {
    marginBottom: 8,
    marginRight: 5,
    marginLeft: 5,
    width: width/3.5,
    height: height/5,
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

export default CaseSelection