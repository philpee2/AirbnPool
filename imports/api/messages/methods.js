import { Meteor } from 'meteor/meteor';
import { Messages } from './messages';

Meteor.methods({
  'messages.create'(text, groupId) {
    Messages.insert({
      text,
      groupId,
      userId: Meteor.userId(),
    });
  }
});
