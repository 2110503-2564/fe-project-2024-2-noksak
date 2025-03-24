"use client";

import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import { useState } from "react";

const DateReserve = ({onDateChange}: {onDateChange:Function}) => {
  
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
      value={selectedDate}
      onChange={(value) => {
        setSelectedDate(value);
        onDateChange(value);
      }}
      />
    </LocalizationProvider>
  );
};

export default DateReserve;