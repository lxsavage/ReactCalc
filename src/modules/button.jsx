import React from 'react'

class Button extends React.Component {
  render() {
    const type = this.props.value
    let class_ = 'btn'
    switch (type) {
      case 'clearentries':
      case 'clear':
        class_ += ' btn-danger'
        break
      case 'backspace':
        class_ += ' btn-warning'
        break
      default:
        class_ += ' btn-primary'
        break
    }
    class_ += ' btn-block'

    return (
      <div className="p-2">
        <button
          onClick={this.props.onClick}
          className={class_}
          data-value={this.props.value}
        >
          {this.props.label}
        </button>
      </div>
    )
  }
}

export default Button
