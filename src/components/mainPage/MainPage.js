import './MainPage.scss';
import WorksTemplate from '../worksTemplate/WorksTemplate';
import Header from '../header/Header';
import Contact from '../contact/Contact';
import { useEffect, useState } from 'react';


const MainPage = () => {

    const baseUrl = 'https://sage-desert-napkin.glitch.me';
    
    const [data, setData] = useState([]);
    
    async function getServerData(url) {
        await fetch(url + '/photos')
                     .then(res => res.json())
                     .then(res => {
                         console.log(res);
                         setData(res);
                     });
    }

    useEffect(() => {
        getServerData(baseUrl)
    }, []);

    const showTemplates = () => {
        if (!data.length) {
            return
        }
        const templates = data.map((item, i) => {
            console.log(item)
            return item.works.map(photo => {
                return <WorksTemplate key={i} data={photo} type={photo[0]?.type ? photo[0]?.type : 1}/>
            })
        })

        return templates;
    }
    
    return (
    <>
    <Header/>
    <main>
        <div className="main-page">
            <div className="main-page__container">
                {data.length ? showTemplates().map(item => item) : null}
            </div>
        </div>
    </main>
    <footer className='footer'>
        <div className="footer__inner">
            <Contact/>
            <div className="footer__creds">
            smrq.design | 2022
            </div>
        </div>
    </footer>
    </>
    )
}

export default MainPage;
