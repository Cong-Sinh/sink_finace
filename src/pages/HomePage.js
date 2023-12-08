import React from 'react';
import Layout from '../layouts/Layout';
import HomeBanner from '../home/HomeBanner';
import Intro from '../home/Intro';

const HomePage = () => {
  return (
    <div className="mx-24 container1 font-fontRoboto">
      <Layout>
        <HomeBanner />
        <Intro />
      </Layout>
    </div>
  );
};

export default HomePage;
