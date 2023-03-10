import React from "react";
import {
  BenchCard,
  CardTitle,
  CardSubTitle,
  CardInfo,
  CardWeight,
} from "./BenchmarksCardStyle";
const BenchCards = ({ title, number, subtitle, info, weights }) => {
  return (
    <BenchCard>
      <CardTitle>{title} </CardTitle>
      <CardSubTitle>{subtitle} </CardSubTitle>
      <CardInfo> {info} </CardInfo>
      <CardWeight> {weights} </CardWeight>
    </BenchCard>
  );
};

export default BenchCards;
