export const dateFormating = (_date: string) => {

    const _time = new Date(_date.replace(' ', 'T'));

    const second = _time.getSeconds();
    const second_parse = (second < 10) ? '0' + second : second;
    const minute = _time.getMinutes();
    const minute_parse = (minute < 10) ? '0' + minute : minute;
    const day = _time.getDate();
    const day_parse = (day < 10) ? '0' + day : day;
    const month = (_time.getMonth() + 1);
    const month_parse = (month < 10) ? '0' + month : month;

    return _time.getHours() + ":" + minute_parse + ":" + second_parse + " " + day_parse + "/" + month_parse + "/" + _time.getFullYear();

}