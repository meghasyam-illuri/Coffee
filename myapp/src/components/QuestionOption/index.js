import {Component} from "react"
import "./index.css"

class QuestionOption extends Component{

    selectOption = () => {
        const {optionDetails, updatedCoffeeType, questionType} = this.props
        const {optionTitle} = optionDetails

        updatedCoffeeType(questionType, optionTitle)
    }

    render(){
        const {optionDetails, selectedOption} = this.props
        const {optionTitle, description} = optionDetails

        const isOptionSelected = optionTitle === selectedOption
        const selectedOptionBg = isOptionSelected ? "option-button selected-option-bg" : "option-button"
        const selectedTitle = isOptionSelected ? "option-title selected-title" : "option-title"
        const selectedDescription = isOptionSelected ? "option-description selected-description" : "option-description"
        return(
            <li className="each-option-container">
                <button type="button" 
                        className={selectedOptionBg}
                        onClick={this.selectOption}>
                            <div className="title-container">
                                <h1 className={selectedTitle}>{optionTitle}</h1>
                                {isOptionSelected ? 
                                (
                                    <img src="https://assets.ccbp.in/frontend/react-js/coffee-planner-white-cup-img.png" alt="white cup" className="coffee-icon"/>
                                ) : (
                                    <img src="https://assets.ccbp.in/frontend/react-js/coffee-planner-blue-cup-img.png" alt="blue cup" className="coffee-icon"/>
                                )}
                                
                            </div>
                            <p className={selectedDescription}>{description}</p>
                </button>
            </li>
        )
    }
}

export default QuestionOption