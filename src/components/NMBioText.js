import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import ParsedText from 'react-native-parsed-text'
import ViewMoreText from  '@expo/react-native-read-more-text'


class NMBioText extends Component {
  renderViewMore(onPress) {
    return(
      <Text onPress={onPress}>View more</Text>
    )
  }

  renderViewLess(onPress) {
    return(
      <Text onPress={onPress}>View less</Text>
    )
  }

  render() {
    return (
      <ViewMoreText
        numberOfLines={3}
        renderViewMore={this.renderViewMore}
        renderViewLess={this.renderViewLess}>
        <ParsedText
          parse={
            [
              {pattern: /#(\w+)/, style: styles.hashTag},
              {pattern: /@(\w+)/, style: styles.username},
            ]
          }
        >
          {this.props.text}
        </ParsedText>
      </ViewMoreText>
    )
  }
}


NMBioText.propTypes = {
  text   : PropTypes.string.isRequired,
}


const styles = StyleSheet.create({
  hashTag: {
    color: '#00ACED'
  },
  username: {
    color: '#1DA1F2'
  }
})

export default NMBioText
