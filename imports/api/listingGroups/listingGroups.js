import { Mongo } from 'meteor/mongo';
import { Groups } from '../groups/groups';
import { Listings } from '../listings/listings';

export const ListingGroups = new Mongo.Collection('listingGroups');

ListingGroups.helpers({
  group() {
    return Groups.findOne(this.groupId);
  },

  listing() {
    return Listings.findOne(this.listingId);
  },
});
