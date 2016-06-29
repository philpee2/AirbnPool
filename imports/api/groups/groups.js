import { Mongo } from 'meteor/mongo';
import { Messages } from '../messages/messages';
import { UserGroups } from '../userGroups/userGroups';
import { ListingGroups } from '../listingGroups/listingGroups';
import { Listings } from '../listings/listings';
import { Votes } from '../votes/votes';

export const Groups = new Mongo.Collection('groups');

Groups.helpers({
  userGroups() {
    return UserGroups.find({ groupId: this._id });
  },

  listingGroups() {
    return ListingGroups.find({ groupId: this._id });
  },

  messages() {
    return Messages.find({ groupId: this._id });
  },

  users() {
    const userIds = this.userGroups().map(item => item.userId);
    return Meteor.users.find({ _id: { $in: userIds } });
  },

  listings() {
    const listingIds = this.listingGroups().map(item => item.listingId);
    return Listings.find({ _id: { $in: listingIds } });
  },

  allVotes() {
    return Votes.find({ groupId: this._id });
  },

  votesForUser(userId) {
    return Votes.find({ groupId: this._id, userId });
  },
});
