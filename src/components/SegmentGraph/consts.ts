import { notSpecifiedStatus, maleStatus, femaleStatus, otherSpecifiedStatus } from "../../assets"
import { SegmentDataType } from "./types"

/**
 * This is mock data, this will be replaced when logic for the segment graph is built
 */
export const segmentData: SegmentDataType[] = [
    {
        label: 'Not Specified',
        height: '123px',
        color: '#919294',
        statusIcon: notSpecifiedStatus,
    },
    {
        label: 'Male',
        height: '94px',
        color: '#CACCF7',
        statusIcon: maleStatus,
    },
    {
        label: 'Female',
        height: '65px',
        color: '#828AED',
        statusIcon: femaleStatus,
    },
    {
        label: 'Other',
        height: '32px',
        color: '#4A4DE6',
        statusIcon: otherSpecifiedStatus,
    },
]