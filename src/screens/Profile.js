import React, { Component } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import ParsedText from 'react-native-parsed-text'
import ViewMoreText from  '@expo/react-native-read-more-text'

class Profile extends Component {
  renderViewMore(onPress){
    return(
      <Text onPress={onPress}>View more</Text>
    )
  }

  renderViewLess(onPress){
    return(
      <Text onPress={onPress}>View less</Text>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profileInfo}>
          <Image
            style={styles.avatar}
            source={{uri:'https://d1m37qdzmw041i.cloudfront.net/photos/users/profile/thumbnail/318381-1505247817815.jpg'}}
          />
          <View style={{flex: 1, marginRight: 20}}>
            <ViewMoreText
              numberOfLines={3}
              renderViewMore={this.renderViewMore}
              renderViewLess={this.renderViewLess}>
              <ParsedText
                style={styles.bio}
                parse={
                  [
                    {pattern: /#(\w+)/, style: styles.hashTag},
                    {pattern: /@(\w+)/, style: styles.username},
                  ]
                }
              >
                {"Motivation to become the best version of you!  💙💪🌎\n\nIt's #ActiveOctober\n\nShare your photos all month long to be featured!\n\n👻 Snapchat @PumpUp\n\nGet your #TeamPumpUp gear ⬇"}
              </ParsedText>
            </ViewMoreText>
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
  },
  bio: {
    flex: 1,
    paddingRight: 16,
  },
  hashTag: {
    color: '#00ACED'
  },
  username: {
    color: '#00ACED'
  }
})

export default Profile
