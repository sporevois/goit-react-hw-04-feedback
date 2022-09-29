import {useState} from "react";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification";

export const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const results = { good, neutral, bad };
    const btnOptions = Object.keys(results);
    const totalResults = good + neutral + bad;
    const positivePercentage = Number(((good / totalResults) * 100).toFixed(0));

    const leaveFeedback = (e) => {
        switch (e.target.name) {
            case 'good':
                return setGood(prev => prev + 1);
            case 'neutral':
                return setNeutral(prev => prev + 1);
            case 'bad':
                return setBad(prev => prev + 1);
            default: {
                console.log('Empty action received.');
            }
        }
    };

    return (
        <div>
            <Section title="Please leave feedback">
                <FeedbackOptions
                    options={btnOptions}
                    leaveFeedback={leaveFeedback}
                />
            </Section>
            <Section title="Statistics">
                {!totalResults
                    ? <Notification message="There is no feedback" />
                    : <Statistics
                    results = {results}
                    total={totalResults}
                    positivePercentage={positivePercentage}
                    />
                }                    
            </Section>
        </div>
    )
}

