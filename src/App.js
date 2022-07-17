import Head from './Head';
import Stories from './Stories';
import Posts from './Posts';
import Sidebar from './Sidebar';
import BottomMobile from './BottomMobile';

export default function App() {

    return (
        <div>
            <Head />
            <div class="conteudo">
                <div class="feed">
                    <Stories />
                    <Posts />
                </div>
                <Sidebar />
            </div>
            <BottomMobile />
        </div>
    );
}