import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import { IconBaseProps } from 'react-icons';
import { FaAngleRight } from 'react-icons/fa';

export interface NestedMenuItemProps {
    title: string;
    href?: string;
    image?: string;
    Icon?: React.ComponentType<IconBaseProps>;
    nestedItems?: NestedMenuItemProps[],
    className?: string;
    showLabel?: boolean;
}

const NestedMenuItem: React.FC<NestedMenuItemProps> = ({ title, href, Icon, nestedItems, image, className, showLabel }) => {
    const [isActive, setIsActive] = React.useState(false);

    const handleClick = () => {
        if (nestedItems) setIsActive(!isActive);
    };

    return (
        <li className={"menu-item mb-1 " + className}>
            <Link 
                onClick={handleClick} 
                href={href || '#'}
                role={href ? 'link' : 'button'}
                className={`menu-link items-center flex p-2 py-3.5 transition-colors group text-base text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${isActive ? nestedItems ? 'active-parent' : 'active-child' : ''}`}
            >
                {image && (
                    <Image 
                        width={30} 
                        height={30} 
                        src={image} 
                        alt={title} 
                        className="menu-image size-6 rounded-full" 
                    />
                )}
                {Icon && (
                    <Icon className={`menu-icon size-6 ${isActive && nestedItems ? 'text-white' : 'text-slate-400'}`} />
                )}
                { (!Icon && !image) && (
                    <span className="size-6 uppercase text-sm rounded-full ltr:ml-3 rtl:mr-3 text-slate-50 font-sans" style={{ lineHeight: 1.7 }}>
                        {title[0]}
                    </span>
                ) }
                {showLabel && <span className="ltr:ml-3 rtl:mr-3 text-sm text-slate-50 font-sans">{title}</span>}
                {showLabel && nestedItems && (
                    <FaAngleRight 
                        className={`menu-arrow ltr:ml-auto rtl:mr-auto size-4 text-slate-400 group-hover:text-slate-50 ${isActive ? 'rotate-90 text-slate-50' : 'rotate-0'}`} 
                    />
                )}
            </Link>

            {isActive && nestedItems && (
                <ul className="nested-menu ltr:pl-1 rtl:pr-1 mt-1">
                    {nestedItems.map((child, index) => (
                        <NestedMenuItem 
                            key={index} 
                            showLabel={showLabel}
                            {...child}
                        />
                    ))}
                </ul>
            )}
        </li>
    );
};

export default NestedMenuItem;
