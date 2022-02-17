import React, { memo } from 'react';
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

type CallbackType = (hero: HeroDTO, index: number) => void;

interface Props {
  data: HeroDTO;
  index: number;
  hasImage: boolean;
  handlePressHero: CallbackType;
}

function HeroBigCardComponent({ data, index, hasImage, handlePressHero }: Props) {
  return (
    <Container>
      <CardButton onPress={() => handlePressHero(data, index)}>
        <ImageWrapper source={{ uri: `${data.thumbnail.path}/standard_large.${data.thumbnail.extension}` }}>
          {
            hasImage && (
              <Index>{`# ${index}`}</Index>
            )
          }
        </ImageWrapper>
        <Divider />
        <Info>
          <Name>{data.name}</Name>
        </Info>
      </CardButton>
    </Container>
  );
}

export const HeroBigCard = memo(HeroBigCardComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.data, nextProps.data);
});