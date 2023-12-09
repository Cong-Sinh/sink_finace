import React from 'react';
import Layout from '../layouts/Layout';
import HomeBanner from '../home/HomeBanner';
import Intro from '../home/Intro';

const HomePage = () => {
  return (
    <Layout>
      <div className="mx-24 container1 font-fontRoboto">
        <HomeBanner />
        <Intro />
      </div>
    </Layout>
  );
};

export default HomePage;
