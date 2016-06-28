import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Messages = new Mongo.Collection('messages');

if (Meteor.isServer) {
  Meteor.publish('messagesForGroup', function messagesForGroup(groupId) {
    return Messages.find({ groupId });
  });
}

Meteor.methods({
  'messages.create'(text, groupId) {
    Messages.insert({
      text,
      groupId,
      userId: Meteor.userId(),
    });
  }
});
