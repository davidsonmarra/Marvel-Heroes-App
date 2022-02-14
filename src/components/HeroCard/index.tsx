import React, { memo, useState } from 'react';
import { HeroDTO } from '../../DTOs/HeroDTO';
import {
  Container,
  CardButton,
  ImageWrapper,
  Thumbnail,
  Divider,
  Info,
  Name
} from './styles';

interface Props {
  data: HeroDTO;
  index: number;
}

function HeroCardComponent({ data, index }: Props) {
  return (
    <Container>
      <CardButton>
        <ImageWrapper>
          <Thumbnail source={{ uri: `${data.thumbnail.path}/standard_fantastic.${data.thumbnail.extension}` }}/>
        </ImageWrapper>
        <Divider />
        <Info>
          <Name numberOfLines={2}>{data.name}</Name>
        </Info>
      </CardButton>
    </Container>
  );
}

export const HeroCard = memo(HeroCardComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.data, nextProps.data);
});