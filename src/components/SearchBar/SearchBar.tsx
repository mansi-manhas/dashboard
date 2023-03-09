import React from "react";

import { searchIcon } from "../../assets";
import {
  SearchBarWrapper,
  SearchBarPlaceholder,
  SearchBarInput,
} from "./SearchBar.styled";

const SearchBar = () => (
  <SearchBarWrapper>
    <SearchBarInput>
      <img src={searchIcon} alt="" />
      <SearchBarPlaceholder>Search</SearchBarPlaceholder>
    </SearchBarInput>
  </SearchBarWrapper>
);

export default SearchBar;
