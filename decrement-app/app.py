from flask import Flask
import redis
import os
import socket

app = Flask(__name__)

# Connect to Redis
redis_host = os.getenv('REDIS_HOST', 'redis-service')
redis_port = int(os.getenv('REDIS_PORT', 6379))
r = redis.Redis(host=redis_host, port=redis_port, db=0)

@app.route('/')
def index():
    count = r.decr('counter')
    hostname = socket.gethostname()
    return f'Pod: {hostname}, Decreased count to {count}'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
