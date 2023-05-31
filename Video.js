import { StyleSheet,TouchableOpacity, Text, View, Image, Button, ScrollView, UIManager } from 'react-native';
import styles from './styles';
import React from 'react';
import threeDots from "./assets/threeDots.png";
import VideoText from "./assets/VideoText.jpg";



export default function Video(props) {
    return(
    <View style={styles.VideoContainer}>
        <Image source={props.picture} style={styles.VideoImage} />
        
        
        {/* <View style={styles.VideoTextContainer}> */}
        {/* <Image source={threeDots} style={styles.ThreeDots}/>
        <Text style={styles.VideoTitle}>Some text 1</Text>
        <Text style={styles.VideoInfo}>Some text 2</Text> */}
        {/* </View> */}
    </View>
    );
    
}