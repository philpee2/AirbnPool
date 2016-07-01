import { Mongo } from 'meteor/mongo';
import { Messages } from '../messages/messages';
import { UserGroups } from '../userGroups/userGroups';
import { ListingGroups } from '../listingGroups/listingGroups';
import { Listings } from '../listings/listings';
import { Votes } from '../votes/votes';
import { sum } from 'lodash';

export const Groups = new Mongo.Collection('groups');

Groups.helpers({
  userGroups() {
    return UserGroups.find({ groupId: this._id });
  },

  listingGroups() {
    // return ListingGroups.find({ groupId: this._id }, { sort: { voteCount: -1 } });
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

  winningListing() {
    const listings = this.listings();
    const listingVotes = listings.map(listing => listing.votesValueInGroup(this._id));
    const totalVotes = sum(listingVotes);
    if (totalVotes === 8) {
      const maxVotes = Math.max(...listingVotes);
      const indexOfMaxVotes = listingVotes.indexOf(maxVotes);
      return listings.fetch()[indexOfMaxVotes];
    } else {
      return null;
    }
  }
});

// Hardcoded for hackathon YOLO
Meteor.users.helpers({
  picture() {
    if (this._id === 'announcer') {
      return 'http://www.bladecreativebranding.com/blog/wp-content/uploads/2014/11/New-2014-Air-Bnb-Logo.png';
    }
    switch(this.emails[0].address) {
      // Images come from here https://github.com/philpee2/AirbnPool/issues/21
      case 'phil.nachum@airbnb.com':
        return 'https://cloud.githubusercontent.com/assets/2244653/16473858/408afb56-3e26-11e6-96fe-06f66311920b.png';
      case 'michael.lawlor@airbnb.com':
        return 'https://cloud.githubusercontent.com/assets/295574/16468692/035d1ada-3e02-11e6-99bb-683b5ce64935.jpg';
      case 'warren.shen@airbnb.com':
        return 'https://cloud.githubusercontent.com/assets/8787796/16472729/39547fc0-3e1b-11e6-96bd-7e0af75f4f15.png';
      case 'sherry.huang@airbnb.com':
        return 'https://a0.muscache.com/ac/users/43813704/profile_pic/1441847640/original.jpg?interpolation=lanczos-none&crop=w:w;*,*&crop=h:h;*,*&resize=225:*&output-format=jpg&output-quality=70';
      case 'poyan.pourshian@airbnb.com':
        return 'https://a2.muscache.com/ac/pictures/ff143fed-123a-4ee7-a18d-6ad471df04ad.jpg?interpolation=lanczos-none&size=large&output-format=jpg&output-quality=70';
      default:
        return "/images/avatar.png";
    }
  },

  name() {
    if (this._id === 'announcer') {
      return 'Bot';
    }
    switch(this.emails[0].address) {
      case 'phil.nachum@airbnb.com':
        return 'Phil';
      case 'michael.lawlor@airbnb.com':
        return 'Michael';
      case 'warren.shen@airbnb.com':
        return 'Warren';
      case 'sherry.huang@airbnb.com':
        return 'Sherry';
      case 'poyan.pourshian@airbnb.com':
        return 'Poyan';
      default:
        return 'Guest';
    }
  },
});
