import Chat from './components/Chat/Chat';
import Detail from './components/Detail/Detail';
import List from './components/List/List';

export default function Home() {
    return (
        <div className="flex h-full w-full dark:text-white">
            <List />
            <Chat />
            <Detail />
        </div>
    );
}
