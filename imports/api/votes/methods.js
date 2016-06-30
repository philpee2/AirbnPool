import { Meteor } from 'meteor/meteor';
import { Votes } from './votes';
import { Listings } from '../listings/listings';

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
    const listingName = Listings.findOne(listingId).title;

    Meteor.call('messages.userVoted', Meteor.user().name(), listingName, groupId);
  }
});
