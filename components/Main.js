import PropTypes from 'prop-types';

const Main = (props) => {
  const { children, color } = props;

  return (
    <div data-test="Main" className={`bg-${color} flex flex-col w-full h-full overflow-y-scroll order-last iphone5:mt-24 md:mt-0 z-0`}>
      {children}
    </div>
  );
};

Main.propTypes = {
  color: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

Main.defaultProps = {
  color: 'blue',
  // children: <div>Fantasy investr</div>
  children: <div />,
};

export default Main;
