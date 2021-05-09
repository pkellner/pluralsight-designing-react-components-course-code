import Menu from '../src/components/Menu/Menu';
import Header from '../src/components/Header/Header';
import SpeakerSearchBar from '../src/components/SpeakerSearchBar/SpeakerSearchBar';
import Speakers from '../src/components/Speakers/Speakers';
import Footer from '../src/components/Footer/Footer';

export default function Page() {
  return (
    <div>
      <Header />
      <Menu />
      <SpeakerSearchBar />
      <Speakers />
      <Footer />
    </div>
  );
}

// return (
//   <div>
//     <img src='images/header.png' />
//     <img src='images/menu.gif' />
//     <img src='images/searchbar.gif' />
//     <img src='images/speakers.png' />
//     <img src='images/footer.png' />
//   </div>
// );
