import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { Card, CardItem, Text, Left, Body, Right } from 'native-base'
import PropTypes from 'prop-types'
import { priceDisplay } from '../util'
class DealItem extends React.Component {
    state = {  }
    static propTypes = {
      deal: PropTypes.object.isRequired,
      onPress: PropTypes.func.isRequired
    }
    handlePress = () => {
      this.props.onPress(this.props.deal.key)
    }
    render() {
      const { deal } = this.props
      return (
        <TouchableOpacity
          onPress={this.handlePress}
        >
          <Card style={{flex: 1, marginBottom: 20}}>
            <CardItem header>
              <Text style={{marginTop: 2}}>{deal.title}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: deal.media[0]}} style={{height: 150, width: '100%', flex: 1}}/>
              </Body>
            </CardItem>
            <CardItem footer>
              <Left>
                <Text>{deal.cause.name}</Text>
              </Left>
              <Right>
                <Text>{priceDisplay(deal.price)}</Text>
              </Right>
            </CardItem>
          </Card>
        </TouchableOpacity>
      )
    }
}

export default DealItem