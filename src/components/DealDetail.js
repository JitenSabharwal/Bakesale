import React from 'react'
import { View, Image } from 'react-native'
import { Content, Card, CardItem, Thumbnail, Text, Left, Body, Right, Spinner, H3 } from 'native-base'
import PropTypes from 'prop-types'
import { priceDisplay } from '../util'
import ajax from '../ajax'
class DealDetail extends React.Component {
    state = { 
      deal: this.props.initialDealData
    }
    static propTypes = {
      initialDealData: PropTypes.object.isRequired
    }
    async componentDidMount() {
      const fullDeal = await ajax.fetchDealDetail(this.state.deal.key)
      console.log(fullDeal)
      this.setState({deal: fullDeal})
    }
    render() {
      const { deal } = this.state
      let dealContent
      let userDetails
      if(deal.user) {
        userDetails = (
          <CardItem>
            <Left>
              <Image source={{uri: deal.user.avatar}} style={{height: 40, width: 40}}/>
              <Text>{deal.user.name}</Text>
            </Left>
            <Right>
              <Text>{priceDisplay(deal.price)}</Text>
              <Text>{deal.cause.name}</Text>
            </Right>
          </CardItem>
        )
        dealContent = (
          <Text>{deal.description}</Text>
        )
      } else {
        dealContent = (<Spinner />)
      }
      return (
        <Content style={{marginHorizontal: 5}}>
          <Card>
            <CardItem>
              <Image source={{uri: deal.media[0]}} style={{height: 150, width: '100%', flex: 1}}/>
            </CardItem>
            <CardItem style={{backgroundColor: '#ddd'}}>
              <H3>{deal.title}</H3>
            </CardItem>
            {deal.user && userDetails}
            <CardItem footer>
              
            </CardItem>
            <CardItem>
              {dealContent}
            </CardItem>
          </Card>
        </Content>
      )
    }
}

export default DealDetail