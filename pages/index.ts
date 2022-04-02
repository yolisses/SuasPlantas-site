import { HomePage } from '../home/HomePage';
import { requireLogin } from '../common/requireLogin';

export default HomePage;

export const getServerSideProps = requireLogin;
