import { Meteor } from 'meteor/meteor';
import { Votes } from './votes';
import { Listings } from '../listings/listings';
<<<<<<< HEAD
=======
import { Groups } from '../groups/groups';
>>>>>>> d81011c79d6003135ecbf076e5abe28eec976006

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
<<<<<<< HEAD
=======

    const group = Groups.findOne(groupId);
    const winningListing = group.winningListing();
    if (winningListing) {
      Meteor.call('messages.winningListing', winningListing.title, groupId);
    }
>>>>>>> d81011c79d6003135ecbf076e5abe28eec976006
  }
});
