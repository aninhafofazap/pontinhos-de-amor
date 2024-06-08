// PROPS = PROPRIEDADES

// type IMenu = {
//     classeName: string
// }

interface IMenu {
    className?: string;
}

export const Menu = ({ className }: IMenu) => {
    return (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"
            className={className}>
            <path d="M3 7.68604H21" stroke="#DFDFEC" stroke-width="1.5" stroke-linecap="round" />
            <path d="M3 12.6528H21" stroke="#DFDFEC" stroke-width="1.5" stroke-linecap="round" />
            <path d="M3 17.6191H21" stroke="#DFDFEC" stroke-width="1.5" stroke-linecap="round" />
        </svg>
    )
}