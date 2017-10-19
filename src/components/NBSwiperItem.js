import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

import PropTypes from 'prop-types'

const NBSwiperItem = ({data}) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode='cover'
        source={{uri: data.thumbnail}}
        style={styles.image}
      />
    </View>
  )
}

NBSwiperItem.propTypes = {
  data: PropTypes.object.isRequired,
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    margin: 16,
    marginBottom: 0
  }
})

module.exports = NBSwiperItem
