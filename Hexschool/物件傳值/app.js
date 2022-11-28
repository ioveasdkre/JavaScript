function example1() {
  var person = "小明";
  var person2 = person;
  console.log(person === person2); // true

  person2 = "Benson";
  console.log(person === person2); // false
}

function example2() {
  var person = {
    name: "小明",
  };
  var person2 = person;
  console.log(person === person2); // true

  person2.name = "Benson";
  console.log(person === person2); // false
}

function example3() {
  var member = ["爸", "媽"];
  var member2 = member;
  member2.push("小三");
  console.log(member); // ["爸", "媽","小三"]
}

function example4() {
  function fn(name) {
    return `${name}被抓到了`;
  }

  var fn2 = fn;
  fn2.magicName = "奇怪的東西";

  console.log(fn2);
  console.log(fn === fn2); //true
  console.dir(fn2); // 讀取屬性
}

function example5() {
  function 函式(name) {
    return `${name}被抓到了`;
  }

  console.log(函式("漂亮阿姨"));

  var 康叟 = console;
  康叟.log("var 康叟 = console");
  康叟.露葛 = console.log;
  康叟.露葛("康叟.露葛 = console.log;");
}

function example6() {
  const person = {
    name: "Benson",
  };

  person.name = "杰倫";
  // person = {}; // error
  console.log(person);
}

function example7() {
  const family = ["爸", "媽", "小三"];

  family.forEach((value, index) => {
    if (value === "小三") {
      family.splice(index, 1);
    }
  });

  console.log(family);
}

function example8() {
  function fn(item) {
    item.name = "Benson";
  }

  const person = {
    name: "小明",
  };

  fn(person);

  console.log(person); // Benson  fun傳入的 值被改變 原物件也會跟著改變
}

function example9() {
  function fn(item) {
    const newItem = {
      name: "Benson",
    };

    item = newItem; // 改變指向
    console.log(item); // Benson

    // item.name = newItem; // 不改變指向 直接改變 物件值

    // 不改變指向 直接把 值取代過去
    // Object.keys(item).forEach((key) => {
    //   console.log(ley);
    //   item[key] = newItem[key];
    // });
  }

  const person = {
    name: "小明",
  };

  fn(person);

  console.log(person); // 小明
}

// 解除 傳參考的方式

// 淺層複製
function example10() {
  const person = {
    name: "小明",
  };
  const person2 = { ...person }; // 解構
  person2.name = "Benson";
  console.log(person.name, person2.name);
  console.log(person.name === person2.name); // false 因為不是同個物件 而是複製新的物件
}

// 深層複製
function example11() {
  const person = {
    name: "小明", // 淺層
    // 淺層
    family: {
      // 深層
      name: "小明家",
      member: ["爸", "媽"],
    },
  };
  // const person2 = { ...person }; // 解構 淺層拷貝
  const person2 = JSON.parse(JSON.stringify(person)); // 深層拷貝
  person2.name = "Benson";
  person2.family.name = "Benson Home";
  console.log(person, person2);
}

// 擴展
function example12() {
  const person = {
    name: "小明",
    fn: function () {
      console.log(`我叫作 ${this.name}`);
    },
  };

  // 繼承 person所有的 fun並替換 name
  const person2 = {
    ...person, // 解構
    name: "Benson", // 利用同名替代的技巧
  };
}

function example13() {
  const family = [{ name: "爸" }, { name: "媽" }];
  family.forEach((obj) => {
    const newItem = {
      name: "杰倫",
    };

    obj = newItem; // obj不等於 指向 family物件
  });

  console.log(family);
}

example13();
