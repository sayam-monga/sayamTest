import React from 'react';
import LatestEdition from '../Components/LatestEdition';
import Footer from './components/footer/footer';
import Interviews from './components/interview(homepageComponent)/interview';
import StudentPanorama from './components/studentPanaroma/studentPanaorma';
import Team from './components/team(homepageComponent)/team';


function Home() {
  return (
    <div>
      <LatestEdition/>
      <StudentPanorama/>
      <Team></Team>
      <Interviews></Interviews>
      <Footer></Footer>
    </div>
  )
}

export default Home
