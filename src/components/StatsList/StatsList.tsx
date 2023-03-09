import React from "react";

import {
  ListWrapper,
  ListItemWrapper,
  FlagIconWrapper,
  ListItemText,
  ListItemTitle,
} from "./StatsList.styled";
import { topCountriesList } from "./consts";

const StatsList: React.FC = () => {
  return (
    <ListWrapper>
      {topCountriesList.map((country, idx) => (
        <ListItemWrapper key={idx}>
          <FlagIconWrapper icon={country.icon} />
          <ListItemText>
            <ListItemTitle>{country.title}</ListItemTitle>
            <p>{country.stats}</p>
          </ListItemText>
        </ListItemWrapper>
      ))}
    </ListWrapper>
  );
};

export default StatsList;
