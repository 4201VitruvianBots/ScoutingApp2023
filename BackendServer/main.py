from flask import Flask, request

app = Flask(__name__)
match_list=[]
@app.route('/data', methods=['GET'])
def handle_get():
    # Handle GET request
    data = 'This is a GET request'
    print(request)
    return match_list

@app.route('/data', methods=['POST'])
def handle_post():
    # Handle POST request\
    formData = request.form
    # data = request.get_json()
    print(request)
    print(formData)
    match_list.append(formData)
    #for i in variable:
       # print(i)
    # Do something with the data
    return 'Data received'

if __name__ == '__main__':
    app.run(debug=True)
