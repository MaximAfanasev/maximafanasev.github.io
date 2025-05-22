from flask import Flask, jsonify, request
from flask_cors import CORS
import json
import random

app = Flask(__name__)
CORS(app)

# Загрузка задач из JSON-файла
def load_puzzles():
    with open('puzzles.json', 'r', encoding='utf-8') as f:
        return json.load(f)

@app.route('/puzzle', methods=['GET'])
def get_puzzle():
    puzzles = load_puzzles()
    difficulty = request.args.get('difficulty')  # Фильтр по сложности
    if difficulty:
        filtered = [p for p in puzzles if p['difficulty'] == difficulty]
        return jsonify(random.choice(filtered if filtered else puzzles))
    return jsonify(random.choice(puzzles))

if __name__ == '__main__':
    app.run(debug=True)