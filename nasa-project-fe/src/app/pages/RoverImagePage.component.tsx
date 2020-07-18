import React from "react";
import { RoverList } from "../components/SelectRover/RoverList";
import { SelectDate } from "../components/SelectDate";
import { RoverImage } from "../components/RoverImage";
import { Header } from "../components/Header";
import styled from "styled-components";

const Page = styled.div``;

export const RoverImagePage = () => {
  return (
    <Page>
      <Header />
      <RoverList />
      <SelectDate />
      <RoverImage />
    </Page>
  );
};
