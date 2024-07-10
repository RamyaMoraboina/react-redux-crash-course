import React, { Component } from 'react'
import { connect } from 'react-redux'
import { buyLaptop, buyMobile , fetchUsers} from '../redux/actions'
export class Shop extends Component {
  // state={ 
  //     numOfLaptops:100
  // }
  // buyLaptops=()=>{
  //     this.setState({numOfLaptops:this.state.numOfLaptops-1})
  // }
  render() {
    return (
      <div>
        <h1 className='title'>Welcome to shop</h1>
        <div className='items'>
          <div className='item'>
            <p>Dell Inspiron laptop</p>
            <p>Available :{this.props.numOfLaptops}</p>
            <button onClick={this.props.buyLaptop}>Buy</button>
          </div>

          <div className='item'>
            <p>Redmi Note 7</p>
            <p>Available :{this.props.numOfMobiles}</p>
            <button onClick={this.props.buyMobile}>Buy</button>
          </div>
          <div className='item'>
            <p>Get Users data</p>
            <p>count :{this.props.users.length}</p>
            <button onClick={this.props.fetchUsers}>call API</button>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    numOfLaptops: state.laptop.numOfLaptops,
    numOfMobiles: state.mobile.numOfMobiles,
    users : state.users.users

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    buyLaptop: () => dispatch(buyLaptop()),
    buyMobile: () => dispatch(buyMobile()),
    fetchUsers : () => dispatch(fetchUsers())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Shop)