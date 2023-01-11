from flask import Flask, request

app = Flask(__name__)

@app.route('/data', methods=['GET'])
def handle_get():
    # Handle GET request
    data = 'This is a GET request'
    print(request)
    return data

@app.route('/data', methods=['POST'])
def handle_post():
    # Handle POST request
    # data = request.get_json()
    print(request)
    # Do something with the data
    return 'Data received'

if __name__ == '__main__':
    app.run(debug=True)
