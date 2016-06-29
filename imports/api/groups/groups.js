import { Mongo } from 'meteor/mongo';
import { Messages } from '../messages/messages';
import { UserGroups } from '../userGroups/userGroups';

export const Groups = new Mongo.Collection('groups');

Groups.helpers({
  userGroups() {
    return UserGroups.find({ groupId: this._id });
  },

  messages() {
    return Messages.find({ groupId: this._id });
  },

  users() {
    const userIds = this.userGroups().map(item => item.userId);
    return Meteor.users.find({ _id: { $in: userIds } });
  },
});
