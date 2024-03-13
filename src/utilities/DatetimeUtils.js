import { MONTHS, DAYS } from './DateConstants';

const now = new Date();

export function getWeekDays() {
  const dayInAWeek = new Date().getDay();
  const days = DAYS.slice(dayInAWeek, DAYS.length).concat(
    DAYS.slice(0, dayInAWeek)
  );
  return days;
}

export function getDayMonthFromDate() {
  const month = MONTHS[now.getMonth()].slice(0, 3);
  const day = now.getUTCDate();

  return day + ' ' + month;
}

export function transformDateFormat() {
  const month = now.toLocaleString('en-US', { month: '2-digit' });
  const day = now.toLocaleString('en-US', { day: '2-digit' });
  const year = now.getFullYear();
  const time = now.toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
  });

  const newFormatDate = year.toString().concat('-', month, '-', day, ' ', time);
  return newFormatDate;
}

export function getUTCDatetime() {
  const utcTime = now.toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  });

  const isoDateString = now.toISOString();
  const utcDate = isoDateString.split('T')[0].concat(' ', utcTime);
  return utcDate;
}

export function getUTCTime() {
  const utcTime = now.toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
  });

  return utcTime;
}
