import React from 'react'
import Color from '../colors.json'

const { ipcRenderer } = window.require('electron')
var darkMode = ipcRenderer.sendSync('IS_DARK_MODE')

class Button extends React.Component {
  render() {
    const type = this.props.value

    // Set the color scheme
    let colors = Color.LightMode
    if (darkMode) {
      colors = Color.DarkMode
    }

    let class_ = 'btn'
    switch (type) {
      case 'uprow':
      case 'clearentries':
      case 'clear':
        class_ += ` ${colors.clearKeys}`
        break
      case 'backspace':
        class_ += ` ${colors.backspaceKey}`
        break
      case '+':
      case '-':
      case '*':
      case '/':
      case 'equals':
        class_ += ` ${colors.operatorKeys}`
        break
      default:
        class_ += ` ${colors.numKeys}`
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
