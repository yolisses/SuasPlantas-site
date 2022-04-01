import { PlantsPage } from '../home/PlantsPage';
import { requireLogin } from '../common/requireLogin';
import { NewHomePage } from '../home/NewHomePage';

export default NewHomePage;

export const getServerSideProps = requireLogin;
