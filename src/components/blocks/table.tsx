'use client'

interface TableProps {
    color: string;
    rounded: string
    orientation: 'horizontal' | 'vertical' | 'square';
    className?: string;
}

const Table = ({ color, rounded, orientation, className }: TableProps) => {
    const sizeClasses =
        orientation === 'horizontal' ? 'h-10 w-20' :
            orientation === 'vertical' ? 'h-20 w-10' :
                orientation === 'square' ? 'h-10 w-10' : 'h-0 w-0';
    const colorClasses = color === 'amber' ? 'bg-amber-100 border-amber-200' :
        color === 'green' ? 'bg-green-100 border-green-200' :
            color === 'red' ? 'bg-red-100 border-red-200' :
                color === 'sky' ? 'bg-sky-100 border-sky-150' :
                    color === 'violet' ? 'bg-violet-200 border-violet-300' :
                        'bg-gray-100 border-gray-200';
    return <>
        <div className={`${sizeClasses} ${colorClasses} ${className} rounded-${rounded} border`} />
    </>
}

export default Table;