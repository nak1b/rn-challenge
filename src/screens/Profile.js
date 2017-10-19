import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'

import { NMBioText, NBSwiper } from '../components'

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
  constructor(props) {
    super(props)

    this.state = {
      index: 1
    }
  }
  render() {
    return (
      <View style={styles.container}>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  profileInfo: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    paddingBottom: 12,
    paddingTop: 24,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 16
  },
  bioContainer: {
    flex: 1,
    marginRight: 20,
    alignSelf:'center'
  }
})

export default Profile
