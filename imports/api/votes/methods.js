import { Meteor } from 'meteor/meteor';
import { Votes } from './votes';

Meteor.methods({
  'votes.create'(listingId, groupId) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Votes.insert({
      listingId,
      groupId,
      userId: Meteor.userId(),
      createdAt: new Date(),
    });
  }
});
