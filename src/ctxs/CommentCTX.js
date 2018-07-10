import React, { Component } from "react";
var moment = require("moment");

const { Provider, Consumer } = React.createContext();

class CommentProvider extends Component {
  state = {
    comments: [
      {
        id: "94463279403",
        score: "5",
        userId: "582400634055",
        storeId: "9702326644",
        body: "good",
        logDate: moment("2018.01.01", "YYYY.MM.DD")
      }
    ]
  };

  Create = (type, obj) => {
    const arr = this.state[type].slice();
    arr.push(obj);
    let brr = arr.sort((a, b) => {
      a.format("x") - b.format("x");
    });
    this.setState({ [type]: brr });
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
      CommentState: this.state,
      CommentFunc: {
        Create: this.Create,
        Delete: this.Delete,
        Update: this.Update
      }
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { CommentProvider, Consumer as CommentConsumer };
