import { janeSmithAvatar, nadeemIsacAvatar, johnkAvatar } from "../../assets"
import { AvatarResponseType } from "./types"

/**
 * This is used as mock data 
 * It will be replaced with an actual api call in the real application
 */
export const avatarData: AvatarResponseType[] = [
    {
        avatar: janeSmithAvatar,
        name: 'Jane Smith',
        position: 'Sales manager',
        location: 'France',
        totalTasks: 6,
        completedTasks: 3,
        isIncrease: true,
        amountDifference: 3490.00,
    },
    {
        avatar: nadeemIsacAvatar,
        name: 'Nadeem Isac',
        position: 'Sales manager',
        location: 'France',
        totalTasks: 6,
        completedTasks: 3,
        isIncrease: false,
        amountDifference: 490.00,
    },
    {
        avatar: johnkAvatar,
        name: 'John K.',
        position: 'Sales manager',
        location: 'France',
        totalTasks: 6,
        completedTasks: 3,
        isIncrease: true,
        amountDifference: 3490.00,
    },
]