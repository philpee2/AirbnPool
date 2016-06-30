import { Meteor } from 'meteor/meteor';
import { UserGroups } from './userGroups';
import { Groups } from '../groups/groups';

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

      // TODO: Hack to get the publication to update. Without this, the following bug exists:
      // User 1 joins the group
      // User 2 joins the group. User 1's client is not aware of this
      // User 2 sends a message
      // User 1's client cannot display User 2's picture
      Groups.update({ _id: groupId }, { $set: { updatedAt: new Date() } });

      Meteor.call('messages.userJoined', userName, groupId);
    }
  },

  'userGroups.setNumBeds'(userId, groupId, numBeds) {
    const userGroupId = UserGroups.findOne({ userId, groupId })._id;
    UserGroups.update(userGroupId, { $set: { numBeds } });
  },
});
