import * as React from 'react'; 
import './Dashboard.css';
import Nav from '../components/Nav.tsx';

const Dashboard = () => {


    return(
        <div>
            <div className="nav">
                <Nav title='CAPA 파트너스' name='A 가공업체' disabled='로그아웃'/>
            </div>
        </div>
    )
}

export default Dashboard;