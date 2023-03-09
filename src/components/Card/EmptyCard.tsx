import React from 'react'

import { EmptyStateWrapper, AddComponentWrapper, EmptyStateTitle, EmptyStateSubtitle, EmptyCardActionButton } from './Card.styled';
import Card from './Card';
import { addIcon } from '../../assets';
import { ImgWrapper } from '../AvatarCard/AvatarCard.styled';

const EmptyCardDetails = () => (
    <EmptyStateWrapper>
       <AddComponentWrapper />
       <EmptyStateTitle>No components created yet</EmptyStateTitle>
       <EmptyStateSubtitle>Simply create your first component.</EmptyStateSubtitle>
       <EmptyStateSubtitle>Just click on the button</EmptyStateSubtitle>
       <EmptyCardActionButton>
            <ImgWrapper src={addIcon} alt='' style={{margin: '2px'}} />
            Add component
       </EmptyCardActionButton>
    </EmptyStateWrapper>
);

const EmptyCard = () => {

    return (
        <Card title='' content={<EmptyCardDetails />} />
    )
}

export default EmptyCard;