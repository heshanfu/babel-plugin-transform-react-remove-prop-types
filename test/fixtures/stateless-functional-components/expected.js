"use strict";

var Foo1 = function Foo1() {
  return React.createElement("div", null);
};

var Foo2 = function Foo2() {
  return React.createElement("div", null);
};

var Foo3 = function Foo3() {
  switch (true) {
    case true:
      if (true) {
        return React.createElement("div", null);
      } else {
        return React.createElement("span", null);
      }
      break;
  }
};

function Foo4() {
  return React.createElement("div", null);
}

function Foo5() {
  var bar5 = function bar5() {
    return React.createElement("div", null);
  };

  return bar5();
}

function Foo6() {
  var result = bar6();

  return result;

  function bar6() {
    return React.createElement("div", null);
  }
}

function Foo7() {
  var shallow = {
    shallowMember: function shallowMember() {
      return React.createElement("div", null);
    }
  };
  return shallow.shallowMember();
}

function Foo8() {
  var obj = {
    deep: {
      member: function member() {
        return React.createElement("div", null);
      }
    }
  };
  return obj.deep.member();
}
