from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('cube.html', side='front')

@app.route('/back')
def back():
    return render_template('cube.html', side='back')

@app.route('/right')
def right():
    return render_template('cube.html', side='right')

@app.route('/left')
def left():
    return render_template('cube.html', side='left')

@app.route('/top')
def top():
    return render_template('cube.html', side='top')

@app.route('/bottom')
def bottom():
    return render_template('cube.html', side='bottom')

if __name__ == '__main__':
    app.run(debug=True)
