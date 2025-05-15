import { type PointsResult as PointsResultType } from "../types/index";

interface PointsResultProps {
    result: PointsResultType | null;
}

export default function PointsResult({result}: PointsResultProps) {
    if (!result) return null;

    return (
        <div className="points-result">
            <h3>Season Results</h3>
            <p className="total-points">Total Points: {result.totalPoints}</p>

            <div className="points-breakdown">
                <h4>Breakdown:</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Race</th>
                            <th>Position</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {result.breakdown.map((race) => (
                            <tr key={race.raceId}>
                                <td>Race {race.raceId.replace('race-', '')}</td>
                                <td>Position {race.position}</td>
                                <td>Points {race.points}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}