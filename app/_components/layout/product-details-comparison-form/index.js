"use client"
import React, { useState } from 'react';
import Button from '../button';
import OptionSelector from '../product-details-form/option-selector';
import Slider from 'react-slider';
import ReactSlider from 'react-slider';


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

    const [value, setValue] = useState([1.5, 10]);
    const [clarity, setClarity] = useState([1, 9]);
    const [color, setColor] = useState([1, 8]);
    const [cut, setCut] = useState([1, 5]);


    return (
        <div className="w-full h-fit lg:sticky static top-0 px-4">
            <OptionSelector
                label="Stone Selection"
                options={stoneSelections}
                selectedOption={selectedValues.stoneSelection}
                onSelect={(stoneSelection) => setSelectedValues({ ...selectedValues, stoneSelection })}
            />
            <div className="max-w-lg mx-auto">


                <div className="w-full max-w-lg mx-auto my-0 relative">
                    <div className="w-full max-w-lg mx-auto my-8">
                        <h2 className="text-[#8F8F8F] font-[450] mb-1">Carat</h2>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Min. {value[0]}ct</span>
                            <span className="text-gray-500">Max{value[1].toFixed(2)}ct</span>
                        </div>

                        <Slider
                            className="w-full h-1 rounded-full"
                            thumbClassName="w-5 h-5 bg-white border-2 border-[#B4A377] justify-center rounded-full cursor-pointer focus:outline-none shadow-md"
                            trackClassName="absolute top-[9px] h-[2.5px] bg-[#B4A377] rounded-md"
                            defaultValue={[1.5, 10]}
                            min={1.5}
                            max={10}
                            step={0.1}
                            value={value}
                            onChange={setValue}
                            ariaLabel={['Min', 'Max']}
                            ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
                            minDistance={0}
                        />


                    </div>
                </div>


                <div className="w-full max-w-lg mx-auto my-0 relative">
                    <div className="w-full max-w-lg mx-auto py-4">
                        <h2 className="text-[#8F8F8F] font-[450] mb-1">Color</h2>
                        <div className="relative">
                            <ReactSlider
                                className="w-full h-2 rounded-full"
                                thumbClassName="w-5 h-5 bg-[#FFFFFF] border-2 border-[#B4A377] items-center rounded-full focus:outline-none cursor-pointer shadow-md"
                                trackClassName="absolute top-[9px] h-[2.5px] bg-[#B4A377] rounded-md mx-3"
                                defaultValue={color}
                                min={1}
                                max={8}
                                step={1}
                                minDistance={1}
                                onChange={(value) => setColor(value)}
                            />


                            <div className="absolute w-full top-1.5 grid grid-cols-8 text-center px-2">

                                {Array.from({ length: 8 }, (_, index) => (
                                    <span
                                        key={index}
                                        className="dot w-2 h-2 bg-[#B4A377] rounded-full"
                                        style={{
                                            position: 'relative',
                                            left: `${(index / 7) * 100}%`,
                                            transform: 'translateX(-50%)',
                                        }}
                                    ></span>
                                ))}
                            </div>


                            <div className="grid grid-cols-7 text-center mt-4 text-gray-500 text-xs">
                                {["J", "I", "H", "G", "F", "E", "D"].map((label, index) => (
                                    <span key={index}

                                        style={{

                                        }}>{label}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
                <div className="w-full max-w-lg mx-auto my-0 relative">
                    <div className="w-full max-w-lg mx-auto py-4">
                        <h2 className="text-[#8F8F8F] font-[450] mb-1">Clarity</h2>
                        <div className="relative">
                            <ReactSlider
                                className="w-full h-2 rounded-full"
                                thumbClassName="w-5 h-5 bg-[#ffff] border-2 border-[#B4A377] items-center rounded-full focus:outline-none cursor-pointer shadow-md"
                                trackClassName="absolute top-[9px] h-[2px] bg-[#B4A377] rounded-md mx-3"
                                defaultValue={clarity}
                                min={1}
                                max={9}
                                step={1}
                                minDistance={1}
                                onChange={(value) => setClarity(value)}


                            />
                            {/* <div className="absolute w-full top-1.5 grid grid-cols-8 text-center px-2">

                                {["SI2", "SI1", "VS2", "VS1", "VVS2", "VVS1", "IF", "FL"].map((_, index) => (
                                    <span key={index} className="dot w-2 h-2 bg-[#B4A377] rounded-full"></span>
                                ))}
                            </div> */}

                            <div className="absolute w-full top-1.5 grid grid-cols-12 text-center px-2">

                                {Array.from({ length: 9 }, (_, index) => (
                                    <span
                                        key={index}
                                        className="dot w-2 h-2 bg-[#B4A377] rounded-full"
                                        style={{
                                            position: 'relative',
                                            left: `${(index / 2) * 100}%`,
                                            transform: 'translateX(-50%)',
                                        }}
                                    ></span>
                                ))}
                            </div>

                            <div className="grid grid-cols-8 text-center mt-4  text-gray-500 text-xs">
                                {["SI2", "SI1", "VS2", "VS1", "VVS2", "VVS1", "IF", "FL"].map((label, index) => (
                                    <span key={index}>{label}</span>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>



                <div className="w-full max-w-lg mx-auto my-0 relative">
                    <div className="w-full max-w-lg mx-auto py-4">
                        <h2 className="text-[#8F8F8F] font-[450] mb-1">Color</h2>
                        <div className="relative">
                            <ReactSlider
                                className="w-full h-2 rounded-full"
                                thumbClassName="w-5 h-5 bg-[#ffff] border-2 border-[#B4A377] items-center rounded-full focus:outline-none cursor-pointer shadow-md"
                                trackClassName="absolute top-[9px] h-[2px] bg-[#B4A377] rounded-md mx-3"
                                defaultValue={cut}
                                min={1}
                                max={5}
                                step={1}
                                minDistance={1}
                                onChange={(value) => setCut(value)}
                            />


                            <div className="absolute w-full top-1.5 grid grid-cols-8 text-center px-2">

                                {Array.from({ length: 5 }, (_, index) => (
                                    <span
                                        key={index}
                                        className="dot w-2 h-2 bg-[#B4A377] rounded-full"
                                        style={{
                                            position: 'relative',
                                            left: `${(index / 1) * 100}%`,
                                            transform: 'translateX(-50%)',
                                        }}
                                    ></span>
                                ))}
                            </div>


                            <div className="grid grid-cols-4 text-center mt-4 text-gray-500 text-xs">
                                {["Good", "Very Good", "Excellent", "Ideal"].map((label, index) => (
                                    <span key={index}

                                        style={{

                                        }}>{label}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductDetailsComparisonForm;