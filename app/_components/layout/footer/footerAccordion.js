"use client"
import { useState } from "react"
import Accordion from "../accordian";

export default function FooterAccordion({ data = [] }) {
    const [active, setActive] = useState(null);

    return (
        data?.map((item, i) =>
            <Accordion
                key={i}
                id={i}
                title={item?.title}
                content={item?.content}
                setIsOpen={setActive}
                isOpen={Boolean(active === i)}
            />
        )
    )
}