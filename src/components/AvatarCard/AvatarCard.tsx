import React from "react";

import {
  AvatarCardWrapper,
  AvatarWrapper,
  AvatarHeaderWrapper,
  TaskLabel,
  CardWrapper,
  ImgWrapper,
  AvatarCardItem,
  AvatarHeaderItem,
} from "./AvatarCard.styled";
import { progressBar } from "../../assets";
import { avatarData } from "./consts";
import { AvatarDetails, DifferenceDetails } from "./utils";

const AvatarCard = () => {
  return (
    <CardWrapper>
      {avatarData.map((avatar, idx) => (
        <AvatarCardWrapper key={idx}>
          <AvatarCardItem>
            <AvatarHeaderWrapper>
              <AvatarHeaderItem>
                <AvatarWrapper avatar={avatar.avatar} />
                <AvatarDetails
                  name={avatar.name}
                  position={avatar.position}
                  location={avatar.location}
                />
              </AvatarHeaderItem>
              <span>
                <DifferenceDetails
                  amountDifference={avatar.amountDifference}
                  isIncrease={avatar.isIncrease}
                />
              </span>
            </AvatarHeaderWrapper>
            <div>
              <TaskLabel>
                {avatar.completedTasks} from {avatar.totalTasks} tasks completed
              </TaskLabel>
              <ImgWrapper src={progressBar} alt="" />
            </div>
          </AvatarCardItem>
        </AvatarCardWrapper>
      ))}
    </CardWrapper>
  );
};

export default AvatarCard;
