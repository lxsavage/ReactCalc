import React from 'react';
import math from 'mathjs'
import Button from './button'
import ButtonContainer from './buttonContainer'
import ButtonRow from './buttonRow'
import Display from './display'

import Colors from '../colors.json'

const {ipcRenderer} = window.require('electron')
var darkMode = ipcRenderer.sendSync('IS_DARK_MODE')

class App extends React.Component {
  constructor(props) {
    super(props)

    // Set the color scheme
    this.colors = Colors.LightMode
    if (darkMode) {
      this.colors = Colors.DarkMode
    }

    document.body.style.backgroundColor = this.colors.bg

    this.state = {
      history: [[]],
      operations: []
    }
  }

  calculateOperations = () => {
    const newHistory = [...this.state.history, this.state.operations]
    let result = this.state.operations.join('')
    if (result) {
      result = math.eval(result)
      result = math.format(result, { precision: 14 })
      result = String(result)
      this.setState({
        history: newHistory,
        operations: [result]
      })
    }
  }
  backspace = () => {
    let newOps = this.state.operations
    newOps.pop()
    this.setState({
      operations: newOps
    })
  }
  historyUp = () => {
    if (this.state.history.length > 1) {
      let newHistory = this.state.history
      let newOps = newHistory.pop()
      this.setState({
        history: newHistory,
        operations: newOps
      })
    }
  }
  handleClick = (e) => {
    const value = e.target.getAttribute('data-value')
    switch (value) {
      case 'clearentries':
        this.setState({
          history: []
        })
      case 'clear':
        this.setState({
          operations: []
        })
        break
      case 'equal':
        this.calculateOperations()
        break
      case 'backspace':
        this.backspace()
        break
      case 'uprow':
        this.historyUp()
        break
      default:
        const newOperations = [...this.state.operations, value]
        this.setState({
          operations: newOperations
        })
        break
    }
  }
  render() {
    return (
      <div className="App">
        <Display state={this.state.operations} bg={this.colors.panelBg} text={this.colors.text} darkMode={darkMode} />
        <ButtonContainer>
          <ButtonRow>
            <Button onClick={this.handleClick} label="！" value="clearentries" />
            <Button onClick={this.handleClick} label="Ｃ" value="clear" />
            <Button onClick={this.handleClick} label="＾" value="uprow" />
            <Button onClick={this.handleClick} label="／" value="/" />

          </ButtonRow>
          <ButtonRow>
            <Button onClick={this.handleClick} label="７" value="7" />
            <Button onClick={this.handleClick} label="８" value="8" />
            <Button onClick={this.handleClick} label="９" value="9" />
            <Button onClick={this.handleClick} label="＊" value="*" />
          </ButtonRow>
          <ButtonRow>
            <Button onClick={this.handleClick} label="４" value="4" />
            <Button onClick={this.handleClick} label="５" value="5" />
            <Button onClick={this.handleClick} label="６" value="6" />
            <Button onClick={this.handleClick} label="－" value="-" />
          </ButtonRow>
          <ButtonRow>
            <Button onClick={this.handleClick} label="１" value="1" />
            <Button onClick={this.handleClick} label="２" value="2" />
            <Button onClick={this.handleClick} label="３" value="3" />
            <Button onClick={this.handleClick} label="＋" value="+" />
          </ButtonRow>
          <ButtonRow>
            <Button onClick={this.handleClick} label="０" value="0" />
            <Button onClick={this.handleClick} label="．" value="." />
            <Button onClick={this.handleClick} label="＜" value="backspace" />
            <Button onClick={this.handleClick} label="＝" value="equal" />
          </ButtonRow>
        </ButtonContainer>
      </div>
    );
  }
}

export default App;
