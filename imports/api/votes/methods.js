import { Meteor } from 'meteor/meteor';
import { Votes } from './votes';

Meteor.methods({
  'votes.create'(listingId, groupId) {
    Votes.insert({
      listingId,
      groupId,
      userId: Meteor.userId(),
      createdAt: new Date(),
    });
  }
});
