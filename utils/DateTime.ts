import format from "date-fns/format";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

export function formatDateTime(timestamp: number): string {
  const date = new Date(timestamp);
  return format(date, "dd MMM yyyy, HH:mm");
}

export function getTimeAgo(timestamp: number): string {
  const currentDate = new Date();
  const noteDate = new Date(timestamp);
  return formatDistanceToNow(noteDate, { addSuffix: true });
}
