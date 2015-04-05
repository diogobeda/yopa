import Reflux from 'reflux';
import firebase from '../utils/firebase';

// console.log(document);

const DEFAULT_OPTIONS = {
  asyncResult: true
};

let FriendActions = Reflux.createActions({
  add: DEFAULT_OPTIONS,
  remove: DEFAULT_OPTIONS,
  getAll: DEFAULT_OPTIONS
});

FriendActions.getAll.listen(function () {
  setTimeout(() => {
    this.completed([{ name: 'Diogo' }]);
  }, 1000);
});

export default FriendActions;
