import React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

interface SliderProps {
  min: number;
  max: number;
  step: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
}

export const Slider: React.FC<SliderProps> = ({
  min,
  max,
  step,
  value,
  onChange
}) => {
  return (
    <div className="relative">
      <SliderPrimitive.Root
        className="relative flex items-center select-none touch-none w-full h-5"
        value={value}
        onValueChange={onChange}
        min={min}
        max={max}
        step={step}
      >
        <SliderPrimitive.Track className="bg-gray-200 relative grow rounded-full h-2">
          <SliderPrimitive.Range className="absolute bg-teal-500 rounded-full h-full" />
        </SliderPrimitive.Track>
        {value.map((_, index) => (
          <SliderPrimitive.Thumb
            key={index}
            className="block w-5 h-5 bg-white border-2 border-teal-500 rounded-full hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          />
        ))}
      </SliderPrimitive.Root>
      <div className="flex justify-between mt-2">
        <span className="text-sm text-gray-600">${value[0]}</span>
        <span className="text-sm text-gray-600">${value[1]}</span>
      </div>
    </div>
  );
};