export interface Race {
    id: string;
    position: number;
}

export interface PointsResult {
    totalPoints: number;
    breakdown: {
        raceId: string;
        position: number;
        points: number;
    }[];
}