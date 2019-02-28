import React from 'react'

class ButtonContainer extends React.Component {
  render() {
    return (
      <div className="Buttons">
        {this.props.children}
      </div>
    )
  }
}

export default ButtonContainer
