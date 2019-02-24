import React from 'react'

class Display extends React.Component {
  render() {
    let visual = this.props.state.join('')
    if (visual === '')
      visual = '0'
    return (
      <div className="d-block border">
        <div className="p-3">
          {visual}
        </div>
      </div>
    )
  }
}

export default Display
