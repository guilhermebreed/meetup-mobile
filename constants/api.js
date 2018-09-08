import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api';

const fakeGroupId = '5b65f03cb28a521ab14f6b23';

class MeetupApi {
  constructor() {
    this.groupId = fakeGroupId;
    this.path = '/groups/${this.groupId}/meetups';
  }

  async fetchGroupMeetups() {
    const { data } = await axios.get(this.path);

    return data.meetups;
  }
}

export {
  MeetupApi,
};
