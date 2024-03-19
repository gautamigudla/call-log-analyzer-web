import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'; // Import Axios library
import QuestionAnswerScreen from './components/QuestionAnswerScreen';
import DocumentAdditionScreen from './components/DocumentAdditionScreen';

const App = () => {
    // Function to handle submitting a question
    const handleSubmitQuestion = (question) => {
        // Make a POST request to submit the question
        axios.post('your_url.com/submit_question', { question })
            .then(response => {
                // Handle successful submission
                console.log('Question submitted successfully:', response.data);
            })
            .catch(error => {
                // Handle error
                console.error('Error submitting question:', error);
            });
    };

    // Function to handle adding documents
    const handleAddDocuments = (documents) => {
        // Make a POST request to add documents
        axios.post('your_url.com/add_documents', { documents })
            .then(response => {
                // Handle successful addition
                console.log('Documents added successfully:', response.data);
            })
            .catch(error => {
                // Handle error
                console.error('Error adding documents:', error);
            });
    };

    // Event listener for submitting a question
    const submitQuestion = () => {
        const question = document.getElementById('questionInput').value;
        handleSubmitQuestion(question);
    };

    // Event listener for adding documents
    const addDocuments = () => {
        const documentUrls = document.getElementById('documentInput').value.split('\n');
        handleAddDocuments(documentUrls);
    };

    return (
        <div>
            <QuestionAnswerScreen />
            <DocumentAdditionScreen />
            {/* Input field for the question */}
            <input type="text" id="questionInput" placeholder="Enter your question" />
            {/* Button to submit the question */}
            <button onClick={submitQuestion}>Submit Question</button>
            {/* Input field for adding document URLs */}
            <textarea id="documentInput" placeholder="Enter document URLs (one per line)" />
            {/* Button to add documents */}
            <button onClick={addDocuments}>Add Documents</button>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
