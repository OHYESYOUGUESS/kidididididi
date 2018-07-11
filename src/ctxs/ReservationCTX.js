import React, { Component } from "react";

const { Provider, Consumer } = React.createContext();

class ReservationProvider extends Component {
  state = {
    reservations: [
      {
        id: "525965147821",
        userName: "joe",
        storeName: "PROTO",
        beginDate: "2018.01.01 10:00",
        dueDate: "2018.01.01 13:00",
        price: 23000
      }
    ]
  };

  Create = (type, obj) => {
    const arr = this.state[type].slice();
    arr.push(obj);
    this.setState({ [type]: arr });
  };
  // ctx data에 해당하는 문자열이 type
  // obj는 입력할 데이터. 그러니까 정해진 data form에 맞추어서 구성을 하고 넣어야 한다.
  // obj에 id는 math.random() *1000000000000으로 정해주면... 되지 않을까?

  Delete = (type, id) => {
    const arr = this.state[type].filter(ele => ele.id !== parseInt(id));
    this.setState({ [type]: arr });
  };
  // ctx data에 해당하는 문자열이 type
  // obj는 입력할 데이터. 그러니까 정해진 data form에 맞추어서 구성을 하고 넣어야 한다.

  Update = (type, id, keyType, body) => {
    const arr = this.state[type].slice();
    const brr = this.state[type].slice().filter(ele => ele.id !== id);
    const ele = arr.filter(ele => ele.id === id)[0];
    const element = { ...ele, [keyType]: body };
    brr.push(element);
    this.setState({
      [type]: brr
    });
  };
  // ctx data에 해당하는 문자열이 type
  // id는 바꿀 데이터 id
  // keyType은 그 데이터에 해당하는 세부 키값( 문자열)
  // body는 그 keyType에 해당되는 데이터를 어떠한 값으로 바꿀 것인가

  render() {
    const value = {
      ReservationState: this.state,
      ReservationFunc: {
        Create: this.Create,
        Delete: this.Delete,
        Update: this.Update
      }
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { ReservationProvider, Consumer as ReservationConsumer };
