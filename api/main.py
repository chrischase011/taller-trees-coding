from flask import Flask
from flask_cors import CORS

# Create a Flask application instance
app = Flask(__name__,
            static_url_path='', 
            static_folder='assets',
            template_folder='templates')

CORS(app)

# Define a route for the home page
@app.route('/activate')
def home():
    return "Hello, Flask!"

@app.route('/compute_average')
def compute_average():
    from average import run_datasets
    
    run_datasets('assets/city-trees.json', 'assets/property-data.csv')
    
    return "Average prices computed!"

@app.route('/average_prices')
def average_prices():
    import json
    try:
        with open('assets/average_prices.json', 'r') as f:
            average_prices = json.load(f)
            return average_prices
    except FileNotFoundError:
        return "Average prices not computed yet!"

# Run the application
if __name__ == '__main__':
    app.run(debug=True)