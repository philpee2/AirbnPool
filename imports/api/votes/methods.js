import { Meteor } from 'meteor/meteor';
import { Votes } from './votes';
import { Listings } from '../listings/listings';

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
    }, () => {
      Listings.update({_id: listingId }, { $inc: { voteCount: 1 } });
    });
  }
});
