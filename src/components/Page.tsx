import Menu from './Menu';
import Home from './home/Home';

const Page: React.FC = () => {
    return (
        <>
            <header>
                <Menu />                
            </header>
            <main>
                <Home />
            </main>
        </>
    );
};

export default Page;
