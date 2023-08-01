
import './App.css';
import ClickablePicture from './component/ClickablePicture';
import LikeButton from './component/LikeButton';
import womenWithGlasses from './assets/images/woman_with_glasses.png';
import womenWithoutGlasses from './assets/images/woman.png';
import Dice from './component/Dice';
import Carousel from './component/Carousel';
import NumbersTable from './component/NumbersTable';
import './component/NumbersTable.css'
import FaceBook from './component/Facebook';
import SignUpPage from './component/SignUpPage';
import RGBColorPicker from './component/RGBColorPicker';

function App() {
  const images = [
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg',
  ];

  const limit = 12;

  return (
    <div className="App">
   <LikeButton  />
   <LikeButton  />
   <ClickablePicture img={womenWithoutGlasses} imgClicked={womenWithGlasses}/>
   <Dice/>
   <Carousel images={images} />
   <NumbersTable limit={limit} />
   <FaceBook />
   <SignUpPage />
   <RGBColorPicker/>
    </div>
  );
}

export default App;
