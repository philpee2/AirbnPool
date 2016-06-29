import { Meteor } from 'meteor/meteor';
import { Groups } from '../groups';

if (Meteor.isServer) {
  Meteor.publish('group', function groupPublication(groupId) {
    return Groups.find(groupId);
  });
}
