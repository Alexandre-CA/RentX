import { FlatList } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { CarClass } from '../../class/CarClass'
import { FlatListProps } from "react-native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background} ;
`
export const Header = styled.View`
    height: 115px;
    background-color: ${({ theme }) => theme.colors.black};
    flex-direction: row;
    justify-content:space-around ;
    align-items: center;
    padding-top: 10px;
`

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.Inter_400};

`

export const Logo = styled.View`
`
export const CarContainer = styled(FlatList as new (props: FlatListProps<CarClass>) => FlatList<CarClass>)`
    padding: 16px;
`

