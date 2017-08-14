import React from 'react';

import Stats from './stats';
import Stopwatch from './stopwatch';

const Header = ({todos}) => 
            <header>
                <Stats todos={todos} />
                <h1>Redux Todo</h1>
                <Stopwatch />
            </header>

export default Header;