from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('cube.html', side='home')

@app.route('/about-us')
def about_us():
    return render_template('cube.html', side='about-us')

@app.route('/contact-us')
def contact_us():
    return render_template('cube.html', side='contact-us')

@app.route('/services')
def services():
    return render_template('cube.html', side='services')

@app.route('/reviews')
def reviews():
    return render_template('cube.html', side='reviews')

@app.route('/blog')
def blog():
    return render_template('cube.html', side='blog')

if __name__ == '__main__':
    app.run(debug=True)
