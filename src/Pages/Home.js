import React from 'react';
import useTitle from '../Hooks/useTitle';

import ThreeServices from './ThreeServices';

const Home = () => {

    useTitle('Law-Home')
    return (
        <div>
        
            <ThreeServices></ThreeServices>
        </div>
    );
};

export default Home;