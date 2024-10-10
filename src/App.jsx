import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AppLayout from './AppLayout';
import Certificados from './components/CursosCertificados/CursosCertificados';
import Estatisticas from './components/Estatísticas/Estatísticas';
import Footer from './components/Footer/Footer';
import Formacao from './components/FormacaoeExperiencia/FormacaoeExperiencia';
import Formulario from './components/Informacao/Formulario';
import Servicos from './components/Informacao/Servicos';
import About from './components/Inicio/Inicio';
import Portfolio from './components/Portfolio/Portfolio';
import ProjectsPage from './components/Projetos/ProjectsPage';
import Projetos from './components/Projetos/Projetos';
import Skill from './components/Skill/Skill';
import NotFound from './Utis/404';

import './styles/App.css';  
import './styles/styles.css';

const App = () => {
    return (
      <Router>
            <AppLayout>
                <main className="app-content"> 
                    <Routes>
                        <Route path="/" element={<About />} />
                        <Route path="/servicos" element={<Servicos />} />
                        <Route path="/formulario" element={<Formulario />} />
                        <Route path="/certificados" element={<Certificados />} />
                        <Route path="/formacao" element={<Formacao />} />
                        <Route path="/estatisticas" element={<Estatisticas />} />
                        <Route path="/projetos" element={<Projetos />} />
                        <Route path="/skill" element={<Skill />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/todos-projetos" element={<ProjectsPage />} />
                        <Route path="*" element={<NotFound />} /> 
                    </Routes>
                </main>
            </AppLayout>
        </Router>
    );
};

export default App;
