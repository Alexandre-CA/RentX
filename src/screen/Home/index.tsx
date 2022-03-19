import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Container, Header, Title, Logo, CarContainer, } from './styles';
import LogoSvg from '../../../assets/svg/logo.svg';

import { CarCards } from "../../components/CarCards";
import { SvgProps } from "react-native-svg";
import { useEffect } from "react";
import api from "../../http/axiosRequest";
import { CarClass } from "../../class/CarClass";
import { database } from "../../database";

export interface PreCarProps {
    item: CarClass
}

export function Home() {
    const [cars, setCars] = useState<CarClass[]>([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        async function getCars() {
            try {
                const response = await api.get<CarClass[]>('/cars').then();
                setCars(response.data);
                console.log(response.data[0])
            }
            catch (err) {
                console.log(err)
            }
            finally {

            }
        }
        async function testMelon() {
            const base = await database.('users');
            console.log(base);
        }
        getCars();
        testMelon();
    }, [])

    return (
        <Container>
            <StatusBar
                style="light"
                translucent />
            <Header>
                <Logo>
                    <LogoSvg
                        width={108}
                        height={12}
                    />
                </Logo>
                <Title>Total de 12 carros</Title>
            </Header>
            <CarContainer
                data={cars}
                keyExtractor={(car:CarClass) => car.id}
                renderItem={(carData) => {
                    return (
                        <CarCards
                            carData={carData}
                        />
                    )
                }
                }
            />

        </Container>
    )
}