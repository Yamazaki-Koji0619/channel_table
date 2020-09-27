import styles from '../styles/Layout.module.css';
import Header from '../components/Header';
import Main from '../components/Main';
import Link from 'next/link';

const Layout = (props) => (
  <div>
    <Header />
    <Main />
  </div>
);

export default Layout;