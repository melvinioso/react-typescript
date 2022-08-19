import ReactDOM from 'react-dom/client';

// import GuestList from './state/GuestList';
// import UserSearch from './state/UserSearch';
// import EventComponent from './events/EventComponent';
// import UserSearch from './classes/UserSearch';
import UserSearch from './refs/UserSearch';

// const users = [
//   { name: 'Matt', age: 41 },
//   { name: 'Jennifer', age: 43 },
//   { name: 'Dash', age: 5 },
// ];

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el!);

const App = () => {
  return (
    <div>
      <UserSearch />
    </div>
  );
};

root.render(<App />);
