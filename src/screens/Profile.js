import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'

import { NMBioText } from '../components'

class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profileInfo}>
          <Image
            style={styles.avatar}
            source={{uri:'https://d1m37qdzmw041i.cloudfront.net/photos/users/profile/thumbnail/318381-1505247817815.jpg'}}
          />
          <View style={{flex: 1, marginRight: 20}}>
            <NMBioText
              text={"Motivation to become the best version of you!  💙💪🌎\n\nIt's #ActiveOctober\n\nShare your photos all month long to be featured!\n\n👻 Snapchat @PumpUp\n\nGet your #TeamPumpUp gear ⬇"}
            />
          </View>
        </View>
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
    alignItems: 'center'
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 16
  }
})

export default Profile
