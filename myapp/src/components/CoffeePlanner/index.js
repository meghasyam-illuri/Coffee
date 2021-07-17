import {Component} from 'react'
import CoffeePlannerQuestion from '../CoffeePlannerQuestion'
import './index.css'

class CoffeePlanner extends Component {
  state = {
    selectCoffeeType: {
      DRINK_TYPE: '',
      COFFEE_TYPE: '',
      QUANTITY: '',
      GRIND_TYPE: '',
      DELIVER_TYPE: '',
    },
    displaySummary: false,
  }

  setSummarySection = value => {
    this.setState({displaySummary: value})
  }

  isAllOptionsSelected = () => {
    const {selectCoffeeType} = this.state
    if (
      selectCoffeeType.DRINK_TYPE !== '' &&
      selectCoffeeType.COFFEE_TYPE !== '' &&
      selectCoffeeType.QUANTITY !== '' &&
      selectCoffeeType.GRIND_TYPE !== '' &&
      selectCoffeeType.DELIVER_TYPE !== ''
    ) {
      return true
    }
    return false
  }

  renderSummarySection = () => {
    const {selectCoffeeType, displaySummary} = this.state

    if (displaySummary) {
      return (
        <div className="summary-container">
          {this.isAllOptionsSelected() ? (
            <p className="summary-description">
              I Drink my coffee as
              <span className="selected-summary">
                {` ${selectCoffeeType.DRINK_TYPE}`}
              </span>
              , with a
              <span className="selected-summary">
                {` ${selectCoffeeType.COFFEE_TYPE}`}
              </span>{' '}
              type of bean.
              <span className="selected-summary">
                {` ${selectCoffeeType.QUANTITY}`}
              </span>{' '}
              of
              <span className="selected-summary">
                {` ${selectCoffeeType.GRIND_TYPE}`}
              </span>{' '}
              ground, send to me
              <span>{` ${selectCoffeeType.DELIVER_TYPE}`}</span>
            </p>
          ) : (
            <p className="summary-description">
              Kindly select options for all the questions.
            </p>
          )}
        </div>
      )
    }
    return null
  }

  updatedCoffeeType = (questionType, optionTitle) => {
    const {selectCoffeeType} = this.state
    const newCoffeeType = {...selectCoffeeType}

    newCoffeeType[questionType] = optionTitle
    this.setState({selectCoffeeType: newCoffeeType})
    this.setSummarySection(false)
  }

  selectedCoffee = questionType => {
    const {selectCoffeeType} = this.state
    return selectCoffeeType[questionType]
  }

  coffeePlannerQuestionContainer = () => {
    const {coffeePlannerList} = this.props
    return (
      <ul className="questions-container">
        {coffeePlannerList.map(eachQuestion => (
          <CoffeePlannerQuestion
            key={eachQuestion.id}
            questionDetails={eachQuestion}
            selectedCoffee={this.selectedCoffee}
            updatedCoffeeType={this.updatedCoffeeType}
          />
        ))}
      </ul>
    )
  }

  renderSummary = () => {
    this.setSummarySection(true)
  }

  bodySection = () => (
    <div className="body-container">
      {this.coffeePlannerQuestionContainer()}
      <div className="button-container">
        <button
          className="create-button"
          type="button"
          onClick={this.renderSummary}
        >
          Create my plan
        </button>
      </div>
      {this.renderSummarySection()}
    </div>
  )

  headerSection = () => (
    <div className="header-container">
      <div className="header-content-container">
        <h1 className="header-title">Create a Plan</h1>
        <p className="header-description">
          We offer an assortment of the best artesian coffees from the globe
          delivered fresh to the door create your plan with this
        </p>
      </div>
    </div>
  )

  render() {
    return (
      <div className="app-container">
        {this.headerSection()}
        {this.bodySection()}
      </div>
    )
  }
}

export default CoffeePlanner
