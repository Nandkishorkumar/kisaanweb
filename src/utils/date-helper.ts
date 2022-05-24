import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

export const formatDate = (date: string) => {
  dayjs.extend(relativeTime);
  dayjs.extend(utc);
  dayjs.extend(timezone);
  const newDate = dayjs.utc(date).tz(dayjs.tz.guess());
  return `${newDate.format('D MMM YYYY')}`
}

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

type DayType = 'short' | 'long'

export const getWeekDayString = (day: number, day_type: DayType = "long"): string => {
  if (day_type == 'long') {
    return weekDays[day];
  } else if (day_type == 'short') {
    return weekDays[day].slice(0, 3)
  } else {
    return weekDays[day];
  }
};