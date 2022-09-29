import { Component } from "react";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification";

export class App extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

	leaveFeedback = (e) => {
		const name = e.target.name;
		this.setState((prevState) => ({
			[name]: prevState[name] + 1
		}));
	};

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const total = this.countTotalFeedback();
        if (!total) {
            return 0;
        }
        const percentage = Number(((good / total) * 100).toFixed(0));
        return percentage;        
    }

    render() {
        const { good, neutral, bad } = this.state;
        const options = Object.keys(this.state);
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();
        return (
            <div>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={options}
                        leaveFeedback={this.leaveFeedback}
                    />
                </Section>
                <Section title="Statistics">
                    {!total
                        ? <Notification message="There is no feedback" />
                        : <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={total}
                        positivePercentage={positivePercentage}
                        />
                    }                    
                </Section>
            </div>
        )
    }
}

