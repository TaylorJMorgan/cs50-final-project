import '../style/App.css';
import BannerLeft from '../components/BannerLeft';
import BannerRight from '../components/BannerRight';
import bannerImg1 from '../images/banner-img-1.png';
import bannerImg2 from '../images/banner-img-2.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Home() {
  return (
    <div>
      <BannerRight
        image={bannerImg1}
        title='Welcome to Sittr'
        description='The premiere location for your sedentary needs.'
        buttonText={['Start Shopping', <ArrowForwardIcon key={1} />]}
        link='products'
      />
      <BannerLeft
        image={bannerImg2}
        title='The Newest and Greatest'
        description='Check out our Choice Collection.'
        buttonText={['Start Shopping', <ArrowForwardIcon key={2} />]}
        link='products'
      />
    </div>
  );
}

export default Home;