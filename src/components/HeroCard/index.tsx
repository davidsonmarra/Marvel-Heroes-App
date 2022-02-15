import React, { memo, useState } from 'react';
import { HeroDTO } from '../../DTOs/HeroDTO';
import {
  Container,
  CardButton,
  ImageWrapper,
  Index,
  Divider,
  Info,
  Name
} from './styles';

interface Props {
  data: HeroDTO;
  index: number;
  hasImage: boolean;
}

function HeroCardComponent({ data, index, hasImage }: Props) {
  return (
    <Container>
      <CardButton onPress={() => {}}>
        <ImageWrapper source={{ uri: `${data.thumbnail.path}/standard_fantastic.${data.thumbnail.extension}` }}>
          {
            hasImage && (
              <Index>{`# ${index}`}</Index>
            )
          }
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