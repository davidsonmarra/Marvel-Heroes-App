import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  padding: ${RFValue(30)}px 0 ${RFValue(16)}px;
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
  border-top-right-radius: ${RFValue(8)}px;
  border-bottom-right-radius: ${RFValue(8)}px;
  border-left-width: ${RFValue(1)}px;
  border-left-color: ${({ theme }) => theme.colors.black};
`;

export const SearchButton = styled(RectButton)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;