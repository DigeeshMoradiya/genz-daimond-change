"use client"
import React, { useState } from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import Button from '../button';
import SectionTitle from './section-title';
import PriceDisplay from './price-display';
import OptionSelector from './option-selector';
import DropdownSelector from './dropdown-selector';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const ProductDetailsForm = ({
    title,
    sku,
    price,
    originalPrice,
    metals,
    tones,
    stoneSelections,
    totalCarat,
    color,
    clarity,
    cut,
    type,
    certificate,
    sizes,
    engravingPlaceholder,
    deliveryInfo,
    stockInfo,
    variant = 'default'
}) => {
    const navigate = useRouter(); // Initialize navigate function
    const [isOpen, setIsOpen] = useState(false)
    const [selectedValues, setSelectedValues] = useState({
        metal: metals[0] ?? '',
        tone: tones[0] ?? '',
        stoneSelection: stoneSelections[0] ?? '',
        size: sizes[0] ?? '',
        totalCarat: totalCarat[0] ?? '',
        color: color[0] ?? '',
        clarity: clarity[0] ?? '',
        cut: cut[0] ?? '',
        certificate: certificate[0] ?? '',
        type: type[0] ?? '',
        shape: 'round' ?? '',
    });
    const underLine = ({ width }) => {
        return (
            <hr className="pb-2" style={{ border: 'none', height: '2px', backgroundColor: 'transparent', borderTop: '2px dashed #F2F2F7', width: width, margin: 'auto' }} />
        )
    }
    const handleAddToCart = () => {
        // Logic to handle adding to cart (if any)
        navigate('/check-out'); // Navigate to cart page
    };

    const addEngraving = () => <div className="mb-4 mt-3"><div >
        <label className="block text-[#8E8E93] mb-2" onClick={() => setIsOpen(!isOpen)}><span className="font-futura-medium underline text-lg text-[#B4A377] font-normal">Add Engraving</span> <span className='opacity-75 font-futura-thin'>(Optional)</span></label>
    </div>
        {isOpen ? <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Add Engraving" required /> : null}
    </div>

    return variant === 'second' ? (
        <div className="w-full">
            <SectionTitle title={title} subtitle={`(SKU: ${sku})`} variant={variant} />
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <p className="text-gray-500 font-futura-medium text-lg text-[#8E8E93]">Stock Price</p>
                    <PriceDisplay price={price} originalPrice={originalPrice} />
                </div>
                <div>
                    <p className="text-gray-500 font-futura-medium text-lg text-[#8E8E93]">Customize Price</p>
                    <PriceDisplay price={price} originalPrice={originalPrice} variant={variant} />
                </div>
            </div>
            <hr className="border-t border-dashed border-gray-300 mb-4" />
            <div className="grid grid-cols-2 gap-2 items-center">
                <h1 className="text-lg font-medium font-futura-medium">Band</h1>
                <h1 className="text-lg font-medium font-futura-medium">Band</h1>
                <OptionSelector
                    label="Metal"
                    options={metals}
                    selectedOption={selectedValues.metal}
                    onSelect={(metal) => setSelectedValues({ ...selectedValues, metal })}
                    variant={variant}

                />
                <DropdownSelector
                    label="Metal"
                    options={metals}
                    selectedOption={selectedValues.metal}
                    onSelect={(metal) => setSelectedValues({ ...selectedValues, metal })}
                    variant={variant}
                />

                <OptionSelector
                    label="Tone"
                    options={tones}
                    selectedOption={selectedValues.tone}
                    onSelect={(tone) => setSelectedValues({ ...selectedValues, tone })}
                    variant={variant}
                />
                <DropdownSelector
                    label="Tone"
                    options={tones}
                    selectedOption={selectedValues.tone}
                    onSelect={(tone) => setSelectedValues({ ...selectedValues, tone })}
                    variant={variant}
                />
                <OptionSelector
                    label="Ring Size"
                    options={sizes}
                    selectedOption={selectedValues.size}
                    variant={variant}
                    onSelect={(size) => setSelectedValues({ ...selectedValues, size })}
                />

                <DropdownSelector
                    label="Ring Size"
                    options={sizes}
                    selectedOption={selectedValues.size}
                    onSelect={(size) => setSelectedValues({ ...selectedValues, size })}
                    variant={variant}
                />
            </div>
            <hr className="border-t border-dashed border-gray-300 my-4" />
            <div className="grid grid-cols-2 gap-2 items-center  flex-wrap">
                <h1 className="text-lg font-medium font-futura-medium">Metal Detail</h1>
                <div className='flex items-center gap-x-4 justify-between'>
                    <h1 className="text-lg font-medium font-futura-medium">Stone Detail</h1>
                    <a href="#" className="text-[#B4A377] underline text-sm block">Find a Specific Diamond</a>
                </div>
                {/* <OptionSelector
                    label="Type"
                    options={type}
                    selectedOption={selectedValues.type}
                    variant={variant}
                    onSelect={(type) => setSelectedValues({ ...selectedValues, type })}
                />
                <DropdownSelector
                    label="Type"
                    options={type}
                    selectedOption={selectedValues.type}
                    variant={variant}
                    onSelect={(type) => setSelectedValues({ ...selectedValues, type })}
                /> */}
                <OptionSelector
                    label="Shape"
                    options={stoneSelections}
                    selectedOption={selectedValues.shape}
                    variant={variant}
                    onSelect={(shape) => setSelectedValues({ ...selectedValues, shape })}
                />
                <DropdownSelector
                    label="Shape"
                    options={stoneSelections}
                    selectedOption={selectedValues.shape}
                    variant={variant}
                    onSelect={(shape) => setSelectedValues({ ...selectedValues, shape })}
                />
                <OptionSelector
                    label="Carat"
                    options={totalCarat}
                    selectedOption={selectedValues.totalCarat}
                    variant={variant}
                    onSelect={(totalCarat) => setSelectedValues({ ...selectedValues, totalCarat })}
                />
                <DropdownSelector
                    label="Carat"
                    options={totalCarat}
                    selectedOption={selectedValues.totalCarat}
                    variant={variant}
                    onSelect={(totalCarat) => setSelectedValues({ ...selectedValues, totalCarat })}
                />
                <OptionSelector
                    label="Colour"
                    options={color}
                    selectedOption={selectedValues.color}
                    variant={variant}
                    onSelect={(color) => setSelectedValues({ ...selectedValues, color })}
                />
                <DropdownSelector
                    label="Colour"
                    options={color}
                    selectedOption={selectedValues.color}
                    variant={variant}
                    onSelect={(color) => setSelectedValues({ ...selectedValues, color })}
                />
                <OptionSelector
                    label="Clarity"
                    options={clarity}
                    selectedOption={selectedValues.clarity}
                    variant={variant}
                    onSelect={(clarity) => setSelectedValues({ ...selectedValues, clarity })}
                />

                <DropdownSelector
                    label="Clarity"
                    options={clarity}
                    variant={variant}
                    selectedOption={selectedValues.clarity}
                    onSelect={(clarity) => setSelectedValues({ ...selectedValues, clarity })}
                />
                <OptionSelector
                    label="Cut"
                    options={cut}
                    selectedOption={selectedValues.cut}
                    variant={variant}
                    onSelect={(cut) => setSelectedValues({ ...selectedValues, cut })}
                />
                <DropdownSelector
                    label="Cut"
                    options={cut}
                    selectedOption={selectedValues.cut}
                    variant={variant}
                    onSelect={(cut) => setSelectedValues({ ...selectedValues, cut })}
                />
                <OptionSelector
                    label="Certificate"
                    options={certificate}
                    selectedOption={selectedValues.certificate}
                    variant={variant}
                    onSelect={(certificate) => setSelectedValues({ ...selectedValues, certificate })}
                />
                <DropdownSelector
                    label="Certificate"
                    options={certificate}
                    selectedOption={selectedValues.certificate}
                    variant={variant}
                    onSelect={(certificate) => setSelectedValues({ ...selectedValues, certificate })}
                />
            </div>
            <hr className="border-t border-dashed border-gray-300 my-4" />
            {addEngraving()}
            <Button variant="primary" className="flex-1 block w-full" onClick={() => router.push('/cart')}>Add to Cart</Button>
        </div>
    ) : <div className="w-full">
        <SectionTitle title={title} subtitle={`(SKU: ${sku})`} />
        <p className="text-gray-500 font-futura-medium text-lg text-[#8E8E93]">From</p>
        <PriceDisplay price={price} originalPrice={originalPrice} />
        {underLine({ width: '98%' })}
        <div className='mb-4 flex flex-col gap-4'>
            <OptionSelector
                label="Metal"
                options={metals}
                selectedOption={selectedValues.metal}
                onSelect={(metal) => setSelectedValues({ ...selectedValues, metal })}
            />
            <OptionSelector
                label="Tone"
                options={tones}
                selectedOption={selectedValues.tone}
                onSelect={(tone) => setSelectedValues({ ...selectedValues, tone })}
            />
        </div>
        {underLine({ width: '98%' })}
        <OptionSelector
            label="Stone Selection"
            options={stoneSelections}
            selectedOption={selectedValues.stoneSelection}
            onSelect={(stoneSelection) => setSelectedValues({ ...selectedValues, stoneSelection })}
        />
        {underLine({ width: '98%' })}
        <div className="mb-4 mt-2 grid grid-cols-3 md:grid-cols-5 gap-4">
            <DropdownSelector
                label="Total Carat"
                options={totalCarat}
                selectedOption={selectedValues.totalCarat}
                onSelect={(totalCarat) => setSelectedValues({ ...selectedValues, totalCarat })}
            />
            <DropdownSelector
                label="Colour"
                options={color}
                selectedOption={selectedValues.color}
                onSelect={(color) => setSelectedValues({ ...selectedValues, color })}
            />
            <DropdownSelector
                label="Clarity"
                options={clarity}
                selectedOption={selectedValues.clarity}
                onSelect={(clarity) => setSelectedValues({ ...selectedValues, clarity })}
            />
            <DropdownSelector
                label="Cut"
                options={cut}
                selectedOption={selectedValues.cut}
                onSelect={(cut) => setSelectedValues({ ...selectedValues, cut })}
            />
            <DropdownSelector
                label="Certificate"
                options={certificate}
                selectedOption={selectedValues.certificate}
                onSelect={(certificate) => setSelectedValues({ ...selectedValues, certificate })}
            />
        </div>
        <OptionSelector
            label="Size"
            options={sizes}
            selectedOption={selectedValues.size}
            onSelect={(size) => setSelectedValues({ ...selectedValues, size })}
        />
        {addEngraving()}
        <Link href="/cart" className=''>
            <Button variant="primary" className="flex-1 block w-full" onClick={handleAddToCart}>Add to Cart</Button>
        </Link>
        <p className="text-[#7A7A7A] text-base mt-4 flex items-center"><Image src="/assets/products/6.svg" alt="Product Image" width={24} height={24} className='mr-2' />
            {deliveryInfo}</p>
        <p className="text-[#7A7A7A] text-base mt-1">{stockInfo}</p>
    </div>;
};

export default ProductDetailsForm;