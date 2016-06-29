import { Meteor } from 'meteor/meteor';
import { ListingGroups } from './listingGroups';

Meteor.methods({
  'listingGroups.addToGroup'(listingId, groupId) {
    ListingGroups.insert({
      createdAt: new Date(),
      groupId,
      listingId,
    });
  },
});
