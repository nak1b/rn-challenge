import React, { Component } from 'react'
import { StyleSheet, Image, ListView, Dimensions } from 'react-native'
import PropTypes from 'prop-types'

const GRID_ITEM_DIMENSION = Dimensions.get('window').width / 3

class NBGrid extends Component {
  constructor(props) {
    super(props)

    this.dataSource = []
  }

  componentWillReceiveProps(nextProp) {
    this.createDataSource(nextProp)
  }

  componentWillMount() {
    this.createDataSource(this.props)
  }

  createDataSource({data}) {
    console.log(data)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.dataSource = ds.cloneWithRows(data)
  }

  renderGridItem({thumbnail}) {
    return (
      <Image
        style={styles.gridItem}
        source={{uri:thumbnail}}
      />
    )
  }

  render() {
    return (
      <ListView
        contentContainerStyle={styles.grid}
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={(data) => this.renderGridItem(data)}
        renderHeader={this.props.renderHeader}
      />
    )
  }
}

NBGrid.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  renderHeader: PropTypes.func
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  gridItem: {
    width: GRID_ITEM_DIMENSION,
    height: GRID_ITEM_DIMENSION,
    backgroundColor: '#f2f2f2',
    borderWidth: 1,
    borderColor: '#fff'
  }
})

module.exports = NBGrid
