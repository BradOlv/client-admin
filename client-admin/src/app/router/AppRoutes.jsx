
import {Route, Routes} from 'react-router-dom';
import { AuthPage } from '../../features/auth/pages/AuthPage.jsx';
import { DashboardPage } from '../layouts/DashboardPage.jsx';

export const AppRoutes = ()=> {
    return (
        <Routes>
            {/* PUBLICAS */}
            <Route path="/" element={<AuthPage />} />       

            {/* PROTEGIDAS POR ROL */}
             <Route path="/dashboard/*" element={<DashboardPage />} />
            
        </Routes>
    );
}