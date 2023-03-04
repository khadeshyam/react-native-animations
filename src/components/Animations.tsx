import { View, Text, Animated, Button, StyleSheet, Dimensions } from 'react-native'
import React,{useRef} from 'react'

const Animations = () => {
  const { width, height } = Dimensions.get('window');

  const position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  //spring animation
  const springAnimation = Animated.spring(position, {
    toValue: { x: width - 100, y: height - 80 - 150 },
    speed:12,
    bounciness: 25,
    useNativeDriver: true,
  });

    //linear animations
  const linearXYanimationFront = Animated.timing(position, {
    toValue: { x: width - 100, y: height - 80 - 150 },
    duration:2000,
    useNativeDriver: true,
  });


  const linearXYanimationBack = Animated.timing(position, {
    toValue: { x: 0, y: 0 },
    duration:2000,
    useNativeDriver: true,
  });


  //rotation using interpolation
  const rotate = position.x.interpolate({
     inputRange:[0,width - 100],
      outputRange:["0deg","360deg"]
  })
  
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
          {rotate:rotate}
        ]
      }}>
        <Text>Box</Text>
      </Animated.View>

      <View style={styles.bottomBar}>
        <Button
          title="start animation"
          color="#841584"
          onPress={() => linearXYanimationFront.start()}
        />
        <Button
          title="Reset animation"
          color="#841584"
          onPress={() => linearXYanimationBack.start()}
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  bottomBar: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
    bottom: 0,
    left: 0,
  }
});
export default Animations;