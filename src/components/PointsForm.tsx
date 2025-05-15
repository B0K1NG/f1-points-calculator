import React, { useState } from 'react';
import RaceInput from './RaceInput';
import { type Race } from '../types';
import { calculatePoints } from '../utils/calculatePoints';

interface PointsFormProps {
    onCalculate: (result: ReturnType<typeof calculatePoints>) => void;
}

export default function PointsForm({ onCalculate }: PointsFormProps) {
    const [races, setRaces] = useState<Race[]>([
        {id: 'race-1', position: 0}
    ]);

    const updateRacePosition = (id: string, position: number) => {
        setRaces(races.map(race => 
            race.id === id ? { ...race, position } : race
        ));
    };

    const addRace = () => {
        const newRaceId = `race-${races.length + 1}`;
        setRaces([...races, { id: newRaceId, position: 0 }]);
    };

    const removeRace = (id: string) => {
        if (races.length < 1) return;

        const newRaces = races.filter(race => race.id !== id);

        const renumbered = newRaces.map((race, index) => ({
            ...race,
            id: `race-${index + 1}`
        }));
        setRaces(renumbered);
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const result = calculatePoints(races);
        onCalculate(result);
    };

    return (
        <form className="points-form" onSubmit={handleSubmit}>
          <h2>F1 Season Points Calculator</h2>
          
          <div className="races-container">
            {races.map(race => (
              <RaceInput
                key={race.id}
                id={race.id}
                value={race.position}
                onChange={updateRacePosition}
                onRemove={removeRace}
              />
            ))}
          </div>
          
          <div className="form-actions">
            <button type="button" onClick={addRace} className="add-race">
              Add Race
            </button>
            <button type="submit" className="calculate">
              Calculate Points
            </button>
          </div>
        </form>
      );
}