import Firebase from 'firebase/lib/firebase-node';
import secrets from './secrets';

export default new Firebase(secrets.firebase.url);
