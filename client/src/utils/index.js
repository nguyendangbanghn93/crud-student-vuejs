export const iDate = (date, stringFormat) => {
  const t = new Date(date || new Date());
  // console.log(t,t.toISOString().slice(0, 19).replace('T', ' '));
  if (!t.getDate()) {
    return "";
  }
  const s = Number(t);
  const o = {
    D: t.getDay(), // index ngày trong tuần (number)
    H: t.getHours(), // giờ (number/H)
    J: t.getDate(), //ngày trong tháng (number)
    M: t.getMinutes(), //phút (number/M)
    N: t.getMonth() + 1, //tháng Việt Nam (number)
    O: t, //(Date)
    S: t.getSeconds(), // giây (number)
    d: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"][t.getDay()], //thứ Việt nam (String)
    f: t.getFullYear(), //năm (number)
    h: ("0" + t.getHours()).substr(-2), //giờ (String)
    j: ("0" + t.getDate()).substr(-2), // ngày (String)
    m: ("0" + t.getMinutes()).substr(-2), //phút (String)
    n: ("0" + (t.getMonth() + 1)).substr(-2), // tháng (String)
    s: ("0" + t.getSeconds()).substr(-2), //giây (String)
    t: Number(s), //mls (number)
    u: parseInt(s / 1000), //timestamp (number)
    y: String(t.getFullYear()).substr(-2), //2 số cuối của năm (String)
    toISO: t
      .toISOString()
      .slice(0, 19)
      .replace("T", " "),
  };
  if (typeof stringFormat === "string") {
    return stringFormat.replace(/{.}/g, (a) => o[a.replace(/[{}]/g, "")]);
  }
  return o;
};
