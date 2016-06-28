import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Groups = new Mongo.Collection('groups');

if (Meteor.isServer) {
  Meteor.publish('group', function groupPublication(groupId) {
    return Groups.find(groupId);
  });
}

Meteor.methods({
  // 'group.create'() {
  //   Groups.insert();
  // }
});
