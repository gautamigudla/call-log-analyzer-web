import React from 'react';

const QuestionAnswerScreen = () => {
    return (
        <div className="question-answer-screen">
            <h2>Question and Answer Screen</h2>
            <div className="question">
                <h3>Question:</h3>
                <p>What product design decisions did the team make?</p>
            </div>
            <div className="answer">
                <h3>Answer:</h3>
                <ul>
                    <li>The team will use blue for the color scheme of the app</li>
                    <li>The team will make the app accessible to all users</li>
                    {/* Add dynamically generated answers here */}
                </ul>
            </div>
            {/* Add time navigation feature here */}
        </div>
    );
}

export default QuestionAnswerScreen;
