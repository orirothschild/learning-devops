from flask import Flask

app = Flask(__name__)

@app.route('/great')
def hello_world():
    return 'great!'

@app.route('/health')
def health_check():
    return 'OK'
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)  # Listen on all interfaces, port 8080