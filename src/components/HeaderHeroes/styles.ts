import styled, { css } from 'styled-components/native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

interface SearchBoxProps {
  enabled: boolean;
}

interface ContainerProps {
  hasBackButton: boolean;
}

interface ButtonProps extends RectButtonProps {
  onPress: () => void;
}

export const Container = styled.View<ContainerProps>`
  ${({ hasBackButton }) => (hasBackButton ? css`
    flex-direction: row;
    align-items: center;
    justify-content: center;
  ` : css`
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `)};
  padding: ${RFValue(30 + getStatusBarHeight())}px 0 ${RFValue(16)}px;
  background-color: ${({ theme }) => theme.colors.header};
`;

export const WrapperInput = styled.View`
  width: 80%;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.input};
  align-items: center;
  margin-top: ${RFValue(16)}px;
  border-radius: ${RFValue(8)}px;
`;

export const SearchBox = styled.View`
  width: 20%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  opacity: 1;
  border-top-right-radius: ${RFValue(8)}px;
  border-bottom-right-radius: ${RFValue(8)}px;
  border-left-width: ${RFValue(1)}px;
  border-left-color: ${({ theme }) => theme.colors.black};
`;

export const Loading = styled.ActivityIndicator.attrs(({ theme }) => ({
  size: RFValue(24),
  color: theme.colors.title_light
}))``;