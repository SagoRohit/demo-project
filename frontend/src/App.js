import React, { useState } from 'react';
import './App.css';

function App() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFetch = async () => {
    setLoading(true);
    setName('');
    try {
      const response = await fetch(`/api/name/${id}`);
      const data = await response.text();
      setName(data);
    } catch {
      setName('❌ Could not fetch name');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="center-card">
        <div className="title">🔎 Find Name by ID</div>
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter ID"
            value={id}
            onChange={e => setId(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleFetch()}
            disabled={loading}
          />
          <button onClick={handleFetch} disabled={loading || !id}>
            {loading ? "Loading..." : "Get Name"}
          </button>
        </div>
        {name && (
          <div className="result-box">
            <span style={{ fontWeight: "bold" }}>Name:</span> {name}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
