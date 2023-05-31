import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  background:{
    flex: 1,
    // backgroundColor:'#181818',
    backgroundColor:'#0F0F0F',
    justifyContent: 'flex-start', // Align items vertically at the start
    alignItems: 'flex-start', // Align items horizontally at the start
  },
  leftContainer: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'flex-start',
    paddingTop: 70, // Optional: Add padding to adjust the position of the image
    paddingLeft: 15,
  },
  rightContainer: {
    paddingTop: 47,
    position: 'absolute',
    top: 20,
    right: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  logo: {
    width: 95, // Adjust the width as needed based on the actual image size
    height: 20, // Adjust the height as needed based on the actual image size
  },
  icon: {
    width: 25,
    height: 25,
    marginHorizontal: 7, // Adjust the margin as needed for equal spacing
  },
  iconBottom: {
    width: 22,
    height: 22,
  },
  iconCompass:{
    width: 14,
    height: 14,
  },
  iconUpload:{
    width: 35,
    height: 35,
  },
  buttonRow: {
    flexDirection: 'row',
    // flexDirection:"column",
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    // marginBottom: 10,
    paddingHorizontal:4,
    overflow:'scroll',
    paddingVertical: 22, // Adjust the margin as needed for equal spacing
  },
  button: {
    // backgroundColor: '#3d3d3d',

    backgroundColor: '#272727',

    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    borderRadius:8,
    marginHorizontal: 4, // Adjust the margin as needed for equal spacing

    
  },
  activeButton:{
    backgroundColor: '#ffffff',

    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    borderRadius:8,
    marginHorizontal: 4, // Adjust the margin as needed for equal spacing
    color:"black",
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 12,
    // paddingHorizontal:10,
    paddingBottom:14,

  },
  buttonTextCompass: {
    color: '#ffffff',
    fontSize: 12,
    // paddingHorizontal:10,
    paddingBottom:14,

  },
  tabBox: {
    borderColor: '#aaaaaa',
    borderTopWidth: .7,
    maxHeight:81,
    width: 392,
    flex: 1,
    // backgroundColor:'#181818',
    backgroundColor:'#0F0F0F',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent:'space-evenly',
    paddingBottom:35,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#ffffff',
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabButtonUpload: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom:5,
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: '#ff0000',
  },
  tabLabel: {
    paddingTop:3,
    fontSize: 9,
    color: '#ffffff',
  },
  activeTabLabel: {
    color: '#ff0000',
  },
  VideoContainer:{
    // flex: 1,
    // alignItems: 'center',
    // // justifyContent:'center',
    // justifyContent: 'space-between', // Change from 'center' to 'space-between'
    // flexDirection: 'column', // Add this line to ensure vertical arrangement
    // paddingBottom: 0, // Change the value to 0
  },
  VideoImage:{
    width: 392,
    height:300,
    resizeMode: 'contain',
  },
  VideoTextContainer:{
    justifyContent: 'flex-start', // Align items vertically at the start
    alignItems: 'flex-start', // Align items horizontally at the start

  },
  ThreeDots:{
    width: 14,
    height: 14,
  },
  VideoTitle:{
    color:"#ffffff",
    fontSize:25,
  },
  VideoInfo:{
    color:"#aaaaaa",
    fontSize:15,
  },
  VideoTextPicture:{
    width:392,

    resizeMode: 'contain',
  }


  // line: {
  //   backgroundColor: '#212121',
  // },
  // topCategory: {
  //   backgroundColor: '#3d3d3d',
  // },
  // text: {
  //   color: '#ffffff',
  // },
  // scroll: {
  //   backgroundColor: '#aaaaaa',
  // },
  
});

export default styles;
