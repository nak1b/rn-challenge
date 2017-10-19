import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import ParsedText from 'react-native-parsed-text'
import ViewMoreText from  '@expo/react-native-read-more-text'


class NMBioText extends Component {
  _renderRevealedFooter(onPress) {
    return(
      <Text style={styles.readLess} onPress={onPress}>View Less</Text>
    )
  }

  _renderTruncatedFooter(onPress) {
    return(
      <Text style={styles.readMore} onPress={onPress}>View More</Text>
    )
  }

  render() {
    return (
      <ViewMoreText
        numberOfLines={3}
        renderRevealedFooter={this._renderRevealedFooter}
        renderTruncatedFooter={this._renderTruncatedFooter}>
        <ParsedText
          style={styles.text}
          parse={
            [
              {pattern: /#(\w+)/, style: styles.linkColor},
              {pattern: /@(\w+)/, style: styles.linkColor},
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
  text: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
  text: {
    color: '#5d5d5d',
    fontSize: 15
  },
  linkColor: {
    color: '#00ACED',
    fontSize: 16
  },
  readMore: {
    color: '#00ACED',
    paddingTop: 6
  },
  readLess: {
    paddingTop: 10,
    paddingBottom: 6,
    color: '#767676'
  }
})

export default NMBioText
