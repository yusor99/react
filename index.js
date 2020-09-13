import Link from 'next/link'
import Header from './header.js'
import Footer from './footer.js'
import Card from './card.js'
const home = () => {
  return (
    <>
      <Header/>
      <div class="cover-home">
        <div class="img">
          <img src="images/img-card.png" />
        </div>
        <div class="overlay ">
          <div class="container">
            <h1>Simple Blog.</h1>
            <p>A blog created by FikraCamps</p>
          </div>
        </div>
      </div>
      <section>
        <div class="container cards">
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
        </div>
      </section>
     <Footer/>
    </>
  );
};
export default home;
