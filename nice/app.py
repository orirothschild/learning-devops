from flask import Flask

app = Flask(__name__)

@app.route('/nice')
def hello_world():
    return 'nice!'

# Health check route
@app.route('/health')
def health_check():
    return 'OK'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
