export interface AvatarResponseType {
    avatar: any;
    name: string;
    position: string;
    location: string;
    totalTasks: number;
    completedTasks: number;
    isIncrease: boolean;
    amountDifference: number;
}

export interface DifferenceDetailsProps {
    isIncrease: boolean;
    amountDifference?: number;
}

export interface AvatarDetailsProps {
    name?: string;
    position?: string;
    location?: string;
}