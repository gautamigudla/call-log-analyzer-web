import React from 'react';

const DocumentAdditionScreen = () => {
    return (
        <div className="document-addition-screen">
            <h2>Document Addition Screen</h2>
            <div className="form">
                <label htmlFor="question">Question:</label>
                <input type="text" id="question" name="question" />
                <label htmlFor="document-url">Document URL:</label>
                <input type="text" id="document-url" name="document-url" />
                <button>Add Document</button>
            </div>
        </div>
    );
}

export default DocumentAdditionScreen;
