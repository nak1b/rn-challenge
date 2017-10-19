import React, { Component } from 'react'
import { View, StyleSheet, ListView, Dimensions } from 'react-native'
import PropTypes from 'prop-types'

const GRID_ITEM_DIMENSION = Dimensions.get('window').width / 3

class NBGrid extends Component {
  constructor(props) {
    super(props)

    this.dataSource = []
  }

  componentWillRecieveProp(nextProp) {
    this.createDataSource(nextProp)
  }

  componentWillMount() {
    this.createDataSource(this.props)
  }

  createDataSource({data}) {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.dataSource = ds.cloneWithRows(data)
  }

  renderGridItem(data, sectionID, rowID) {
    return (
      <View style={styles.gridItem}/>
    )
  }

  render() {
    return (
      <ListView
        contentContainerStyle={styles.grid}
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={(data) => this.renderGridItem(data)}
      />
    )
  }
}

NBGrid.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  gridItem: {
    width: GRID_ITEM_DIMENSION,
    height: GRID_ITEM_DIMENSION,
    backgroundColor: 'red',
    borderWidth: 1,
    borderColor: '#e3e3e3'
  }
})

module.exports = NBGrid
