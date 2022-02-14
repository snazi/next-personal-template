import PropTypes from 'prop-types';
import Link from 'next/link'
import NavButtonContainer from '../containers/NavButtonContainer.js';
const DesktopNavbar = (props) => {
  const { children, color, secondcolor } = props;

  return (
    <div data-test="DesktopNavbar" className={`bg-gradient-to-b from-${color} to-${secondcolor} text-white-light flex flex-col w-80 h-screen`}>
      <div className="flex justify-center h-16 mt-10">
        <button>
          <Link href="/">
          <img className="w-8 h-8.5" src="images/logo.png" alt="Img" />
          </Link>
        </button>
      </div>
      <div className="flex justify-center mt-10">
        <div className="flex flex-col h-1/5 w-4/6 font-monument">
          <button><NavButtonContainer imagesrc="images/navicons/icon_home.png" Title="HOME" path="/"></NavButtonContainer></button>
          <button><NavButtonContainer imagesrc="images/navicons/icon_portfolio.png" Title="SQUAD" path="/Portfolio"></NavButtonContainer></button>
          {/* <button><NavButtonContainer imagesrc="images/navicons/icon_packs.png" Title="PACKS" path="/Packs"></NavButtonContainer></button> */}
          {/* <button><NavButtonContainer imagesrc="images/navicons/icon_marketplace.png" Title="MARKETPLACE" path="/Marketplace"></NavButtonContainer></button> */}
          <button><NavButtonContainer imagesrc="images/navicons/icon_play.png" Title="PLAY" path="/Play"></NavButtonContainer></button>
        </div>
      </div>
    </div>
  );
};

DesktopNavbar.propTypes = {
  color: PropTypes.string,
  secondcolor: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

DesktopNavbar.defaultProps = {
  color: 'indigo-light',
  secondcolor: 'indigo-light',
  // children: <div>Fantasy investr</div>
  children: <div />,
};

export default DesktopNavbar;
