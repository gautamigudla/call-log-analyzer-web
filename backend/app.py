from flask import Flask, request, jsonify

app = Flask(__name__)

# Endpoint for submitting a question and documents
@app.route('/submit_question_and_documents', methods=['POST'])
def submit_question_and_documents():
    # Get question and documents from the request
    data = request.json
    question = data.get('question')
    documents = data.get('documents')
    auto_approve = data.get('autoApprove', False)

    # Process the question and documents here
    # You can call a function to handle document processing and return the result

    # For now, let's assume the processing is done and return a success response
    response = {
        "message": "Question and documents submitted successfully",
        "question": question,
        "documents": documents,
        "autoApprove": auto_approve
    }
    return jsonify(response), 200

# Endpoint for getting question and facts
@app.route('/get_question_and_facts', methods=['GET'])
def get_question_and_facts():
    # For now, let's assume the processing is done and return the result
    response = {
        "question": "What are our product design decisions?",
        "factsByDay": {
            "2024-03-14": [
                "The team has decided to go with a modular design for the product.",
                "The team has decided to use a responsive design to ensure the product works well on all devices.",
                "The team has decided to use a dark theme for the user interface."
            ],
            "2024-03-15": [
                "The team has decided to provide both dark and light theme options for the user interface."
            ],
            "2024-03-16": [
                "The team has decided to focus on a desktop-first design, considering responsiveness as the product evolves."
            ]
        },
        "status": "done"
    }
    return jsonify(response), 200

if __name__ == '__main__':
    app.run(debug=True)
