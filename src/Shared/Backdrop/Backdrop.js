import React from 'react'
import './Backdrop.scss'

const Backdrop = props =>(
  <div className="backdrop" onClick={props.click}/>
)




// class backdrop extends Component{
//   render(){
//     return <div className="backdrop" onClick={this.props.click}/>
//   }
// }

export default Backdrop