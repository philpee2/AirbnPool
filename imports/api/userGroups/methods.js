import { Meteor } from 'meteor/meteor';
import { UserGroups } from './userGroups';

Meteor.methods({
  'userGroups.joinGroup'(userId, groupId) {
    if (!UserGroups.findOne({ userId, groupId })) {
      UserGroups.insert({
        numBeds: 1,
        createdAt: new Date(),
        groupId,
        userId,
      });
    }
  },

  'userGroups.setNumBeds'(userId, groupId, numBeds) {
    const userGroupId = UserGroups.findOne({ userId, groupId })._id;
    UserGroups.update(userGroupId, { $set: { numBeds } });
  },
});
