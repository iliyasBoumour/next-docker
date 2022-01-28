import styled from "styled-components";
import { Container } from "@mui/material";

export const MyContainer = styled(Container)`
  overflow: hidden;
  padding-left: 0;
  padding-right: 0;
  @media (min-width: 1536px) {
    max-width: 1600px;
  }
  @media (min-width: 900px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
