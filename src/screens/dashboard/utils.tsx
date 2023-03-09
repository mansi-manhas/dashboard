import React from "react";

import AvatarCard from "../../components/AvatarCard/AvatarCard";
import Card from "../../components/Card/Card";
import EmptyCard from "../../components/Card/EmptyCard";
import { AppHeading } from "../../components/Heading/Heading.styled";
import SatisfactionRate from "../../components/SatisfactionRate/SatisfactionRate";
import SearchBar from "../../components/SearchBar/SearchBar";
import SegmentGraph from "../../components/SegmentGraph/SegmentGraph";
import StatsList from "../../components/StatsList/StatsList";
import SummaryCard from "../../components/SummaryCard/SummaryCard";
import {
  SummaryGraphWrapper,
  LastRowWrapper,
} from "../../components/SummaryCard/SummaryCard.styled";
import { TagWrapper, TagFont } from "../../components/Tag/Tag.styled";
import { HeaderWrapper, TitleAndTagWrapper } from "./style.styled";

export const DashboardHeader = () => (
  <HeaderWrapper>
    <TitleAndTagWrapper>
      <AppHeading>Hello Moe</AppHeading>
      <TagWrapper>
        <TagFont>Premium</TagFont>
      </TagWrapper>
    </TitleAndTagWrapper>
    <div>
      <SearchBar />
    </div>
  </HeaderWrapper>
);

export const FirstRow = () => (
  <div>
    <AvatarCard />
  </div>
);

export const SecondRow = () => (
  <SummaryGraphWrapper>
    <SummaryCard />
    <Card
      title="Top countries"
      subtitle="Favorites"
      content={<StatsList />}
      footerLabel="View all"
    />
  </SummaryGraphWrapper>
);

export const ThirdRow = () => (
  <LastRowWrapper>
    <Card
      title="Segmentation"
      subtitle="All users"
      content={<SegmentGraph />}
      footerLabel="Details"
    />
    <Card
      title="Satisfaction rate"
      subtitle="From all projects"
      content={<SatisfactionRate />}
      footerLabel="Details"
    />
    <EmptyCard />
  </LastRowWrapper>
);
