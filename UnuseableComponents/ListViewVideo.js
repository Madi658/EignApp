// import React, {useState, useRef} from 'react';
// import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
// import Video from 'react-native-video';
// import MediaControls, {PLAYER_STATES} from 'react-native-media-controls';

// const noop = () => {};

// const ListViewVideo = props => {
//   const videoPlayer = useRef(null);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [isFullScreen, setIsFullScreen] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [paused, setPaused] = useState(true);
//   const [playerState, setPlayerState] = useState(PLAYER_STATES.PAUSED);

//   const onSeek = seek => {
//     videoPlayer?.current.seek(seek);
//   };

//   const onPaused = playerState => {
//     setPaused(!paused);
//     setPlayerState(playerState);
//   };

//   const onReplay = () => {
//     setPlayerState(PLAYER_STATES.PLAYING);
//     videoPlayer?.current.seek(0);
//   };

//   const onProgress = data => {
//     // Video Player will continue progress even if the video already ended
//     if (!isLoading) {
//       setCurrentTime(data.currentTime);
//     }
//   };

//   const onLoad = data => {
//     setDuration(data.duration);
//     setIsLoading(false);
//   };

//   const onLoadStart = () => setIsLoading(true);

//   const onEnd = () => {
//     // Uncomment this line if you choose repeat=false in the video player
//     setPlayerState(PLAYER_STATES.ENDED);
//   };

//   const onSeeking = currentTime => setCurrentTime(currentTime);

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         style={styles.fullScreen}
//         onPress={() => props.onVideoPressed}>
//         <Video
//           onEnd={onEnd}
//           onLoad={onLoad}
//           onLoadStart={onLoadStart}
//           onProgress={onProgress}
//           paused={paused}
//           ref={ref => (videoPlayer.current = ref)}
//           resizeMode="stretch"
//           source={require('../assets/broadchurch.mp4')}
//           repeat
//           style={styles.mediaPlayer}
//           //   volume={0.0}
//         />

//         <Text
//           style={{
//             fontSize: 20,
//             color: '#4F4F4F',
//             fontWeight: 'bold',
//             alignSelf: 'flex-start',
//             marginLeft: '12%',
//             marginTop: '60%',
//             top: '15%',
//             left: '-5%',
//           }}>
//           $1,150,000
//         </Text>
//         <View
//           style={{
//             flexDirection: 'row',
//             marginLeft: '55%',
//             marginTop: '2%',
//           }}>
//           <View
//             style={{
//               flexDirection: 'row',
//               marginTop: '5%',
//               right: '15%',
//             }}>
//             <Image
//               source={require('../assets/bed.png')}
//               style={{marginLeft: '2%', color: 'grey'}}
//             />
//             <Text style={{left: 10}}>3 bed</Text>
//           </View>
//           <View
//             style={{
//               flexDirection: 'row',
//               marginTop: '5%',
//               right: '5%',
//             }}>
//             <Image
//               source={require('../assets/bath.png')}
//               style={{marginLeft: '2%', color: 'grey'}}
//             />
//             <Text style={{left: 10}}>2 Bath</Text>
//           </View>
//         </View>
//         <Text style={{opacity: 0.5, right: '-7%', top: '4%'}}>
//           914 Edgemont Avenue Elk River, chaykot.
//         </Text>
//         <MediaControls
//           isFullScreen={isFullScreen}
//           duration={duration}
//           //   isLoading={isLoading}
//           mainColor="orange"
//           onFullScreen={noop}
//           onPaused={onPaused}
//           onReplay={onReplay}
//           onSeek={onSeek}
//           onSeeking={onSeeking}
//           playerState={playerState}
//           progress={currentTime}></MediaControls>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     height: '60%',
//     marginTop: '30%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//   },
//   toolbar: {
//     marginTop: 30,
//     backgroundColor: 'white',
//     padding: 10,
//     borderRadius: 5,
//   },
//   mediaPlayer: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     bottom: 0,
//     right: 0,
//     // backgroundColor: 'black',
//   },
//   fullScreen: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     bottom: '20%',
//     right: 0,
//   },
// });

// export default ListViewVideo;

// import React, {Component} from 'react';

// import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

// import Video from 'react-native-video';

// export default class ListViewVideo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       rate: 1,
//       volume: 1,
//       muted: false,
//       resizeMode: 'contain',
//       duration: 0.0,
//       currentTime: 0.0,
//       paused: true,
//     };
//   }

//   // video: Video;

//   onLoad = data => {
//     this.setState({duration: data.duration});
//   };

//   onProgress = data => {
//     this.setState({currentTime: data.currentTime});
//   };

//   onEnd = () => {
//     this.setState({paused: true});
//     this.video.seek(0);
//   };

//   onAudioBecomingNoisy = () => {
//     this.setState({paused: true});
//   };

//   onAudioFocusChanged = event => {
//     this.setState({paused: !event.hasAudioFocus});
//   };

//   getCurrentTimePercentage() {
//     if (this.state.currentTime > 0) {
//       return (
//         parseFloat(this.state.currentTime) / parseFloat(this.state.duration)
//       );
//     }
//     return 0;
//   }

//   renderRateControl(rate) {
//     const isSelected = this.state.rate === rate;

//     return (
//       <TouchableOpacity
//         onPress={() => {
//           this.setState({rate});
//         }}>
//         <Text
//           style={[
//             styles.controlOption,
//             {fontWeight: isSelected ? 'bold' : 'normal'},
//           ]}>
//           {rate}x
//         </Text>
//       </TouchableOpacity>
//     );
//   }

//   renderResizeModeControl(resizeMode) {
//     const isSelected = this.state.resizeMode === resizeMode;

//     return (
//       <TouchableOpacity
//         onPress={() => {
//           this.setState({resizeMode});
//         }}>
//         <Text
//           style={[
//             styles.controlOption,
//             {fontWeight: isSelected ? 'bold' : 'normal'},
//           ]}>
//           {resizeMode}
//         </Text>
//       </TouchableOpacity>
//     );
//   }

//   renderVolumeControl(volume) {
//     const isSelected = this.state.volume === volume;

//     return (
//       <TouchableOpacity
//         onPress={() => {
//           this.setState({volume});
//         }}>
//         <Text
//           style={[
//             styles.controlOption,
//             {fontWeight: isSelected ? 'bold' : 'normal'},
//           ]}>
//           {volume * 100}%
//         </Text>
//       </TouchableOpacity>
//     );
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <TouchableOpacity
//           // style={styles.fullScreen}
//           // onPress={() => this.setState({paused: !this.state.paused})}>
//           onPress={this.props.onVideoPressed}>
//           <Video
//             fullscreen={true}
//             controls={true}
//             ref={ref => {
//               this.video = ref;
//             }}
//             source={require('../assets/broadchurch.mp4')}
//             style={styles.fullScreen}
//             rate={this.state.rate}
//             paused={this.state.paused}
//             volume={this.state.volume}
//             muted={this.state.muted}
//             resizeMode={this.state.resizeMode}
//             onLoad={this.onLoad}
//             onProgress={this.onProgress}
//             onEnd={this.onEnd}
//             onAudioBecomingNoisy={this.onAudioBecomingNoisy}
//             onAudioFocusChanged={this.onAudioFocusChanged}
//             repeat={false}
//           />
//         </TouchableOpacity>
//         <Text
//           style={{
//             fontSize: 20,
//             color: '#4F4F4F',
//             fontWeight: 'bold',
//             alignSelf: 'flex-start',
//             marginLeft: '12%',
//             marginTop: '60%',
//             top: '-4%',
//             left: '-5%',
//           }}>
//           $1,150,000
//         </Text>
//         <View
//           style={{
//             flexDirection: 'row',
//             marginLeft: '55%',
//             marginTop: '-9%',
//             top: '-2%',
//           }}>
//           <View
//             style={{
//               flexDirection: 'row',
//               marginTop: '5%',
//               right: '15%',
//             }}>
//             <Image
//               source={require('../assets/bed.png')}
//               style={{marginLeft: '2%', color: 'grey'}}
//             />
//             <Text style={{left: 10}}>3 bed</Text>
//           </View>
//           <View
//             style={{
//               flexDirection: 'row',
//               marginTop: '5%',
//               right: '5%',
//             }}>
//             <Image
//               source={require('../assets/bath.png')}
//               style={{marginLeft: '2%', color: 'grey'}}
//             />
//             <Text style={{left: 10}}>2 Bath</Text>
//           </View>
//         </View>
//         <Text style={{opacity: 0.5, right: '-7%', top: '-1%'}}>
//           914 Edgemont Avenue Elk River, chaykot.
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     marginTop: '30%',
//     height: '80%',
//     // backgroundColor: 'red',
//     borderRadius: 20,
//     margin: '5%',
//   },
//   fullScreen: {
//     // position: 'absolute',

//     top: 0,
//     left: 0,
//     bottom: 0,
//     right: 0,
//   },
// });
