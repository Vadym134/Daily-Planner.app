import { usePlannerContext } from '../store/usePlannerContext';
import { formatDateForDisplay, getPrevDay, getNextDay } from '../utils/dateHelpers';

export default function DateNavigator() {
  const { state, dispatch } = usePlannerContext();
  const { currentDate } = state;

  const handlePrev = () => {
    const prevDate = getPrevDay(currentDate);
    dispatch({ type: 'SET_DATE', payload: prevDate });
  };

  const handleNext = () => {
    const nextDate = getNextDay(currentDate);
    dispatch({ type: 'SET_DATE', payload: nextDate });
  };

  return (
    <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 mb-6">
      <button
        onClick={handlePrev}
        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-md transition"
      >
        ← Вчера
      </button>
      
      <span className="text-xl font-bold text-gray-800">
        {formatDateForDisplay(currentDate)}
      </span>

      <button
        onClick={handleNext}
        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-md transition"
      >
        Завтра →
      </button>
    </div>
  );
}