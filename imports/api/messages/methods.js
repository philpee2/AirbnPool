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
  },

  'messages.announce'(text, groupId) {
    Messages.insert({
      text,
      groupId,
      userId: 'announcer',
      createdAt: new Date(),
    });
  },

  'messages.userJoined'(name, groupId) {
    const text = `${name} has joined the group!`;
    Meteor.call('messages.announce', text, groupId);
  },

  'messages.userVoted'(name, listingName, groupId) {
    const text = `${name} voted for ${listingName}!`;
    Meteor.call('messages.announce', text, groupId);
  },
});
