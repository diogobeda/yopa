import Reflux from 'reflux';
import FriendActions from '../actions/FriendActions';

let FriendStore = Reflux.createStore({
  listenables: FriendActions,

  onAddCompleted (friend) {
    this.friends.unshift(friend);
    this.tringger(this.friends);
  },

  onAddFailed (err) {
    this.trigger(err);
  },

  onRemove () {
    this.trigger(this.friends);
  },

  onGetAllCompleted (friends) {
    this.friends = friends;
    this.trigger(friends);
  }
});

export default FriendStore;
