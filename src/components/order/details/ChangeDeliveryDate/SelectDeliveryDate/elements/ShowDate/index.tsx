import { getWeekDayString } from "@utils/date-helper";
import React from "react";
import styles from "./styles.module.css";
interface Props {
  selected?: boolean;
  date?: string;
  handleDateChange: any;
  index: number;
}

const Months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dev",
];

export function ShowDate({
  selected = false,
  date,
  handleDateChange,
}: Props) {
  const deliveryDate = new Date(date);
  return (
    <div
      className={`${styles.container} ${selected && styles.selectedContainer} `}
      onClick={() => handleDateChange()}
    >
      <div className={styles.dateStringContainer}>
        {deliveryDate.getDate() + " "}
        {Months[deliveryDate.getMonth()]}
      </div>
      <div className={styles.limited}>{getWeekDayString(deliveryDate.getDay())}</div>
    </div>
  );
}
