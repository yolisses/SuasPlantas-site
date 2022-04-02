import { NewHomePage } from '../home/NewHomePage';
import { requireLogin } from '../common/requireLogin';

export default NewHomePage;

export const getServerSideProps = requireLogin;
