import React from 'react';
import {
  Container,
  Glass,
  Gradient
} from './styles';

interface Props {
  children: React.ReactNode;
}

export function GlassHeroCard({ children }: Props) {
  return (
    <Container>
      <Glass>
        <Gradient>
          { children }
        </Gradient>
      </Glass>
    </Container>
  );
}