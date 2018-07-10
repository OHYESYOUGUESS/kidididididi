import React, { Component } from 'react';

const { Provider, Consumer } = React.createContext();

class UserProvider extends Component {
  state = {
    users: [
    ]
  };

  componentDidMount = async () => {
    this.setState({ loading: true });
    try {
      const me = await serverAPI.get('/me');
      const res = await serverAPI.get('/activities');
      this.setState({
        me: me.data.id,
        activities: res.data,
        loading: false,
      });
    } catch (e) {
      this.setState({
        loading: false,
      });
    }
  };

  Create = obj => {
    const arr = this.state.users.slice()
    



  };

  Delete = async id => {
    this.setState({ loading: true });
    try {
      await serverAPI.delete(`/activities/${id}`);
      const get = await serverAPI.get('/activities');
      this.setState({
        activities: get.data,
        loading: false,
        target: '',
      });
    } catch (e) {
      const get = await serverAPI.get('/activities');
      this.setState({
        activities: get.data,
        loading: false,
        target: '',
      });
    }
  };

  Update = async (id, keyType, body) => {
    this.setState({ loading: true });
    try {
      await serverAPI.patch(`/activities/${id}`, {
        [keyType]: body,
      });
      const get = await serverAPI.get('/activities');
      this.setState({
        activities: get.data,
        loading: false,
        target: '',
      });
    } catch (e) {
      const get = await serverAPI.get('/activities');
      this.setState({
        activities: get.data,
        loading: false,
        target: '',
      });
    }
  };

  render() {
    const value = {
      activityState: this.state,
      activityFunc: {
        Create: this.Create,
        Delete: this.Delete,
        Update: this.Update,
      },
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { UserProvider, Consumer as UserConsumer };