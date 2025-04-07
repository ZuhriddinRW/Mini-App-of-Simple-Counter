import React, { useReducer, useState } from 'react';

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'INCREMENT_BY':
      return { count: state.count + action.value };
    case 'DECREMENT_BY':
      return { count: state.count - action.value };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  const [inputValue, setInputValue] = useState(5);

  const getCounterColor = () => {
    if (state.count < 0) return 'text-[#DC2626]';
    if (state.count > 0) return 'text-[#16A34A]';
    return 'text-[#2563EB]';
  };

  return (
    <div className="flex flex-col items-center justify-center h-[100vh] bg-[#F3F4F6]">
      <div className="bg-[#FFFFFF] p-[32px] rounded-[12px] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] max-w-[384px] w-[100%]">
        <h1 className="text-[30px] font-[700] text-center mb-[32px]">Counter</h1>

        <div className="flex justify-center items-center mb-[32px]">
          <span className={`text-[72px] font-[700] ${getCounterColor()}`}>
            {state.count}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-[12px] mb-[24px]">
          <button
            onClick={() => dispatch({ type: 'DECREMENT' })}
            className="bg-[#EF4444] hover:bg-[#DC2626] text-[#FFFFFF] font-[700] py-[12px] px-[16px] rounded-[8px] text-[20px]"
          >
            -1
          </button>

          <button
            onClick={() => dispatch({ type: 'INCREMENT' })}
            className="bg-[#22C55E] hover:bg-[#16A34A] text-[#FFFFFF] font-[700] py-[12px] px-[16px] rounded-[8px] text-[20px]"
          >
            +1
          </button>
        </div>

        <div className="flex items-center space-x-[12px] mb-[24px]">
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(Number(e.target.value))}
            className="w-[80px] px-[12px] py-[8px] border border-[#D1D5DB] rounded-[8px] text-center"
          />

          <button
            onClick={() => dispatch({ type: 'DECREMENT_BY', value: inputValue })}
            className="bg-[#F87171] hover:bg-[#EF4444] text-[#FFFFFF] font-[700] py-[8px] px-[16px] rounded-[8px]"
          >
            -
          </button>

          <button
            onClick={() => dispatch({ type: 'INCREMENT_BY', value: inputValue })}
            className="bg-[#4ADE80] hover:bg-[#22C55E] text-[#FFFFFF] font-[700] py-[8px] px-[16px] rounded-[8px]"
          >
            +
          </button>
        </div>

        <button
          onClick={() => dispatch({ type: 'RESET' })}
          className="w-[100%] bg-[#6B7280] hover:bg-[#4B5563] text-[#FFFFFF] font-[700] py-[8px] px-[16px] rounded-[8px]"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;