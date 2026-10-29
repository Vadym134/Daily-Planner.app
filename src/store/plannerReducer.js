// Начальное состояние приложения
export const initialState = {
  currentDate: new Date().toISOString().split('T')[0], // текущая дата в формате YYYY-MM-DD
  tasks: [],       // список задач на выбранный день
  entry: null,     // запись дня (настроение, продуктивность, заметка)
  status: 'idle',  // статус запросов: 'idle' | 'loading' | 'success' | 'error'
  error: null,     // текст ошибки, если что-то пошло не так
};

// Чистая функция-редьюсер
export function plannerReducer(state, action) {
  switch (action.type) {
    case 'SET_DATE':
      return {
        ...state,
        currentDate: action.payload, // обновляем дату на ту, что передали в action
      };

    case 'FETCH_START':
      return {
        ...state,
        status: 'loading', // включаем загрузку
        error: null,       // очищаем прошлые ошибки
      };

    case 'FETCH_SUCCESS':
      return {
        ...state,
        status: 'success', // запрос прошел успешно
      };

    case 'FETCH_ERROR':
      return {
        ...state,
        status: 'error',       // фиксируем ошибку
        error: action.payload, // записываем текст ошибки
      };

    default:
      return state; // если экшен неизвестен, возвращаем стейт без изменений
  }
}