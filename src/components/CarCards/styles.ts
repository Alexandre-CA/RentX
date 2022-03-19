import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
    background-color: ${({theme})=>theme.colors.shape};
    margin-bottom:16px ;
`
export const ModalButton = styled(TouchableOpacity)`
    background-color: ${({theme})=>theme.colors.shape};
    margin-bottom:16px ;
`
export const CardOf = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 24px;
`
export const CarInfo = styled.View`

`

export const CarType = styled.View`
    padding-bottom: 16px;   

`

export const Title = styled.Text`
    font-size: ${RFValue(11)}px;
    font-family: ${({theme})=>theme.fonts.Archivo_500};
    color:${({theme})=>theme.colors.text};
    text-transform: uppercase;
`

export const CarBrand = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({theme})=>theme.fonts.Inter_500};
`

export const Price = styled.View`
    flex-direction: row;
    align-items: baseline;
`
export const PriceInfo = styled.View`
`

export const Amount= styled.Text`
 font-size: ${RFValue(16)}px;
 font-family: ${({theme})=>theme.fonts.Archivo_500};
 color:${({theme})=>theme.colors.main};
`

export const Fuel = styled.View`
    padding-left: 28px;
`
export const CarImg = styled.View`
    width: 160px;
    height: 100px;
`
export const CarImage = styled(Image)`
    width: 160px;
    height: 100px;
`
