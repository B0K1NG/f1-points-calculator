import { type Race, type PointsResult } from "../types/index";

const POINTS_SYSTEM: Record<number, number> = {
    1: 25,
    2: 18,
    3: 15,
    4: 12,
    5: 10,
    6: 8,
    7: 6,
    8: 4,
    9: 2,
    10: 1,
};

export function calculatePoints(races: Race[]): PointsResult {
    const breakdown = races.map(race => {
        const points = POINTS_SYSTEM[race.position] || 0;
        return {
            raceId: race.id,
            position: race.position,
            points
        };
    });

    const totalPoints = breakdown.reduce((sum, race) => sum + race.points, 0);

    return {
        totalPoints,
        breakdown
    };
}