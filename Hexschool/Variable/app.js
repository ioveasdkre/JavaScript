//#region example1 [ #1 為什麼要宣告函式 ]
/**
 * 為什麼要宣告函式
 */
function example1() {
  function fn() {
    a = "不宣告變數 外面取得到值";
    var b = "宣告變數 外面取不到值";
  }

  fn();
  console.log(a);
  // console.log(b); // 宣告變數 外面取不到值

  function fnB() {
    a = "我是fnB";
  }
  fnB();
  console.log(a);
}
//#endregion

//#region example2 [ #2 全域、區域汙染 ]
/**
 * 全域、區域汙染
 */
a2 = 0;
var b2 = "我是數字b";
function example2() {
  console.log("未宣告變數可被刪除");
  delete window.a2; // 刪除屬性
  console.log(window);
  console.log("");

  console.log("宣告變數不會被刪除");
  delete window.b2; // 刪除屬性
  console.log(window);
  console.log(b);
}
//#endregion

//#region example3 [ #3 var 的作用域 ]
/**
 * var 的作用域
 */
var a3 = 0;
function example3() {
  function fuA() {
    var c = 0; // 此時的 var作用域為 61~63行
    console.log("var 的詞法作用域", a3); // 此時的 a3還是0 因作用域已確定
    console.log("var 的作用域在程式寫完的當下就確定了"); // 寫完程式的當下就決定查找的對象了
  }

  function fuB() {
    var a3 = "fuB";
    console.log("local", a3);
    fuA();
  }
  fuB();
  console.log("全域", a3);
}
//#endregion

//#region example4 [ #4 var 特性 ]
/**
 * var 特性
 */
function example4() {
  function fu() {
    var a4 = 0;
    var a4 = 1;
  }

  fu();

  {
    var b4 = 2; // 此時的 var非作用域
  }

  console.log(b4); // 讀取的到值

  for (var i = 0; i < 10; i++) {
    // console.log(i);
    setTimeout(() => {
      console.log(i); // 非同步 此時的 var i會為 10 而非 0...9
    }, 0);
  }

  console.log("我不再 for裡面", i);
}
//#endregion

//#region example5 [ #5 not define || undefined ]
/**
 * not define || undefined
 */
function example5() {
  var a;
  console.log("a先執行", a); // undefined

  console.log("a後執行", a2); // undefined
  var a2;

  {
    let a5 = 1; // 只在 {}內可被找到
  }
  // console.log(a5); // {}會影響到 變數的作用域

  for (let i = 0; i < 10; i++) {
    // console.log(i);
    setTimeout(() => {
      console.log(i); // 非同步 此時的 let i會為 0...9
    }, 0);
  }
}
//#endregion

//#region example6 [ #6 let 作用 ]
/**
 * let 作用
 */
function example6() {
  function fu(a) {
    console.log(a);
    var a = 2; // 如果改成 let前一行會發生錯誤
    console.log(a);
  }

  fu(1);
}
//#endregion

//#region example7 [ #7 let 和const 差異 ]
/**
 * let 和const 差異
 */
function example7() {
  let a = 0; // let 初始化可不給予值，可再給予值覆蓋
  a = 1;
  a = 2;
  console.log("let", a);

  const b = 0; // const 初始化給予值，不可再給予值覆蓋
  // b = 1;
  console.log("const", b);

  const c = {
    name: "第一次的值",
  }; // const 初始化給予值，不可再給予值覆蓋
  c.name = "const 變數.物件 可以更改物件值";
  console.log(c);

  const d = {
    name: "第一次的值",
  }; // const 初始化給予值，不可再給予值覆蓋
  d = {
    name: "不可使用物件覆蓋",
  };
  console.log(d);
}
//#endregion

example7();
