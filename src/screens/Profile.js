import React, { Component } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Images from '@assets/images'
import { NMBioText, NBSwiper, NBGrid } from '../components'
import { fetchProfileInfo, fetchFeedPhotos, fetchPopularPosts } from '../actions/ProfileActions'

class Profile extends Component {
  componentWillMount() {
    this.props.fetchProfileInfo()
    this.props.fetchFeedPhotos()
    this.props.fetchPopularPosts()
  }

  renderHeader() {
    const { userFeed, profileInfo } = this.props
    const { bio, profileThumbnail, name } = profileInfo

    return (
      <View>
        <View style={styles.profileInfo}>
          <Image
            style={styles.avatar}
            source={{uri:profileThumbnail}}
          />
          <View style={{flex: 1}}>
            <Text style={styles.username}>{name}</Text>
            <View style={styles.bioContainer}>
              {bio && <NMBioText text={bio} />}
            </View>
          </View>
        </View>
        {(userFeed && userFeed.length>0) &&
          <NBSwiper data={this.props.userFeed} />
        }
      </View>
    )
  }

  render() {
    const { popularPosts } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Image source={Images.logo} style={styles.navBarLogo} resizeMode='contain'/>
        </View>
        <NBGrid
          data={popularPosts}
          renderHeader={() => this.renderHeader()}
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
  username: {
    flex: 1,
    color: '#6d6d6d',
    fontWeight: '500',
    fontSize: 16,
    paddingBottom: 4
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 16
  },
  bioContainer: {
    flex: 1,
    paddingRight: 12
  }
})

Profile.propTypes = {
  profileInfo       : PropTypes.object.isRequired,
  userFeed          : PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchProfileInfo  : PropTypes.func.isRequired,
  fetchFeedPhotos   : PropTypes.func.isRequired,
  fetchPopularPosts : PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  const { loading, profileInfo, userFeed, popularPosts } = state.profile

  return {
    loading,
    profileInfo,
    userFeed,
    popularPosts
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchProfileInfo,
    fetchFeedPhotos,
    fetchPopularPosts
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
