import './Communication.scss';
import Select from 'react-select'
import Header from '../header/Header';
import { Link } from 'react-router-dom';

const Communication = () => {

    const options = [
        { value: 'Email', label: 'Email' },
        { value: 'Telegram', label: 'Telegram' },
        { value: 'WhatsUp', label: 'WhatsUp' },
        { value: 'Viber', label: 'Viber' }
    ]

    const customStyles = {
        container: () => ({
            border: '1px solid #978F7F',
            borderRadius: 'none',
            background: '#151512',
            color: '#978F7F',
            fontWeight: 400,
            fontSize: '20px',  
            position: 'relative',
            paddingTop: '3px',
            width: '88%'
        }),
        control: () => ({
            background: '#151512',
            display: 'flex',
            color: '#978F7F'
        }),
        indicatorSeparator: () => ({
            height: '112%',
            marginTop: '-2px',
            width: '1px',
            background: '#978F7F',
            color: '#978F7F'
        }),
        menu: () => ({
            position: 'absolute',
            top: '36px',
            left: '-1px',
            width: 'calc(99.6% + 4px)',
            color: '#978F7F'
        }),
        menuList: () => ({
            background: '#151512',
            border: '1px solid #978F7F',
            borderTop: '0px',
            textAlign: 'center',
            color: '#978F7F'
        }),
        option: () => ({
            cursor: 'pointer',
            padding: '10px',
            borderTop: '1px solid #978F7F',
            color: '#978F7F',
            '&:hover': {
                background: '#FFF3DD',
                color: '#3C3C3C'
            },
            transition: 'all 300ms'
        })
    }

    const inputFocus = (target) => {
        const name = target.name;
        const label = document.querySelector(`[for="${name}"]`).firstChild;
        const sep = target.parentNode.querySelector('.communicate__sep');
        label.classList.add('communicate__label-info_show');
        target.placeholder = '';
        sep.classList.add('communicate__sep_show')
    }

    const inputBlur = (target) => {
        const labels = document.querySelectorAll('.communicate__label');
        const seps = document.querySelectorAll('.communicate__sep');
        target.placeholder = target.dataset.ph;
        labels.forEach(item => {
            item.firstChild.classList.remove('communicate__label-info_show');
        })
        seps.forEach(item => {
            item.classList.remove('communicate__sep_show');
        })
    }

    function auto_height(elem) {  
        elem.style.height = "1px";
        elem.style.height = (elem.scrollHeight)+"px";
        elem.parentNode.style.height = (elem.scrollHeight)+"px";
    }

    return (
        <>
        <Header/>
        <section className="communicate">
            <form action="//formspree.io/egorkaegorih@gmail.com" className="communicate__form" method="POST">
                <div className="communicate__left">
                    <label name="name" htmlFor="name" className="communicate__label">
                        <div className="communicate__label-info">Имя</div>
                        <div className="communicate__sep"></div>
                        <input 
                        name="name" 
                        onFocus={(e) => inputFocus(e.target)} 
                        onBlur={(e) => inputBlur(e.target)} 
                        type="text" 
                        placeholder='Имя' 
                        className="communicate__input" 
                        data-ph="Имя"/>
                    </label>
                    <label name="email" htmlFor="email" className="communicate__label">
                        
                        <div className="communicate__label-info">Электронная почта</div>
                        <div className="communicate__sep"></div>
                        <input 
                        name="email" 
                        onFocus={(e) => inputFocus(e.target)} 
                        onBlur={(e) => inputBlur(e.target)} 
                        type="text" 
                        placeholder='Электронная почта' 
                        className="communicate__input" 
                        data-ph="Электронная почта"/>
                    </label>
                    <label name="phone" htmlFor="phone" className="communicate__label">
                        
                        <div className="communicate__label-info">Номер телефона</div>
                        <div className="communicate__sep"></div>
                        <input 
                        name="phone" 
                        onFocus={(e) => inputFocus(e.target)} 
                        onBlur={(e) => inputBlur(e.target)} 
                        type="text" 
                        placeholder='Номер телефона' 
                        className="communicate__input" 
                        data-ph="Номер телефона"/>
                    </label>
                    <label name="about" htmlFor="about" className="communicate__label">
                        
                        <div className="communicate__label-info">Расскажите немного о проекте</div>
                        <div className="communicate__sep"></div>
                        <textarea
                        maxLength={500}
                        onInput={(e) => auto_height(e.target)}
                        name="about" 
                        onFocus={(e) => inputFocus(e.target)} 
                        onBlur={(e) => inputBlur(e.target)} 
                        type="text" 
                        placeholder='Расскажите немного о проекте' 
                        className="communicate__input" 
                        data-ph="Расскажите немного о проекте"></textarea>
                    </label>
                </div>
                <div className="communicate__right">
                    <div className="communicate__descr">Чтобы обсудить проект, напишите нам на почту или оставьте заявку.<br></br>Достаточно заполнить форму и мы с вами свяжемся.</div>
                    <Select isSearchable={false} placeholder='Предпочтительный способ связи' options={options}
                    styles={customStyles}/>
                    <Link to={'/'} className="communicate__button">Отправить</Link>
                </div>
            </form>
        </section>
        </>
    )
}

export default Communication;