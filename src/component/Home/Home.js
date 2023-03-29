import React from 'react';
import Banner from '../Banner/Banner';
import { Content } from '../Banner/Content';
import { Blog } from '../Blog/Blog';
import { Gallery } from '../BlogGallery/Gallery';
import HappyBlog from '../HappyBlog/HappyBlog';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Blog/>
            <HappyBlog/>
            <Gallery/>
            <Content/>
        </div>
    );
};

export default Home;