import React from 'react';
import {View,Text} from 'react-native';

const Header = (props) => {
  
  const {textStyle,viewStyle}=styles;
  
  return (
     <View style={styles.viewStyle}>
       <Text style={styles.textStyle}>
          {props.headerText}
      </Text> 
    </View> 
  );
};

const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    backgroundColor: 'F8F8F8',
    alignItems: 'center',
    justifyContent:'center',
    paddingTop: 15,
    height: 60,
    shadowColor: '#000',
    shadowOffset: {width: 0,height:2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
}

export default Header;
