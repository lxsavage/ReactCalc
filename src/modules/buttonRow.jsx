import React from 'react'

class ButtonRow extends React.Component {
  render() {
    const styles = {
      fontFamily: 'Ubuntu Mono, monospace'
    }
    return (
      <div
        className="d-flex"
        style={styles}>
          {this.props.children}
      </div>
    )
  }
}

export default ButtonRow
