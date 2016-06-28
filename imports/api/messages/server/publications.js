import { Meteor } from 'meteor/meteor';
import { Messages } from '../messages';

if (Meteor.isServer) {
  Meteor.publish('messagesForGroup', function messagesForGroup(groupId) {
    console.log('sdfg908usdfg')
    return Messages.find({ groupId });
  });
}
