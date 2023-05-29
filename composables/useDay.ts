

export const useDay = (number: number) => {
    // Define an array of weekday names
    const weekdayNames = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
  ];
  
  const weekdayName = weekdayNames[number];
  
  return weekdayName
}