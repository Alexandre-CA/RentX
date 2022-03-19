import Gasoline from '../../assets/svg/gasoline.svg'
import Hybrid  from '../../assets/svg/hybrid.svg'
import Electric  from '../../assets/svg/energy.svg'
import React from 'react';
import { SvgProps } from 'react-native-svg';

export default function (type:string): any {
    switch(type) {
        case 'electric_motor':
            return Electric;
        case 'gasoline_motor':
            return Gasoline;
        case 'hybrid_motor':
            return Hybrid;
        default:
            return Gasoline;
        
    }
}