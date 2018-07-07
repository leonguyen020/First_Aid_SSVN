import React from 'react';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import CaseSelection from './screens/CaseSelection';
import Unconscious1 from './Unconscious/Unconscious1'
import Unconscious2 from './Unconscious/Unconscious2'
import Unconscious4 from './Unconscious/Unconscious4'
import Unconscious3 from './Unconscious/Unconscious3'
import Unconscious5 from './Unconscious/Unconscious5'
import Unconscious6 from './Unconscious/Unconscious6'
import Unconscious7 from './Unconscious/Unconscious7'
import Unconscious8 from './Unconscious/Unconscious8'
import Unconscious9 from './Unconscious/Unconscious9'
import Unconscious10 from './Unconscious/Unconscious10'
import Unconscious12 from './Unconscious/Unconscious12'
import Bleeding1 from './Bleeding/Bleeding1'
import Bleeding2 from './Bleeding/Bleeding2'
import Bleeding3 from './Bleeding/Bleeding3'
import Bleeding4 from './Bleeding/Bleeding4'
import Bleeding4_1 from './Bleeding/Bleeding4_1'
import Bleeding5 from './Bleeding/Bleeding5'
import Bleeding6 from './Bleeding/Bleeding6'
import Bleeding7 from './Bleeding/Bleeding7'
import Bleeding8 from './Bleeding/Bleeding8'
import Bleeding11 from './Bleeding/Bleeding11'
import Bleeding12 from './Bleeding/Bleeding12'
import Bone1 from './Bone/Bone1'
import Bone3 from './Bone/Bone3'
import Bone2 from './Bone/Bone2'
import Chocking1 from './Chocking/Chocking1'
import Chocking2 from './Chocking/Chocking2'
import Chocking3 from './Chocking/Chocking3'
import Chocking4 from './Chocking/Chocking4'
import Chocking5 from './Chocking/Chocking5'
import Drown1 from './Drown/Drown1'
import Drown2 from './Drown/Drown2'
import Bite from './Bite/Bite'
import Bite1 from './Bite/Bite1'
import Bite2 from './Bite/Bite2'
import Bite3 from './Bite/Bite3'
import Bite4 from './Bite/Bite4'
import Burn1 from './Burn/Burn1'
import Burn2 from './Burn/Burn2'
import Burn3 from './Burn/Burn3'
import Poison from './Poisoning/Poison'
import Poison1 from './Poisoning/Poison1'
import Poison2 from './Poisoning/Poison2'
import Poison3 from './Poisoning/Poison3'
import Poison4 from './Poisoning/Poison4'
import Heart1 from './Heart/Heart1'
import Heart2 from './Heart/Heart2'
import Stroke1 from './Stroke/Stroke1'
import Softtisue1 from './Softtisue/Softtisue1'
import Electricshock1 from './ElectricShock/Electricshock1'

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const RootStack = createStackNavigator(
  {
    CaseSelection: CaseSelection,
    Unconscious5: Unconscious5,
    Login: LoginScreen,
    
    Unconscious1: Unconscious1,
    Unconscious2: Unconscious2,
    Unconscious3: Unconscious3,
    Unconscious4: Unconscious4,
    
    Unconscious6: Unconscious6,
    Unconscious7: Unconscious7,
    Unconscious8: Unconscious8,
    Unconscious9: Unconscious9,
    Unconscious10: Unconscious10,
    Unconscious12: Unconscious12,

    Bleeding1: Bleeding1,
    Bleeding2: Bleeding2,
    Bleeding3: Bleeding3,
    Bleeding4: Bleeding4,
    Bleeding5: Bleeding5,
    Bleeding6: Bleeding6,
    Bleeding8: Bleeding8,
    Bleeding7: Bleeding7,
    Bleeding11: Bleeding11,
    Bleeding12: Bleeding12,
    Bleeding4_1: Bleeding4_1,

    Bone1: Bone1,
    Bone2: Bone2,
    Bone3: Bone3,
    
    Bite: Bite,
    Bite1: Bite1,
    Bite2: Bite2,
    Bite3: Bite3,
    Bite4: Bite4,

    Burn1: Burn1,

    Chocking1: Chocking1,
    Chocking2: Chocking2,
    Chocking3: Chocking3,
    Chocking4: Chocking4,
    Chocking5: Chocking5,

    Poison: Poison,
    Poison1: Poison1,
    Poison2: Poison2,
    Poison3: Poison3,
    Poison4: Poison4,

    Drown1: Drown1,
    Drown2: Drown2,

    Heart1: Heart1,
    Heart2: Heart2,

    Stroke1: Stroke1,

    Softtisue1: Softtisue1,

    Electricshock1: Electricshock1,
    // Electricshock2: Electricshock2,
    // Electricshock3: Electricshock3,
  }
  // {
  //   initialRouteName: 'Home',
  // }
)