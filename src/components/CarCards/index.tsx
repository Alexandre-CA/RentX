import React from "react";

import { ModalButton, Container, CarInfo, CardOf, CarType, Title, CarBrand, Price, PriceInfo, Amount, Fuel, CarImg, CarImage } from "./styles";
import { useState } from "react";
import { CarClass } from '../../class/CarClass'

import { SvgProps } from "react-native-svg";
import SwitchSVG from '../../Global/switchSvg'

interface carCardsPros {
    carData: CarClass
}
export function CarCards( { carData } : carCardsPros) {
    console.log(carData)
    const Svg = SwitchSVG(carData.fuel_type);
    // const thing = [6, 8, 3, 9, 10];
    // function compare(a: any, b: any) {
    //     if (a > b) {
    //         console.log(a, b, thing);
    //         return 1
    //     } else if (a < b) {
    //         console.log(a, b, thing)
    //         return -1
    //     }
    //     return 0
    // }
    // thing.sort(compare)
    // console.log(thing)

    return (
        <Container>
            <CardOf>
                <CarInfo>
                    <CarType>
                        <Title>{carData.brand}</Title>
                        <CarBrand>{carData.name}</CarBrand>
                    </CarType>
                    <Price>
                        <PriceInfo>
                            <Title>AO DIA</Title>
                            <Amount>RS {carData.rent.price}</Amount>
                        </PriceInfo>
                        <Fuel>
                            <Svg
                                width={20}
                                height={20}
                            />
                        </Fuel>
                    </Price>
                </CarInfo>
                <CarImg>
                    <CarImage
                        source={{ uri: carData.thumbnail }}
                        resizeMode='contain'
                    />
                </CarImg>
            </CardOf>
        </Container>
    )
}