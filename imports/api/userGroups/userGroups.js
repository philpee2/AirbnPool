import { Mongo } from 'meteor/mongo';
import { Groups } from '../groups/groups';

export const UserGroups = new Mongo.Collection('userGroups');

UserGroups.helpers({
  group() {
    return Groups.findOne(this.groupId);
  },

  user() {
    return Meteor.users.findOne(this.userId);
  },
});
