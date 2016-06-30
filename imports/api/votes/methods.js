import { Meteor } from 'meteor/meteor';
import { Votes } from './votes';
import { Listings } from '../listings/listings';

Meteor.methods({
  'votes.create'(listingId, groupId) {
    const userId = Meteor.userId();
    if (!userId) {
      throw new Meteor.Error('not-authorized');
    }

    Meteor.call('userGroups.joinGroup', userId, groupId);

    Votes.insert({
      listingId,
      groupId,
      userId,
      createdAt: new Date(),
    }, () => {
      Listings.update({_id: listingId }, { $inc: { voteCount: 1 } });
    });
  }
});
