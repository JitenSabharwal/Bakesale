import React from 'react'
import { View, FlatList } from 'react-native'
import PropTypes from 'prop-types'
import DealItem from './DealItem'
class DealList extends React.Component {
    state = {  }
    static propTypes = {
      deals: PropTypes.array.isRequired,
      onItemPress: PropTypes.func.isRequired
    }
    render() {
      return (
        <View>
          <FlatList
            data={this.props.deals}
            renderItem={({item}) => <DealItem deal={item} onPress={this.props.onItemPress}/>}
          />
        </View>
      )
    }
}

export default DealList