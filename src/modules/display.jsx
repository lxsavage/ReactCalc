import React from 'react'

class Display extends React.Component {
  render() {
    let visual = this.props.state.join('')

    if (visual === '') {
      visual = '0'
    }

    let className = `d-block${(this.props.darkMode) ? '' : ' border'}`
    return (
      <div
        className={className}
        style={{ backgroundColor: this.props.bg, color: this.props.text }}
      >
        <div className="p-3">
          {visual}
        </div>
      </div>
    )
  }
}

export default Display
