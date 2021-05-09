import Menu from '../src/components/Menu/Menu';
import Header from '../src/components/Header/Header';
import SpeakerSearchBar from '../src/components/SpeakerSearchBar/SpeakerSearchBar';
import Speakers from '../src/components/Speakers/Speakers';
import Footer from '../src/components/Footer/Footer';

import SpeakerContext from '../src/components/Speakers/SpeakerContext';

export default function Page() {
  const speakers = [
    {
      imageSrc: 'speaker-component-1124',
      name: 'Douglas Crockford',
    },
    {
      imageSrc: 'speaker-component-1530',
      name: 'Tamara Baker',
    },
    {
      imageSrc: 'speaker-component-10803',
      name: 'Eugene Chuvyrov',
    },
  ];
  return (
    <div>
      <Header />
      <Menu />
      <SpeakerContext.Provider value={speakers}>
        <SpeakerSearchBar />
        <Speakers />
      </SpeakerContext.Provider>
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
