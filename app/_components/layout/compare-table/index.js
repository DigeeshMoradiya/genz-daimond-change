import { IoMdClose } from "react-icons/io";
import Button from "../button";

export default function CompareTable({ data = [], handleRemove = () => { } }) {
    const headers = ["Diamond Type", "Diamond Id", "Price", "Shape", "Carat", "Clarity", "Colour", "Cut", "Polish", "Symmetry", "Fluorescence", "Measurement", "Certificate", "Cert No.", "Depth", "Table Percent", "Video"];
    const keys = ["diamondType", "diamondId", "price", "shape", "carat", "clarity", "color", "cut", "polish", "symmetry", "fluorescence", "measurement", "certificate", "certNo", "depth", "tablePercent", "videoLink"];

    return (
        <div className="overflow-x-auto col-span-3 bg-white">
            <table data-aos="fade-left" className="min-w-full border bg-white text-[#292929] 3xl:text-base text-sm text-nowrap">
                <thead>
                    <tr>
                        <th className="sticky-left border py-2 px-2 z-[10]"></th>
                        {data.map((item, index) => (
                            <th key={index} className="border text-center relative">
                                <img src={item.img} alt="Diamond" className="mx-auto mb-4 w-full" />
                                <button onClick={() => handleRemove(item)} className="absolute top-2 right-2 w-6 h-6 bg-[#E6E6E6] flex justify-center items-center z-1"><IoMdClose /></button>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {headers.map((header, index) => (
                        <tr key={index}>
                            <td className="sticky-left border py-2 px-2 font-medium">{header}</td>
                            {data.map((item, idx) => (
                                <td key={idx} className="border py-2 px-2 text-center group cursor-pointer">
                                    {header === "Video" ? (
                                        <a href={item[keys[index]]} className="block text-[#8E8E93]"><span className="font-futura-thin underline text-[#B4A377]">Video</span></a>
                                    ) : (
                                        item[keys[index]]
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                    <tr>
                        <td className="sticky-left border py-2 px-2"></td>
                        {data.map((item, index) => (
                            <td key={index} className="text-center group py-2 px-2 border">
                                <a href='#' className="block text-[#8E8E93] mb-2"><span className="font-futura-medium underline text-[#B4A377] font-medium">Add to Ring</span></a>
                                <Button variant="primary" className="block w-full">View Details</Button>
                            </td>
                        ))}
                    </tr>
                    {/* <tr>
                        <td className="sticky-left border py-2 px-2"></td>
                        {data.map((item, index) => (
                            <td key={index} className="border py-2 px-2 text-center">
                            </td>
                        ))}
                    </tr> */}
                </tbody>
            </table>
        </div>
    );
};