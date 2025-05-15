import { type ChangeEvent } from 'react';

interface RaceInputProps {
  id: string;
  value: number;
  onChange: (id: string, position: number) => void;
  onRemove: (id: string) => void;
}

export default function RaceInput({ id, value, onChange, onRemove }: RaceInputProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const position = parseInt(e.target.value) || 0;
    onChange(id, position);
  };

  return (
    <div className="race-input">
      <label>
        Race {id.replace('race-', '')}:
        <input 
          type="number" 
          min="1"
          max="20"
          value={value || ''}
          onChange={handleChange}
          placeholder="Position"
        />
      </label>
      <button 
        type="button" 
        className="remove-race" 
        onClick={() => onRemove(id)}
      >
        Remove
      </button>
    </div>
  );
}