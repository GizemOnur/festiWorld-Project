import React from 'react';
import Header from '../component/Header';
import BottomNavig from '../component/BottomNavig';
import Carousel from '../component/Carousel';
import SearchMenu from '../component/SearchMenu';
import Playlist from '../component/Playlist';
import NewsCards from '../component/NewsCards';
import Footer from '../component/Footer';
import ContainerAbout from '../component/ContainerAbout';
import '../component/Home.css';
import '../component/Home.css'
import Newsletter from '../component/Newsletter';
import SearchTest from '../component/SearchTest';

function Home() {
  return (
    <div className='home-background'>
   
   <Header />
      <Carousel />
      <ContainerAbout />
      <SearchMenu  />
      <SearchTest />
      <NewsCards />
      <Playlist />
      <Newsletter />
      <Footer />
      
<BottomNavig />

      
      </div>
  );
}
export default Home;
