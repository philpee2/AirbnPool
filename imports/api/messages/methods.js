import { Meteor } from 'meteor/meteor';
import { Messages } from './messages';

Meteor.methods({
  'messages.create'(text, groupId) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Messages.insert({
      text,
      groupId,
      userId: Meteor.userId(),
      createdAt: new Date(),
    });
  }
});
