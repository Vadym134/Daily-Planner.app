import { format, addDays, subDays, parseISO } from 'date-fns';

/**
 * 1. Получить текущую дату в строковом формате YYYY-MM-DD (для инициализации стейта)
 */
export function getTodayString() {
  return format(new Date(), 'yyyy-MM-dd');
}

/**
 * 2. Сдвинуть дату ВПЕРЁД на 1 день
 * Принимает строку ('2026-06-06'), возвращает новую строку ('2026-06-07')
 */
export function getNextDay(dateString) {
  const date = parseISO(dateString);
  const shiftedDate = addDays(date, 1);
  return format(shiftedDate, 'yyyy-MM-dd');
}

/**
 * 3. Сдвинуть дату НАЗАД на 1 день
 * Принимает строку ('2026-06-06'), возвращает новую строку ('2026-06-05')
 */
export function getPrevDay(dateString) {
  const date = parseISO(dateString);
  const shiftedDate = subDays(date, 1);
  return format(shiftedDate, 'yyyy-MM-dd');
}

/**
 * 4. Красивое форматирование даты для вывода пользователю на экран
 * Например: из '2026-06-06' сделает '06.06.2026'
 */
export function formatDateForDisplay(dateString) {
  if (!dateString) return '';
  const date = parseISO(dateString);
  return format(date, 'dd.MM.yyyy');
}
