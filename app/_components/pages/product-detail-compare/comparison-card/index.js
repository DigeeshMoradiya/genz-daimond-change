import DiamondCardCompare from "@app//_components/layout/compare-card";
import CompareCardMain from "@app//_components/layout/compare-card-main";
import CompareTable from "@app//_components/layout/compare-table";

// const data = [
//     {
//         id: 1
//     },
//     {
//         id: 2
//     },
//     {
//         id: 3
//     },
//     {
//         id: 4
//     },
//     {
//         id: 5
//     },
//     {
//         id: 6
//     },
// ]

const data = [
    {
        id: 1,
        img: "/assets/diamonds/image.png",
        diamondType: "Labgrown",
        diamondId: "1.3VVS2ELG9865BK",
        price: 9865.00,
        shape: "Round",
        carat: 2.50,
        clarity: "VVS2",
        color: "G",
        cut: "Ideal",
        polish: "Excellent",
        symmetry: "Excellent",
        fluorescence: "None",
        measurement: "8.35X8.35X5.5",
        certificate: "GIA",
        certNo: "BK653298789",
        depth: 50.36,
        tablePercent: 60.00,
        videoLink: "#"
    },
    {
        id: 2,
        img: "/assets/diamonds/image.png",
        diamondType: "Labgrown",
        diamondId: "1.3VVS2ELG9865BK",
        price: 9865.00,
        shape: "Round",
        carat: 2.50,
        clarity: "VVS2",
        color: "G",
        cut: "Ideal",
        polish: "Excellent",
        symmetry: "Excellent",
        fluorescence: "None",
        measurement: "8.35X8.35X5.5",
        certificate: "GIA",
        certNo: "BK653298789",
        depth: 50.36,
        tablePercent: 60.00,
        videoLink: "#"
    },
    {
        id: 3,
        img: "/assets/diamonds/image.png",
        diamondType: "Labgrown",
        diamondId: "1.3VVS2ELG9865BK",
        price: 9865.00,
        shape: "Round",
        carat: 2.50,
        clarity: "VVS2",
        color: "G",
        cut: "Ideal",
        polish: "Excellent",
        symmetry: "Excellent",
        fluorescence: "None",
        measurement: "8.35X8.35X5.5",
        certificate: "GIA",
        certNo: "BK653298789",
        depth: 50.36,
        tablePercent: 60.00,
        videoLink: "#"
    },
    {
        id: 4,
        img: "/assets/diamonds/image.png",
        diamondType: "Labgrown",
        diamondId: "1.3VVS2ELG9865BK",
        price: 9865.00,
        shape: "Round",
        carat: 2.50,
        clarity: "VVS2",
        color: "G",
        cut: "Ideal",
        polish: "Excellent",
        symmetry: "Excellent",
        fluorescence: "None",
        measurement: "8.35X8.35X5.5",
        certificate: "GIA",
        certNo: "BK653298789",
        depth: 50.36,
        tablePercent: 60.00,
        videoLink: "#"
    },
    {
        id: 5,
        img: "/assets/diamonds/image.png",
        diamondType: "Labgrown",
        diamondId: "1.3VVS2ELG9865BK",
        price: 9865.00,
        shape: "Round",
        carat: 2.50,
        clarity: "VVS2",
        color: "G",
        cut: "Ideal",
        polish: "Excellent",
        symmetry: "Excellent",
        fluorescence: "None",
        measurement: "8.35X8.35X5.5",
        certificate: "GIA",
        certNo: "BK653298789",
        depth: 50.36,
        tablePercent: 60.00,
        videoLink: "#"
    },
    {
        id: 6,
        img: "/assets/diamonds/image.png",
        diamondType: "Labgrown",
        diamondId: "1.3VVS2ELG9865BK",
        price: 9865.00,
        shape: "Round",
        carat: 2.50,
        clarity: "VVS2",
        color: "G",
        cut: "Ideal",
        polish: "Excellent",
        symmetry: "Excellent",
        fluorescence: "None",
        measurement: "8.35X8.35X5.5",
        certificate: "GIA",
        certNo: "BK653298789",
        depth: 50.36,
        tablePercent: 60.00,
        videoLink: "#"
    },

];


export default function ComparisonLayout({ setSelected, selected, isComparison = false }) {

    const unCompareCards = () => data.map((item, index) => {
        const isSelected = selected.includes(item.id)
        return (
            <CompareCardMain key={index} selected={isSelected} handleCheck={() => setSelected(item)} />
        )
    })

    const compareContent = () => <CompareTable data={data?.filter((item) => selected.includes(item.id))} handleRemove={setSelected} />
    return (
        <div data-aos="fade-right" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 flex-wrap gap-2 p-3">
            {
                isComparison && selected.length > 1 ? (
                    compareContent()
                ) : unCompareCards()
            }

        </div>
    );
};