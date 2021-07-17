import {Component} from "react"
import QuestionOption from "../QuestionOption"
import "./index.css"

class CoffeePlannerQuestion extends Component {
    render(){
        const {questionDetails, selectedCoffee, updatedCoffeeType} = this.props
        const {questionType, questionTitle, optionsList} = questionDetails
        const selectedOption = selectedCoffee(questionType)
        return(
            <li className="each-question-container">
                <h1 className="question-title">{questionTitle}</h1>
                <ul className="option-container">
                    {optionsList.map(eachOption => (
                        <QuestionOption 
                        key={eachOption.id} 
                        optionDetails={eachOption}
                        selectedOption={selectedOption}
                        updatedCoffeeType={updatedCoffeeType}
                        questionType={questionType}/>
                    ))}
                </ul>
            </li>
        )
    }
}

export default CoffeePlannerQuestion