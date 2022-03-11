import { PlantsPage } from '../home/PlantsPage';
import { requireLogin } from '../common/requireLogin';

export default PlantsPage;

export const getServerSideProps = requireLogin;
