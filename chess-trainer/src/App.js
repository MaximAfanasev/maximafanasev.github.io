import React, { useState, useEffect } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import axios from 'axios';

function App() {
  const [game, setGame] = useState(new Chess());
  const [fen, setFen] = useState(game.fen());
  const [puzzle, setPuzzle] = useState(null);
  const [hint, setHint] = useState('');
  const [difficulty, setDifficulty] = useState('all');

  const fetchPuzzle = async (level = 'all') => {
    try {
      const url = level === 'all' 
        ? 'http://127.0.0.1/:5000/puzzle' 
        : `http://localhost:5000/puzzle?difficulty=${level}`;
      
      const res = await axios.get(url);
      setPuzzle(res.data);
      const newGame = new Chess(res.data.fen);
      setGame(newGame);
      setFen(newGame.fen());
      setHint(res.data.hint || '');
    } catch (err) {
      console.error("Ошибка загрузки задачи:", err);
    }
  };

  useEffect(() => {
    fetchPuzzle(difficulty);
  }, [difficulty]);

  const onDrop = (sourceSquare, targetSquare) => {
    try {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q',
      });

      if (move === null) return false;

      setFen(game.fen());

      if (puzzle && puzzle.solution.includes(move.san)) {
        alert("Правильно! Загрузка следующей задачи...");
        fetchPuzzle(difficulty);
      }

      return true;
    } catch (e) {
      return false;
    }
  };

  return (
    <div style={{ width: '500px', margin: '50px auto' }}>
      <h1>Шахматный тренажёр</h1>
      <div>
        <label>Сложность: </label>
        <select 
          value={difficulty} 
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="all">Все</option>
          <option value="easy">Лёгкая</option>
          <option value="medium">Средняя</option>
          <option value="hard">Сложная</option>
        </select>
      </div>
      <p>{hint || 'Сделайте лучший ход!'}</p>
      <Chessboard 
        position={fen} 
        onPieceDrop={onDrop} 
        boardWidth={500}
      />
      <button onClick={() => fetchPuzzle(difficulty)}>Новая задача</button>
    </div>
  );
}

export default App;