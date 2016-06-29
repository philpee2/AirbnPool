import { Mongo } from 'meteor/mongo';

export const Messages = new Mongo.Collection('messages');

Messages.helpers({
  author() {
    return Meteor.users.findOne(this.userId);
  },
});
