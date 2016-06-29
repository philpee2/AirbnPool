import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Listings } from '../imports/api/listings/listings';
import { ListingGroups } from '../imports/api/listingGroups/listingGroups';
import { Groups } from '../imports/api/groups/groups';
import '../imports/startup/server';

Meteor.startup(() => {
  // setup Groups
  //
  Listings.remove({});
  Groups.remove({});
  ListingGroups.remove({});

  Listings.insert({ _id: '1', location: '' });
  Listings.insert({ _id: '2', location: '' });
  Groups.insert({ _id: '1' });
  ListingGroups.insert({ groupId: '1', listingId: '1' });
  ListingGroups.insert({ groupId: '1', listingId: '2' });
});
