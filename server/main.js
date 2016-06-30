import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Listings } from '../imports/api/listings/listings';
import { ListingGroups } from '../imports/api/listingGroups/listingGroups';
import { Groups } from '../imports/api/groups/groups';
import { Messages } from '../imports/api/messages/messages';
import '../imports/startup/server';

Meteor.startup(() => {
  // setup Groups
  //
  Listings.remove({});
  Groups.remove({});
  ListingGroups.remove({});
  Messages.remove({});

  Listings.insert({
    _id: '1',
    hostImage: 'https://a0.muscache.com/im/users/2948538/profile_pic/1342408706/original.jpg?aki_policy=profile_x_medium',
    location: 'Portland',
    preview: 'https://a1.muscache.com/im/pictures/786471e1-0618-48f3-b917-c3f2fb0631d1.jpg?aki_policy=x_medium',
    price: '$55',
    reviews: '11',
    title: 'Spacious & Sunny Loft in the Pearl',
    type: 'Shared room',
  });
  Listings.insert({
    _id: '2',
    hostImage: 'https://a2.muscache.com/im/pictures/649c9f4c-c1b5-49ac-833f-354e84abbc3a.jpg?aki_policy=profile_x_medium',
    location: 'Shanghai',
    preview: 'https://a2.muscache.com/im/pictures/0a35bd8f-bcc8-4a55-977a-2ed35550bd4d.jpg?aki_policy=xx_large',
    price: '$33',
    reviews: '6',
    title: 'Quiet Tatami room with garden view',
    type: 'Entire home/apt',
  });
  Groups.insert({ _id: '1' });
  ListingGroups.insert({ groupId: '1', listingId: '1' });
  ListingGroups.insert({ groupId: '1', listingId: '2' });
});
