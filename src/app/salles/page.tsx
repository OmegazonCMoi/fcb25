'use client'

import NavigationMenu from "@/components/blocks/navigation-menu"
import React from "react"
import './styles.css'
import Table from "@/components/blocks/table"

interface TableRowProps {
    orientation: 'horizontal' | 'vertical' | 'square';
    rounded: string;
    count: number;
    color: string;
    className?: string;
}

const TableRow: React.FC<TableRowProps> = ({ orientation, rounded, count, color, className = '' }) => {
    return (
        <div className={`flex ${orientation === 'horizontal' ? 'mx-auto justify-center gap-2' : 'items-center w-full px-1'} ${className}`}>
            {Array.from({ length: count }).map((_, index) => (
                <Table key={index} color={color} orientation={orientation} rounded={rounded} className={orientation === 'horizontal' ? 'mt-1' : index === 0 ? 'ml-1' : 'mr-1'} />
            ))}
        </div>
    );
};

const Salles = () => {
    return (
        <>
            <NavigationMenu />
            <div id="plan" className="absolute top-1/2 -translate-y-1/2 px-2">
                <div id="div1" className="rounded-xl bg-neutral-100 border border-neutral-200 shadow-sm">
                    <div className="flex flex-col items-center justify-center h-full mx-auto">
                        <div className="flex flex-col items-center justify-center">
                            <TableRow orientation="square" rounded="full" count={2} color="violet" className="gap-20 mx-auto justify-center mb-10" />
                            <div className="flex mx-auto justify-center">
                                <Table orientation="square" rounded="full" color="violet" />
                                <Table orientation="horizontal" rounded="xl" color="violet" className="mt-4" />
                                <Table orientation="square" rounded="full" color="violet" />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="div2" className="rounded-xl bg-red-100 border border-red-200 m-1 shadow-sm">
                    <div className="flex flex-col items-center justify-between h-full">
                        <TableRow orientation="horizontal" rounded="xl" count={3} color="amber" />
                        <TableRow orientation="vertical" rounded="xl" count={2} color="amber" className="justify-between" />
                        <TableRow orientation="horizontal" rounded="xl" count={3} color="amber" className="mt-auto mb-1" />
                    </div>
                </div>
                <div id="div3" className="rounded-xl bg-red-50 border border-red-100 shadow-sm">
                    <div className="flex mx-auto justify-center">
                        <Table color="amber" orientation="horizontal" rounded="xl" className="mt-1" />
                    </div>
                </div>
                <div id="div4" className="rounded-xl bg-green-100 border border-green-200 shadow-sm"></div>
                <div id="div5" className="rounded-xl bg-sky-100 border border-sky-150 shadow-sm"></div>
            </div>
        </>
    )
}

export default Salles;