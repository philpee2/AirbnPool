import { Mongo } from 'meteor/mongo';
import { Groups } from '../groups/groups';
import { Listings } from '../listings/listings';
import { UserGroups } from '../userGroups/userGroups';

export const Votes = new Mongo.Collection('votes');

Votes.helpers({
  user() {
    return Meteor.users.findOne(this.userId);
  },

  group() {
    return Groups.findOne(this.groupId);
  },

  listing() {
    return Listings.findOne(this.listingId);
  },

  value() {
    return UserGroups.findOne({ userId: this.userId, groupId: this.groupId }).numBeds;
  },
});
