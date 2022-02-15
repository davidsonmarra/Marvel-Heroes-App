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

type CallbackType = (hero: HeroDTO) => void

interface Props {
  data: HeroDTO;
  index: number;
  hasImage: boolean;
  handlePressHero: CallbackType;
}

function HeroCardComponent({ data, index, hasImage, handlePressHero }: Props) {
  return (
    <Container>
      <CardButton onPress={() => handlePressHero(data)}>
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