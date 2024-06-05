from flask import Flask
import os

app = Flask(__name__)
counter_file = 'counter.txt'

# Initialize the counter file if it does not exist
if not os.path.exists(counter_file):
    with open(counter_file, 'w') as f:
        f.write('0')

def get_counter():
    with open(counter_file, 'r') as f:
        return int(f.read().strip())

def increment_counter():
    with open(counter_file, 'r+') as f:
        count = int(f.read().strip()) + 1
        f.seek(0)
        f.write(str(count))
    return count

@app.route('/')
def index():
    count = increment_counter()
    return f'Served {count} times'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
