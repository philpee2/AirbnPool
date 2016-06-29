import { Meteor } from 'meteor/meteor';
import { Messages } from '../messages';

if (Meteor.isServer) {
  Meteor.publish('messagesForGroup', function messagesForGroup(groupId) {
    return Messages.find({ groupId });
  });
}
