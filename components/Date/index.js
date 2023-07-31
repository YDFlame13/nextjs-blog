import { parseISO, format } from 'date-fns';

export default function MyDate({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'yyyy年MM月dd日')}</time>;
}