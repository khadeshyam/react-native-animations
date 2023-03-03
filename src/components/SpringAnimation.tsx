import { View, Text, Animated, Button, StyleSheet, Dimensions} from 'react-native'
import React from 'react'

const SpringAnimation = () => {
  const { width, height } = Dimensions.get('window');
  const position = new Animated.ValueXY({ x: 0, y: 0 });

  const animateSpring = Animated.spring(position, {
    toValue: { x: width - 100, y: height - 80 - 150 },
    speed: 12,
    bounciness: 25,
    useNativeDriver: true,
  });

  const resetBack = Animated.spring(position, {
    toValue: { x:0, y: 0 },
    useNativeDriver: true,
  });

  return (
    <View style={{ flex: 1 }}>
      <Animated.View style={{
        height: 80,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        transform: [
          { translateX: position.x },
          { translateY: position.y },
        ]
      }}>
        <Text>Box</Text>
      </Animated.View>

      <View style = {styles.bottomBar}>
      <Button
        title="start animation"
        color="#841584"
        onPress={() => animateSpring.start()}
      />
      <Button
        title="Reset animation"    
        color="#841584"
        onPress={() =>  resetBack.start()}
      />
     </View>

    </View>
  )
}

const styles = StyleSheet.create({
  bottomBar:{
     position:'absolute',
     flexDirection:'row',
     justifyContent:'space-between',
     width:'100%',
     padding:10,
     bottom:0,
     left:0,
  }
});
export default SpringAnimation;