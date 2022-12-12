import Header from './Header';
import Footer from './Footer';

function Layout({children}) {
    return (
        <div className='.d-flex justify-content-center bg-slate-50 w-100'>
            <Header />
            <div className="w-100 overflow-hidden">{children}</div>
            <Footer />
        </div>
    );
}

export default Layout;