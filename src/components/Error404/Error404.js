import './Error404.css'
import img from './404.png'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Eror404 = () => {
    return (
        <div id='Error404'>
            <Header/>

            <div className='wrapper'>
                <p>sorry, this page does not exist</p>
                <img src={img} alt={'Error 404'}/>
            </div>

            <Footer/>
        </div>
    )
};

export default Eror404;