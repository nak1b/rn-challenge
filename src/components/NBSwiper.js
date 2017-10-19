import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

import NBSwiperItem from './NBSwiperItem'
import Swiper from 'react-native-swiper'

class NBSwiper extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentIndex: 0
    }
  }

  onDotClicked(index) {
    const newIndex = index - this.state.currentIndex
    this.swiper.scrollBy(newIndex)

    this.setState({currentIndex: index})
  }

  renderDot(item, index) {
    const activeDotStyle = this.state.currentIndex === index ? {backgroundColor: '#00ACED'} : null

    return (
      <TouchableOpacity
        style={[styles.dot, activeDotStyle]}
        key={item.createdAt}
        onPress={() => this.onDotClicked(index)}
      />
    )
  }

  renderDots() {
    return this.props.data.map((item, index) => {
      return this.renderDot(item, index)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Swiper
          ref={(c) => {this.swiper = c}}
          showsPagination={false}
          loop={false}
          onIndexChanged={(index) => this.setState({currentIndex: index})}>
          {this.props.data.map((item, key) => {
            return (
              <NBSwiperItem key={item.createdAt} data={item} />
            )
          })}
        </Swiper>
        <View style={styles.dotContainer}>
          {this.renderDots()}
        </View>
      </View>
    )
  }
}

NBSwiper.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDotClicked: PropTypes.func
}

const styles = StyleSheet.create({
  container: {
    width: null,
    height: 260
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 16
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#e3e3e3',
    marginRight: 6
  }
})

module.exports = NBSwiper
