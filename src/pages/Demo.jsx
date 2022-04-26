import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { Steps } from 'antd';

import { breakfasts } from '../data'


const Demo = () => {

    

    return (
        <div>
          <h2>hello</h2>
        <img src={breakfasts[0][0].image2} alt="" />
        </div>
    );
};

export default Demo;