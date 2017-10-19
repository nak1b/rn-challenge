import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'

import Images from '@assets/images'
import { NMBioText, NBSwiper, NBGrid } from '../components'

const data = [
  {
    'createdAt': '2016-09-16T22:18:13.091Z',
    'thumbnail': 'https://d1m37qdzmw041i.cloudfront.net/photos/posts/thumbnails/17517155-1474064295274.jpg',
    'className': 'Post',
    'objectId': 17517155,
    '__type': 'Object'
  },
  {
    'createdAt': '2016-03-23T20:42:20.304Z',
    'thumbnail': 'https://d1m37qdzmw041i.cloudfront.net/photos/posts/thumbnails/16080756-1458765641755.jpg',
    'className': 'Post',
    'objectId': 16080756,
    '__type': 'Object'
  },
  {
    'createdAt': '2016-03-23T20:39:22.673Z',
    'thumbnail': 'https://d1m37qdzmw041i.cloudfront.net/photos/posts/thumbnails/16080726-1458765465153.jpg',
    'className': 'Post',
    'objectId': 16080726,
    '__type': 'Object'
  },
  {
    'createdAt': '2016-03-23T20:26:58.405Z',
    'thumbnail': 'https://d1m37qdzmw041i.cloudfront.net/photos/posts/thumbnails/16080559-1458764720696.jpg',
    'className': 'Post',
    'objectId': 16080559,
    '__type': 'Object'
  },
  {
    'createdAt': '2016-03-23T20:09:03.645Z',
    'thumbnail': 'https://d1m37qdzmw041i.cloudfront.net/photos/posts/thumbnails/16080362-1458763645300.jpg',
    'className': 'Post',
    'objectId': 16080362,
    '__type': 'Object'
  }
]

class Profile extends Component {
  renderHeader() {
    return (
      <View>
        <View style={styles.profileInfo}>
          <Image
            style={styles.avatar}
            source={{uri:'https://d1m37qdzmw041i.cloudfront.net/photos/users/profile/thumbnail/318381-1505247817815.jpg'}}
          />
          <View style={styles.bioContainer}>
            <NMBioText
              text={"Motivation to become the best version of you!  💙💪🌎\n\nIt's #ActiveOctober\n\nShare your photos all month long to be featured!\n\n👻 Snapchat @PumpUp\n\nGet your #TeamPumpUp gear ⬇"}
            />
          </View>
        </View>
        <NBSwiper data={data} />
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Image source={Images.logo} style={styles.navBarLogo} resizeMode='contain'/>
        </View>
        <NBGrid
          data={data}
          renderHeader={this.renderHeader}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navBar: {
    height: 64,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
    alignItems: 'center',
    justifyContent: 'center'
  },
  navBarLogo: {
    width: 80,
    marginTop: 12
  },
  profileInfo: {
    flexDirection: 'row',
    paddingBottom: 12,
    paddingTop: 12,
    borderBottomWidth: 1,
    borderColor: '#f2f2f2'
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 16
  },
  bioContainer: {
    flex: 1,
    marginRight: 12,
    alignSelf:'center'
  }
})

export default Profile
