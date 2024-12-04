'use client';

import { useState } from 'react';
import Link from "next/link";

interface LengthResponse {
  length: number;
}

interface ErrorResponse {
  error: string;
}

export default function HomePage() {
  const [name, setName] = useState('');
  const [nameLength, setNameLength] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const calculateNameLength = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/calculate-length', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });

      const data = await response.json() as LengthResponse | ErrorResponse;
      if (response.ok && 'length' in data) {
        setNameLength(data.length);
      } else {
        console.error('Failed to calculate length');
      }
    } catch (error) {
      console.error('Error calculating length:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      gap: '1rem',
      backgroundColor: 'lightgreen'
    }}>
      <h1 style={{
        fontSize: '4rem',
        fontWeight: 'bold'
      }}>
        Hello {name || 'World'}
      </h1>
      
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setNameLength(null);
        }}
        placeholder="Enter your name"
        style={{
          padding: '0.5rem',
          fontSize: '1.2rem',
          borderRadius: '4px',
          border: '1px solid #ccc'
        }}
      />

      <button
        onClick={calculateNameLength}
        disabled={isLoading}
        style={{
          padding: '0.5rem 1rem',
          fontSize: '1.2rem',
          borderRadius: '4px',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          cursor: isLoading ? 'not-allowed' : 'pointer',
          opacity: isLoading ? 0.7 : 1
        }}
      >
        {isLoading ? 'Calculating...' : 'Calculate Name Length'}
      </button>

      {nameLength !== null && (
        <p style={{ fontSize: '1.2rem' }}>
          {name ? `Your name has ${nameLength} characters` : ''}
        </p>
      )}
    </div>
  );
}
