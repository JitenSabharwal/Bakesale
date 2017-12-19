import React from 'react'
import ajax from '../ajax'
import DealList from './DealList'
import DealDetail from './DealDetail'
import { Container, Header, Content, Body, Spinner, Button, Left, Icon, Title, Right} from 'native-base'
class App extends React.Component {
  state = {
    deals: [],
    currentDetailId: null
  }
  async componentDidMount () {
    const deals = await ajax.fetchInitialDeals()
    this.setState({ deals })
  }

  setCurrentDeal = (dealId) => {
    this.setState({currentDetailId: dealId})
  }
  unsetCurrentDeal = () => {
    this.setState({currentDetailId: null})
  }
  currentDeal = () => {
    return this.state.deals.find((deal) => deal.key === this.state.currentDetailId)
  }

  render() {
    let bodyContent
    if (this.state.currentDetailId) {
      bodyContent = (<DealDetail initialDealData={this.currentDeal()}/>)
    } else if (this.state.deals.length > 0 ) {
      bodyContent = (<DealList deals={this.state.deals} onItemPress={this.setCurrentDeal}/>)
    }  else {
      bodyContent = (<Spinner />)
    }
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Bakesale</Title>
          </Body>
          <Right />
        </Header>
        <Content style={{marginHorizontal: 10}}>
          {bodyContent}
        </Content>
      </Container>
    )
  }
}

export default  App