import { redirect } from 'next/navigation';
import React from 'react';

const DiamondCardCompare = ({ diamond }) => {
    return (
        <div className="bg-white p-4 text-sm">
            <div className="text-center">
                <img src={diamond?.img} alt="Diamond" className="mx-auto mb-4" />
            </div>
            <table className="w-full text-left text-sm">
                <tbody>
                    <tr>
                        <td className="font-semibold">Diamond Type</td>
                        <td>{diamond.diamondType}</td>
                    </tr>
                    <tr>
                        <td className="font-semibold">Diamond Id</td>
                        <td>{diamond.diamondId}</td>
                    </tr>
                    <tr>
                        <td className="font-semibold">Price</td>
                        <td>{diamond.price}</td>
                    </tr>
                    <tr>
                        <td className="font-semibold">Shape</td>
                        <td>{diamond.shape}</td>
                    </tr>
                    <tr>
                        <td className="font-semibold">Carat</td>
                        <td>{diamond.carat}</td>
                    </tr>
                    <tr>
                        <td className="font-semibold">Clarity</td>
                        <td>{diamond.clarity}</td>
                    </tr>
                    <tr>
                        <td className="font-semibold">Colour</td>
                        <td>{diamond.color}</td>
                    </tr>
                    <tr>
                        <td className="font-semibold">Cut</td>
                        <td>{diamond.cut}</td>
                    </tr>
                    <tr>
                        <td className="font-semibold">Polish</td>
                        <td>{diamond.polish}</td>
                    </tr>
                    <tr>
                        <td className="font-semibold">Symmetry</td>
                        <td>{diamond.symmetry}</td>
                    </tr>
                    <tr>
                        <td className="font-semibold">Fluorescence</td>
                        <td>{diamond.fluorescence}</td>
                    </tr>
                    <tr>
                        <td className="font-semibold">Measurement</td>
                        <td>{diamond.measurement}</td>
                    </tr>
                    <tr>
                        <td className="font-semibold">Certificate</td>
                        <td>{diamond.certificate}</td>
                    </tr>
                    <tr>
                        <td className="font-semibold">Cert No.</td>
                        <td>{diamond.certNo}</td>
                    </tr>
                    <tr>
                        <td className="font-semibold">Depth</td>
                        <td>{diamond.depth}</td>
                    </tr>
                    <tr>
                        <td className="font-semibold">Table Percent</td>
                        <td>{diamond.tablePercent}</td>
                    </tr>
                    <tr>
                        <td className="font-semibold">Video</td>
                        <td><a href={diamond.videoLink} className="text-blue-500 hover:underline">Video</a></td>
                    </tr>
                </tbody>
            </table>
            <div className="mt-4 text-center">
                <button onClick={() => redirect('/cart')} className="bg-yellow-500 text-white py-2 px-4 hover:bg-yellow-600">Add to Ring</button>
                <button className="bg-gray-800 text-white py-2 px-4 hover:bg-gray-900 ml-2">View Details</button>
            </div>
        </div>
    );
};

export default DiamondCardCompare;