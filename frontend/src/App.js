import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [check,setCheck]=useState('');

  const handleFetch = async () => {
    setLoading(true);
    setName('');
    try {
      const response = await fetch(`http://20.2.90.168:8080/api/name/${id}`);
      const data = await response.text();
      setName(data); 
      console.log(data);
    } catch {
      setName('❌ Could not fetch name');
    } finally {
      setLoading(false);
    }
  };

   const handleCheck = async () => {
    setLoading(true);
    setName('');
    try {
      const response = await fetch(`http://20.2.90.168:8080/api/hey`);
      const data = await response.text();
      setCheck(data);// Use the string directly
      console.log(data);
    } catch {
      setName('❌ Could not fetch name');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleCheck();
    // eslint-disable-next-line
  }, []);

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
      <div>
        <h1>
          {check}
          
        </h1>
      </div>
    </div>
  );
}

export default App;
