"use client"
import React, { useState } from 'react';
import Button from '../button';
import OptionSelector from '../product-details-form/option-selector';

// Reusable Slider Component
const RangeSlider = ({ label, min, max, step, range, sliderType, handleInputChange, stepCount, labels }) => (
    <div className="range-slider w-full mx-auto">
        <label className=" text-xl">{label}</label>
        <div className="slider-container">
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={range.min}
                onChange={(e) => handleInputChange(e, 'min', sliderType)}
                className={`slider appearance-none bg-gray-700 ${range.max == max && range.min == range.max ? 'z-[10]' : ''}`}
                id={`sliderMin${sliderType}`}
            />
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={range.max}
                onChange={(e) => handleInputChange(e, 'max', sliderType)}
                className="slider appearance-none"
                id={`sliderMax${sliderType}`}
            />
            <div className="track"></div>
            <div className="highlight-track" style={{ left: `${(range.min / (max - min)) * 100}%`, right: `${100 - (range.max / (max - min)) * 100}%` }}></div>
            <div className="steps">
                {Array.from({ length: stepCount }).map((_, index) => {
                    const position = (index / (stepCount - 1)) * 100;
                    const style = position < 50 ? { left: `${position}%` } : { right: `${100 - position}%` };
                    return <span key={index} className="step-marker" style={style}></span>;
                })}
            </div>
        </div>
        <div className="labels flex justify-between font-Futura PT Light">
            {labels.map((label, index) => <span key={index}>{label}</span>)}
        </div>
    </div>
);

// Main Component
const ProductDetailsComparisonForm = ({
    stoneSelections,
    certificate,
}) => {
    const [selectedValues, setSelectedValues] = useState({
        stoneSelection: stoneSelections[0] ?? '',
        certificate: certificate[0] ?? '',
    });
    const [ranges, setRanges] = useState({
        carat: { min: 0, max: 10 },
        colour: { min: 0, max: 6 },
        clarity: { min: 0, max: 7 },
        cut: { min: 0, max: 3 },
    });

    const handleInputChange = (e, type, sliderType) => {
        const value = parseInt(e.target.value, 10);
        const newRange = { ...ranges[sliderType] };

        if (type === 'min' && value <= newRange.max) {
            newRange.min = value;
        } else if (type === 'max' && value >= newRange.min) {
            newRange.max = value;
        }

        setRanges({ ...ranges, [sliderType]: newRange });
    };

    return (
        <div className="w-full h-fit lg:sticky static top-0 px-4">
            <OptionSelector
                label="Stone Selection"
                options={stoneSelections}
                selectedOption={selectedValues.stoneSelection}
                onSelect={(stoneSelection) => setSelectedValues({ ...selectedValues, stoneSelection })}
            />
            <div className="w-full -mt-2">
                <RangeSlider
                    label="Carat"
                    min="0"
                    max="10"
                    range={ranges.carat}
                    sliderType="carat"
                    handleInputChange={handleInputChange}
                    stepCount={2}
                    labels={["Min. 1.5ct", "Max. 10.00ct"]}
                />
                <RangeSlider
                    label="Colour"
                    min="0"
                    max="6"
                    range={ranges.colour}
                    sliderType="colour"
                    handleInputChange={handleInputChange}
                    stepCount={7}
                    labels={["D", "E", "F", "G", "H", "I", "J"]}
                />
                <RangeSlider
                    label="Clarity"
                    min="0"
                    max="7"
                    range={ranges.clarity}
                    sliderType="clarity"
                    handleInputChange={handleInputChange}
                    stepCount={8}
                    labels={["SI2", "SI1", "VS2", "VS1", "VVS2", "VVS1", "IF", "FL"]}
                />
                <RangeSlider
                    label="Cut"
                    min="0"
                    max="3"
                    range={ranges.cut}
                    sliderType="cut"
                    handleInputChange={handleInputChange}
                    stepCount={4}
                    labels={["Good", "Very Good", "Excellent", "Ideal"]}
                />
                <div className="mt-5">
                    <OptionSelector
                        label="Certificate"
                        options={certificate}
                        selectedOption={selectedValues.certificate}
                        onSelect={(certificate) => setSelectedValues({ ...selectedValues, certificate })}
                        className='flex-1'
                    />
                </div>
                <div className="mb-4 mt-3">
                    <label className="block text-[#8E8E93] mb-2"><span className="font-futura-medium underline text-lg text-[#B4A377] font-medium">Advanced Options</span> (Optional)</label>
                </div>
                <Button variant="primary" className="flex-1 block w-full">Close</Button>
            </div>
        </div>
    );
};

export default ProductDetailsComparisonForm;