from flask import Flask, render_template, request, redirect, flash
from dotenv import load_dotenv
import os

# Load the environment variables from the specific file SECRET_KEY.env
load_dotenv('SECRET_KEY.env')  # Load the SECRET_KEY.env file

app = Flask(__name__)

# Retrieve the secret key from the environment variables
app.secret_key = os.getenv("SECRET_KEY")

# Check if secret_key is set, if not raise an error
if not app.secret_key:
    raise ValueError("No SECRET_KEY set in SECRET_KEY.env file")

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/contact', methods=['POST'])
def contact():
    name = request.form['name']
    email = request.form['email']
    message = request.form['message']

    # Save to a file or database (example shown here)
    with open('contacts.txt', 'a') as file:
        file.write(f"Name: {name}\nEmail: {email}\nMessage: {message}\n{'-'*20}\n")
    
    flash('Message sent successfully!', 'success')
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)
