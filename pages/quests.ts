import { requireLogin } from '../common/requireLogin';
import { QuestsPage } from '../quest/QuestsPage';

export default QuestsPage;

export const getServerSideProps = requireLogin;
