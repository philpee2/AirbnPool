import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Listings } from '../imports/api/listings/listings';
import { ListingGroups } from '../imports/api/listingGroups/listingGroups';
import { Groups } from '../imports/api/groups/groups';
import { Messages } from '../imports/api/messages/messages';
import '../imports/startup/server';

Meteor.startup(() => {
  Listings.remove({});
  Groups.remove({});
  ListingGroups.remove({});

  Listings.insert({
    _id: '1',
    host: {
      image: 'https://a2.muscache.com/im/pictures/23f23dde-220b-40f0-a68a-5c4e564e72f5.jpg?aki_policy=profile_x_medium',
      url: 'https://www.airbnb.com/users/show/67863557',
    },
    location: 'Edinburgh',
    preview: 'https://a2.muscache.com/im/pictures/58426be6-9ff5-4b28-b3f6-53cc4764f47d.jpg?aki_policy=x_large',
    price: '$567',
    reviews: '3',
    title: 'Lovely sunny Penthouse Apartm. Central, Haymarket',
    type: 'Entire home/apt',
    url: 'https://www.airbnb.com/rooms/12899915',
  });
  Listings.insert({
    _id: '2',
    host: {
      image: 'https://a2.muscache.com/im/pictures/a19fb2e7-a993-4176-8ebc-3da242e674e0.jpg?aki_policy=profile_x_medium',
      url: 'https://www.airbnb.com/users/show/35776224',
    },
    location: 'Edinburgh',
    preview: 'https://a2.muscache.com/im/pictures/4b156ed5-62ad-4e32-b94d-c7d05897ff34.jpg?aki_policy=xx_large',
    price: '$966',
    reviews: '0',
    title: 'Beautiful City Center Apartment',
    type: 'Entire home/apt',
    url: 'https://www.airbnb.com/rooms/13655159',
  });
  Listings.insert({
    _id: '3',
    host: {
      image: 'https://a2.muscache.com/im/users/24757920/profile_pic/1419967487/original.jpg?aki_policy=profile_x_medium',
      url: 'https://www.airbnb.com/users/show/24757920',
    },
    location: 'Edinburgh',
    preview: 'https://a2.muscache.com/im/pictures/e2c48838-39ad-4b03-9b19-8a2beb9f56a7.jpg?aki_policy=x_large',
    price: '$621',
    reviews: '8',
    title: 'Stunning, Spacious and Central',
    type: 'Entire home/apt',
    url: 'https://www.airbnb.com/rooms/4806211',
  });
  Listings.insert({
    _id: '4',
    host: {
      image: 'https://a2.muscache.com/im/pictures/18070f4b-4f1e-43c9-a88e-6d3729e6257c.jpg?aki_policy=profile_x_medium',
      url: 'https://www.airbnb.com/users/show/18098098',
    },
    location: 'Edinburgh',
    preview: 'https://a2.muscache.com/im/pictures/21606d38-1c04-4bde-9e0d-97064af214f7.jpg?aki_policy=xx_large',
    price: '$1035',
    reviews: '7',
    title: 'Enormous and Stylish New Town flat.',
    type: 'Entire home/apt',
    url: 'https://www.airbnb.com/rooms/13447781',
  });
  Groups.insert({ _id: '1' });
  ListingGroups.insert({ groupId: '1', listingId: '1' });
  ListingGroups.insert({ groupId: '1', listingId: '2' });
  ListingGroups.insert({ groupId: '1', listingId: '3' });
  ListingGroups.insert({ groupId: '1', listingId: '4' });
});
