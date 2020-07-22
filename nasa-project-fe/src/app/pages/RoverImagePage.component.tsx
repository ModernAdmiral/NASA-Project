import React from "react";
import { RoverList } from "../components/SelectRover/RoverList/RoverList";
import { SelectDate } from "../components/SelectDate/SelectDate";
import { RoverImages } from "../components/ViewImages/RoverImages";
import { Header } from "../components/Header/Header";
import styled from "styled-components";

const Page = styled.div``;

export const RoverImagePage = () => {
  return (
    <Page>
      <Header />
      <RoverList />
      <SelectDate />
      <RoverImages />
    </Page>
  );
};
