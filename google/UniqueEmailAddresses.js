const solution = (emailList) => {
  const dict = {};
  for (let i = 0; i < emailList.length; i++) {
    let [local, domain] = emailList[i].split("@");

    if (local.includes("+")) {
      local = local.slice(0, local.indexOf("+"));
    }

    if (local.includes(".")) {
      local = local.split("").reduce((a, c) => {
        if (c === ".") return a;
        return a + c;
      }, "");
    }

    dict[`${local}@${domain}`] = 1;
  }

  return Object.keys(dict).length;
};

const result = solution(["test.email+alex@leetcode.com", "test.email.leet+alex@code.com"]);
result;
