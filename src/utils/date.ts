import dayjs from 'dayjs';

const format = (date: string) => dayjs(date).format('MMMM D, YYYY - h:mm a');

export {format};
