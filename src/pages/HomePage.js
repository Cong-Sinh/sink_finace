import React from 'react';
import Layout from '../layouts/Layout';
import HomeBanner from '../home/HomeBanner';
import Intro from '../home/Intro';
import AdvertiseApp from '../pages/AdvertiseApp';

const HomePage = () => {
  return (
    <Layout>
      <div className="mx-24 max-[740px]:mx-0 max-w-screen-desktop font-fontRoboto">
        <HomeBanner />
        <Intro />
        {/* <AdvertiseApp /> */}
      </div>
    </Layout>
  );
};

export default HomePage;
