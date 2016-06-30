import { Meteor } from 'meteor/meteor';
import { UserGroups } from './userGroups';

Meteor.methods({
  'userGroups.joinGroup'(userId, groupId, numBeds = 1) {
    if (!UserGroups.findOne({ userId, groupId })) {
      UserGroups.insert({
        createdAt: new Date(),
        numBeds,
        groupId,
        userId,
      });

      const userName = Meteor.users.findOne(userId).name();
      Meteor.call('messages.userJoined', userName, groupId);
    }
  },

  'userGroups.setNumBeds'(userId, groupId, numBeds) {
    const userGroupId = UserGroups.findOne({ userId, groupId })._id;
    UserGroups.update(userGroupId, { $set: { numBeds } });
  },
});
