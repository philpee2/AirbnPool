import { Meteor } from 'meteor/meteor';
import { Groups } from '../groups';

if (Meteor.isServer) {
  Meteor.publishComposite('group', function groupWithUsersAndMessages(groupId) {
    return {
      find() {
        return Groups.find(groupId);
      },
      children: [{
        find(group) {
          return group.userGroups();
        }
      }, {
        find(group) {
          return group.users();
        },
      }, {
        find(group) {
          return group.messages();
        },
      }, {
        find(group) {
          return group.listingGroups();
        },
      }, {
        find(group) {
          return group.listings();
        },
      }, {
        find(group) {
          return group.allVotes();
        }
      }, {
        // TODO: This shouldn't need to be in the group publication
        find(group) {
          return Meteor.users.find('announcer');
        }
      }],
    };
  });
}
