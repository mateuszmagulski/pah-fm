import store from '../../store';
import { GET } from '../../store/modules/http/actions';

export function getMyself() {
  return store.dispatch(`http/${GET}`, { url: 'users/me' });
}
