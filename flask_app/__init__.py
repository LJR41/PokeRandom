from flask import Flask
app = Flask(__name__)
app.secret_key = "cynthias_garchomp"
DATABASE = 'pokerandom_schema'