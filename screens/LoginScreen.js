import React, {Component} from 'react';
import {  StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { YellowBox } from 'react-native';

export default class LoginScreen extends Component {

  static navigationOptions = {
        title: 'SƠ CẤP CỨU',
        headerTitleStyle: { flex: 1, textAlign: 'center', alignSelf:'center'}
  }

  constructor(props) {
    super(props)
      YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
  }

  render() {
    return (

      <View style={styles.container}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('CaseSelection')}
          style={styles.button}>
              <Image style={styles.image} source={require('../menu-icon.png')}/>
              <View style={{left: 31}}>
              <Text style={styles.buttonText}>Hướng dẫn cấp tốc</Text>
              <Text style={styles.semiButtonText}>Sơ cấp cứu trong trường hợp khẩn cấp</Text>
              </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('CaseSelection')}
          style={styles.button}>
              <Image style={styles.image} source={require('../menu-icon.png')}/>
              <View style={{left: 35}}>
              <Text style={styles.buttonText}>Học sơ cấp cứu</Text>
              <Text style={styles.semiButtonText}>Học theo phương pháp cụ thể và bài bản</Text>
              </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('CaseSelection')}
          style={styles.button}>
             <Image style={styles.image} source={require('../menu-icon.png')}/>
             <View style={{left: 35}}>
             <Text style={styles.buttonText}>Gọi cứu trợ khẩn cấp</Text>
             <Text style={styles.semiButtonText}>Liên lạc đến các tổ chức cứu trợ</Text>
             </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('CaseSelection')}
          style={styles.button}>
            
             <Image style={styles.image} source={require('../menu-icon.png')}/>
             <View style={{left: 27}}>
             <Text style={styles.buttonText}>Hồ sơ cá nhân</Text>
             <Text style={styles.semiButtonText}>Cài đặt danh bạ và thông tin cá nhân</Text>
             </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('CaseSelection')}
          style={styles.button}>
           
            <Image style={styles.image} source={require('../menu-icon.png')}/>
            <View style={{right: 5}}>
             <Text style={styles.buttonText}>Giới thiệu</Text>
             <Text style={styles.semiButtonText}>Thông tin về ứng dụng</Text>
             </View>
           
          </TouchableOpacity> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },

  button: {
    flex: 1,
    marginBottom: '5%',
    width: 270,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3',
    height: 80,
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },

  buttonText: {
    // paddingLeft: 50,
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
  },
  semiButtonText: {
    // paddingLeft: 50,
    color: 'black',
    fontSize: 10,
  },
  image: {
    flex: 1,
    width: 38,
    height: 38,
    borderColor: 'red',
    // borderWidth: 5,
    position: 'absolute',
    left: 20
  }
});
