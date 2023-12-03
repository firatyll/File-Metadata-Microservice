# File Upload Form
## Description
This project provides a simple form with a file upload functionality. When you submit a file using the form, you will receive the file name, type, and size in bytes within the JSON response.
## Form Specification
- The form includes a file input field with the name attribute set to `upfile`.
### JSON Response
Upon submitting the form, the response will be a JSON object with the following information:
- **filename:** Name of the uploaded file.
- **filetype:** Type of the uploaded file.
- **filesize:** Size of the uploaded file in bytes.
#### Example Response
```json
{"filename": "example.txt", "filetype": "text/plain", "filesize": 1024}
```
## Installation
1. Download the project files to your computer.
2. Navigate to the project directory in the terminal or command prompt.
3. Install the necessary dependencies using the `npm install` command.
4. Start the application with the `npm start` command.
5. Use the API by visiting `http://localhost:3000` in your browser.
## Dependencies
- [Express.js](https://expressjs.com/): A lightweight web framework used for building web applications and APIs.
