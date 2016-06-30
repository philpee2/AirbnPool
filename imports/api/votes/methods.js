import { Meteor } from 'meteor/meteor';
import { Votes } from './votes';

Meteor.methods({
  'votes.create'(listingId, groupId) {
    const userId = Meteor.userId();
    if (!userId) {
      throw new Meteor.Error('not-authorized');
    }

    Votes.insert({
      listingId,
      groupId,
      userId,
      createdAt: new Date(),
    });
  }
});
