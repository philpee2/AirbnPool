import { Mongo } from 'meteor/mongo';
import { Votes } from '../votes/votes';
import { sumBy } from 'lodash';

export const Listings = new Mongo.Collection('listings');

Listings.helpers({
  votesInGroup(groupId) {
    return Votes.find({ listingId: this._id, groupId });
  },

  votesValueInGroup(groupId) {
    return sumBy(this.votesInGroup(groupId).fetch(), vote => vote.value());
  },
});
