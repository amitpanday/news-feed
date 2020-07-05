import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  ImageBackground,
  Image,
  TextInput,
  Dimensions
} from 'react-native';
import {dynamicSize, getFontSize} from '../src/utils/responsive';
import { TouchableOpacity } from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');
const statsImageArr = [
  require('../src/assets/video_shoutout.png'),
  require('../src/assets/video_call.png'),
  require('../src/assets/confrence.png'),
  require('../src/assets/review.png'),
  require('../src/assets/comment.png'),
  require('../src/assets/messaging.png')
];

class App extends Component{

  constructor(props){
    super(props);
    this.state={
      fav:'#000',
      stasData:[
        {
          id:'1',
          pending:'15',
          count:'23',
          title:'Video Shoutout'
        },
        {
          id:'2',
          pending:'15',
          count:'56',
          title:'Video Call'
        },
        {
          id:'3',
          pending:'15',
          count:'11',
          title:'Conferencing'
        },
        {
          id:'4',
          pending:'15',
          count:'110',
          title:'Review'
        },
        {
          id:'5',
          pending:'15',
          count:'11',
          title:'Comment'
        },
        {
          id:'1',
          pending:'15',
          count:'56',
          title:'Messaging'
        }
      ],
      text:'',
      postData:[
        {
          id:"1",
          descriptions:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
          image:require('../src/assets/postImage.jpeg'),
          date: new Date(),
          fav:"1",
          views:'20',
          comment:'20',
          user:{
            id:"1",
            name:'Sayantan Chandra',
            userPic:require('../src/assets/avatar.png'),
          },
        },
        {
          id:"1",
          descriptions:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
          image:require('../src/assets/postImage.jpeg'),
          date: new Date(),
          fav:"1",
          views:'20',
          comment:'20',
          user:{
            id:"1",
            name:'Sayantan Chandra',
            userPic:require('../src/assets/avatar.png'),
          },
        },
        {
          id:"1",
          descriptions:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
          image:require('../src/assets/postImage.jpeg'),
          date: new Date(),
          fav:"1",
          views:'20',
          comment:'20',
          user:{
            id:"1",
            name:'Sayantan Chandra',
            userPic:require('../src/assets/avatar.png'),
          },
        },
        {
          id:"1",
          descriptions:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
          image:require('../src/assets/postImage.jpeg'),
          date: new Date(),
          fav:"1",
          views:'20',
          comment:'20',
          user:{
            id:"1",
            name:'Sayantan Chandra',
            userPic:require('../src/assets/avatar.png'),
          },
        }
      ]
    };
  }

  showStatsCard = (item, index) =>{
    return(
      <View style={styles.statsCard}>
        <ImageBackground 
          resizeMode={'stretch'}
          style={styles.statsImageBack}
          source={statsImageArr[index]}
        >
          <View style={styles.pendingContainer}>
            <Text style={{fontSize:dynamicSize(12),color:'#fff',textAlign:'center',fontWeight:'600'}}>{`Pending: ${item.pending}`}</Text>
          </View>
          <View style={{}}>
            <View style={{marginLeft:dynamicSize(10)}}>
              <Text style={{fontSize:dynamicSize(18),color:'#fff',textAlign:'left',fontWeight:'700',opacity:0.9}}>{item.count}</Text>
              <Text style={{fontSize:dynamicSize(16),color:'#fff',textAlign:'left',         fontWeight:'600',opacity:0.9}}>
                {item.title}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }

  showPostContent = (item,index) =>{
  return(
    <View style={styles.postCard}>
      <View style={styles.postHeader}>
        <View style={styles.userImage}>
            <Image 
              resizeMode={'stretch'}
              style={{width:dynamicSize(45), overflow:'hidden', borderRadius:22, height:dynamicSize(45)}}
              source={item.user.userPic}
            />
        </View>
        <View style={{justifyContent:'center', marginLeft:dynamicSize(10)}}>
          <Text style={styles.userName}
          >{item.user.name}</Text>
          <Text style={styles.timeText}
          >{`1 hour ago`}</Text>
        </View>
      </View>
      <View style={styles.postBody}>
          <Image 
            resizeMode={'stretch'}
            style={{width:width - 20, height:dynamicSize(150)}}
            source={item.image}
          />
          <Text style={styles.descriptions}>{`${item.descriptions.slice(0, 200)}...Continue reading`}</Text>
      </View>
      <View style={styles.postFooter}>
        <View style={styles.footerleft}>
            <TouchableOpacity onPress={() =>this.setState({fav:'red'})}>
              <Image 
                resizeMode={'center'}
                style={{width:dynamicSize(15),tintColor:this.state.fav,height:dynamicSize(15)}}
                source={require('../src/assets/heart.png')}
              />
            </TouchableOpacity>
            <Text style={{fontSize:getFontSize(12), margin: dynamicSize(5)}}>
              {item.fav}</Text>
            <TouchableOpacity>
              <Image 
                resizeMode={'center'}
                style={{width:dynamicSize(15), height:dynamicSize(15)}}
                source={require('../src/assets/comment_icon.png')}
              />
            </TouchableOpacity>
            <Text style={{fontSize:getFontSize(12), margin: dynamicSize(5)}}>
              {item.comment}
            </Text>
        </View>
        <View style={styles.footerRight}>
          <TouchableOpacity>
            <Image 
              resizeMode={'center'}
              style={{width:dynamicSize(15), height:dynamicSize(15)}}
              source={require('../src/assets/eye.png')}
            />
          </TouchableOpacity>
            <Text style={{fontSize:getFontSize(12), margin: dynamicSize(5)}}>
              {`Views(${item.views})`}
            </Text>
        </View>
      </View>
    </View>
  );
  }

  render(){
    return(
      <View style={styles.container}>
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.content}>
                <View style={styles.header}>
                  <Text style={styles.title}>{'Activity'}</Text>
                </View>
                <View style={styles.statsCardContainer}>
                  <FlatList 
                    numColumns={2}
                    data={this.state.stasData}
                    extraData={this.state}
                    keyExtractor={(item, index)=>item.id}
                    renderItem={({item, index})=>this.showStatsCard(item,index)}
                  />
                </View>
                <View style={styles.createPostContaoner}>
                  <View style={styles.inputContainer}>
                    <View style={styles.userImage}>
                      <Image 
                        resizeMode={'stretch'}
                        style={{width:dynamicSize(45),backgroundColor:'#fff', overflow:'hidden', borderRadius:22, height:dynamicSize(45)}}
                        source={require('../src/assets/user.png')}
                      />
                    </View>
                    <View>
                      <TextInput
                        style={styles.textInput}
                        placeholder={'create a new post'}
                        value={this.state.text}
                        onChangeText={(text)=>this.setState({text})}
                      />
                    </View>
                  </View>
                  <View style={styles.postIconContainer}>
                    <TouchableOpacity>
                      <Image 
                          resizeMode={'center'}
                          style={{width:dynamicSize(20), height:dynamicSize(20)}}
                          source={require('../src/assets/photograph.png')}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Image 
                          resizeMode={'center'}
                          style={{width:dynamicSize(20), height:dynamicSize(20)}}
                          source={require('../src/assets/video-camera.png')}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Image 
                          resizeMode={'center'}
                          style={{width:dynamicSize(20), height:dynamicSize(20)}}
                          source={require('../src/assets/audio.png')}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Image 
                          resizeMode={'center'}
                          style={{width:dynamicSize(20), height:dynamicSize(20)}}
                          source={require('../src/assets/google-docs.png')}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Image 
                          resizeMode={'center'}
                          style={{width:dynamicSize(20), height:dynamicSize(20)}}
                          source={require('../src/assets/google-sheets.png')}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.postCardContainer}>
                  <FlatList 
                    data={this.state.postData}
                    extraData={this.state}
                    keyExtractor={(item, index)=>item.id}
                    renderItem={({item, index})=>this.showPostContent(item,index)}
                  />
                </View>
            </View>
          </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignContent:'center',
  },
  content:{
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center'
  },
  header:{
    height: dynamicSize(70),
    width:width,
    justifyContent:'flex-start',
    alignContent:'flex-start',
    alignItems:'flex-start'
  },
  statsCardContainer:{
    flex:1,
    justifyContent:'space-around',
    alignContent:'space-around',
    padding:dynamicSize(10)
  },
  createPostContaoner:{
    backgroundColor:'#eee',
    borderBottomColor:'#ddd',
    borderBottomWidth:0.4,
    borderTopColor:'#ddd',
    borderTopWidth:0.5,
    marginBottom:dynamicSize(15)
  },
  postCardContainer:{
    flex:1,
    justifyContent:'center',
    alignContent:'center'
  },
  title:{
    marginTop:dynamicSize(45),
    marginLeft:dynamicSize(30),
    textAlign:'left',
    fontSize: getFontSize(22),
    fontWeight:'700',
    color:'#000',
    letterSpacing:0.2
  },
  statsCard:{
    width:dynamicSize(150),
    height:dynamicSize(80),
    marginHorizontal:dynamicSize(10),
    marginVertical:dynamicSize(10),
    borderRadius: dynamicSize(5),
    backgroundColor:'red'
  },
  statsImageBack:{
    width:dynamicSize(150),
    height:dynamicSize(80),
  },
  pendingContainer:{
    height:dynamicSize(20),
    width:'55%',
    justifyContent:'center',
    alignContent:'center',
    alignSelf:'flex-end',
    backgroundColor:'rgba(255, 255, 255, .3)',
    opacity:0.9,
    marginRight:dynamicSize(10),
    marginTop:dynamicSize(10),
    borderRadius:dynamicSize(8)
  },
  inputContainer:{
    alignItems:'center',
    height:dynamicSize(100),
    width:width,
    flexDirection:'row',
  },
  textInput:{
    marginLeft:dynamicSize(10),
    fontSize:getFontSize(18),
    color:"#000",
  },
  userImage:{
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    marginLeft:dynamicSize(10)
  },
  postIconContainer:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    marginBottom:dynamicSize(10),
    borderTopColor:'#bbb',
    borderTopWidth:0.8,
    opacity:0.6,
    paddingTop:dynamicSize(10)
  },
  postCard:{
    justifyContent:'center',
    alignItems:'center',
    borderRadius:1,
    borderColor:'#ddd',
    opacity:0.7,
    borderWidth:0.7,
    margin:dynamicSize(10),
  },
  postHeader:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'flex-start',
    marginTop:dynamicSize(10)
  },
  postBody:{
    width:'100%',
    margin:dynamicSize(10)
  },
  postFooter:{
    height: dynamicSize(30),
    width: width - 50,
    flexDirection:'row',
    justifyContent:'center',
    alignContent:'center',
    opacity: 0.5,
    borderTopWidth:0.2,
    borderTopColor:'#000'
  },
  userName:{
    fontSize: getFontSize(18), 
    marginBottom:dynamicSize(10),
    color:'blue',
    fontWeight:'700',
    opacity:0.7
  },
  timeText:{
    fontSize: getFontSize(12), 
    marginBottom:dynamicSize(10),
    color:'#111',
    opacity:0.6,
    fontWeight:'700'
  },
  descriptions:{
    textAlign:'left', 
    margin:dynamicSize(10), 
    fontSize:getFontSize(12),
    fontWeight:'500',
    color:'#000'
  },
  footerleft:{
    flex:1,
    justifyContent:'flex-start', 
    alignContent:'flex-start', 
    alignItems:'center',
    flexDirection:'row',
    marginLeft :dynamicSize(10)
  },
  footerRight:{
    flex:1,
    justifyContent:'flex-end', 
    alignContent:'flex-end', 
    alignItems:'center',
    flexDirection:'row',
    marginRight: dynamicSize(10)
  }
});

export default App;
