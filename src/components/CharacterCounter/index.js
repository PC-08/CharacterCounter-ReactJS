import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

const GetWordLength = props => {
  const {eachWord} = props
  const {word} = eachWord

  return (
    <li>
      <p className="word">
        {word}:{word.length}
      </p>
    </li>
  )
}

class CharacterCounter extends Component {
  state = {userInput: '', wordsArray: []}

  onClickAdd = event => {
    event.preventDefault()
    const {userInput} = this.state
    const newIn = {
      id: uuidv4(),
      word: userInput,
    }
    this.setState(prevState => ({
      userInput: '',
      wordsArray: [...prevState.wordsArray, newIn],
    }))
  }

  onUserChange = event => {
    this.setState({userInput: event.target.value})
  }

  render() {
    const {userInput, wordsArray} = this.state
    return (
      <div className="bg">
        <div className="c1">
          <div>
            <h1 className="chead">Count the characters like a Boss...</h1>
          </div>
          <div>
            {wordsArray.length === 0 ? (
              <img
                className="img"
                alt="no user inputs"
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png "
              />
            ) : (
              <ul className="ul">
                {wordsArray.map(eachWord => (
                  <GetWordLength key={eachWord.id} eachWord={eachWord} />
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="c2">
          <h1 className="c2head">Character Counter</h1>
          <div className="c2sc">
            <form>
              <input
                value={userInput}
                onChange={this.onUserChange}
                type="text"
                className="in"
                placeholder="Enter the Characters here"
              />
              <button onClick={this.onClickAdd} className="btn" type="submit">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default CharacterCounter
