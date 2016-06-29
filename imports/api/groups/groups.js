import { Mongo } from 'meteor/mongo';
import { Messages } from '../messages/messages';

export const Groups = new Mongo.Collection('groups');

Groups.helpers({
  messages() {
    return Messages.find({ groupId: this._id });
  },

  users() {

  },
})
