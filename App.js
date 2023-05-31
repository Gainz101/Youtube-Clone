import { StatusBar } from 'expo-status-bar';
import { StyleSheet,TouchableOpacity, Text, View, Image, Button, ScrollView } from 'react-native';
import styles from './styles';
import React from 'react';
import logo from './assets/yt_logo_rgb_dark.png';
import icon1 from "./assets/stream-to-tv.png";
import icon2 from "./assets/bell.png";
import icon3 from "./assets/search.png";
import icon4 from "./assets/user.png";
import icon5 from "./assets/compass.png";
import icon6 from "./assets/home.png";
import icon7 from "./assets/shorts.png";
import icon8 from "./assets/upload.png";
import icon9 from "./assets/subscriptions.png";
import icon10 from "./assets/library.png";
import Video from "./Video.js";
import thumbnail1 from "./assets/thumbnail1.png"
import thumb1 from "./assets/thumb1.jpg"
import thumb2 from "./assets/thumb2.jpg"
import thumb3 from "./assets/thumb3.jpg"
import thumb4 from "./assets/thumb4.jpg"
import thumb5 from "./assets/thumb5.jpg"
import thumb6 from "./assets/thumb6.jpg"
import thumb7 from "./assets/thumb7.jpg"
import jordan from "./assets/jordan.png"




export default function App() {
  return (
    <View style={styles.background}>
      <View style={styles.leftContainer}>
        <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.rightContainer}>
        <Image source={icon1} style={styles.icon} />
        <Image source={icon2} style={styles.icon} />
        <Image source={icon3} style={styles.icon} />
        <Image source={icon4} style={styles.icon} />
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button}>
            <Image source={icon5} style={styles.iconCompass} />   
          </TouchableOpacity>  
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>All</Text>
          </TouchableOpacity>  
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Body Building</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Gaming</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Laughter</Text>
          </TouchableOpacity>     
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Music</Text>
          </TouchableOpacity>   
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Live</Text>
          </TouchableOpacity>   
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Podcasts</Text>
          </TouchableOpacity>  
        </View>
      </ScrollView>
      
      <ScrollView vertical={true} showsVerticalScrollIndicator={false}>

      <Video picture={thumb1}></Video>
      <Video picture={thumb2}></Video>
      <Video picture={thumb3}></Video>
      <Video picture={jordan}></Video>
      <Video picture={thumb4}></Video>
      <Video picture={thumb5}></Video>
      <Video picture={thumb6}></Video>
      <Video picture={thumb7}></Video>
      

      </ScrollView>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <View>
        <View style={styles.tabBox}>
          <TouchableOpacity style={styles.tabButton}>
            <Image source={icon6} style={styles.iconBottom} />
            <Text style={styles.tabLabel}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabButton}>
            <Image source={icon7} style={styles.iconBottom} />
            <Text style={styles.tabLabel}>Shorts</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabButtonUpload}>
            <Image source={icon8} style={styles.iconUpload} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabButton}>
            <Image source={icon9} style={styles.iconBottom} />
            <Text style={styles.tabLabel}>Subscriptions</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabButton}>
            <Image source={icon10} style={styles.iconBottom} />
            <Text style={styles.tabLabel}>Library</Text>
          </TouchableOpacity>
        </View>
      </View>

  {/* {tabOptions.map(tab => (
    <TouchableOpacity
      key={tab.id}
      style={[
        styles.tabButton,
        activeTab === tab.id && styles.activeTabButton
      ]}
      onPress={() => setActiveTab(tab.id)}
    >
      <Text
        style={[
          styles.tabLabel,
          activeTab === tab.id && styles.activeTabLabel
        ]}
      >
        {tab.label}
      </Text>
    </TouchableOpacity>
  ))} */}
      <StatusBar style="auto" />
    </View>
    // <a href="https://www.flaticon.com/free-icons/notification" title="notification icons">Notification icons created by Freepik - Flaticon</a>
    // <a href="https://www.flaticon.com/free-icons/search" title="search icons">Search icons created by Freepik - Flaticon</a>
    // <a href="https://www.flaticon.com/free-icons/user" title="user icons">User icons created by Freepik - Flaticon</a>
    // <a href="https://www.flaticon.com/free-icons/compass" title="compass icons">Compass icons created by Freepik - Flaticon</a>
    // <a target="_blank" href="https://icons8.com/icon/1iF9PyJ2Thzo/home">Home</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
    // <a target="_blank" href="https://icons8.com/icon/11255/plus">Plus</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
    // <a href="https://www.flaticon.com/free-icons/column" title="column icons">Column icons created by Freepik - Flaticon</a>
    );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
