import styles from './Page.module.scss';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './home/Home';
import Skills from './skills/Skills';
import Projects from './projects/Projects';
import Contact from './contact/Contact';

interface route {
    path: string,
    label: string,
    element: JSX.Element,
}

const Page: React.FC = () => {
    const routes: Array<route> = [
        {
            path: '/',
            label: 'Home',
            element: <Home />,
        },
        {
            path: '/skills',
            label: 'My Skills',
            element: <Skills />,
        },
        {
            path: '/projects',
            label: 'Projects',
            element: <Projects />,
        },
        {
            path: '/contact',
            label: 'Contact',
            element: <Contact />,
        },
    ];

    const getNavLink = (path: string, label: string) =>
        <Link key={path} className={styles.list__link} to={path}>{label}</Link>;
    const getRoute = (path: string, element: JSX.Element) => <Route key={path} path={path} element={element} />;

    const renderNavLinks = () => routes.map(route => getNavLink(route.path, route.label));
    const renderRoutes = () => routes.map(route => getRoute(route.path, route.element));

    return (
        <Router>
            <header>
                <nav className={styles.nav}>
                    <ul className={styles.list}>
                        {renderNavLinks()}
                    </ul>
                </nav>
            </header>
            <main>
                <Routes>
                    {renderRoutes()}
                </Routes>
            </main>
        </Router>
    );
};

export default Page;
