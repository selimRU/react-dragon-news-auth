import logo from '../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className=' text-center space-y-3'>
            <img className=' mx-auto' src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            {moment().format('dddd, MMMM D, YYYY')}
        </div>
    );
};

export default Header;