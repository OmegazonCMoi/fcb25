'use client'

interface TableProps {
    rounded: string
    orientation: 'horizontal' | 'vertical' | 'square';
    className?: string;
}

const Table = ({ rounded, orientation, className }: TableProps) => {
    const sizeClasses =
        orientation === 'horizontal' ? 'h-10 w-20' :
            orientation === 'vertical' ? 'h-20 w-10' :
                orientation === 'square' ? 'h-10 w-10' : 'h-0 w-0';
    return <>
        <div className={`${sizeClasses} ${className} bg-neutral-800 rounded-${rounded} border border-neutral-700`} />
    </>
}

export default Table;