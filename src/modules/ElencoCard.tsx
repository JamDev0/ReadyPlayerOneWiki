interface ElencoCardProps {
    name: string,
    img: string,
    text: string,
}

export function ElencoCard({name, img, text}:ElencoCardProps) {
    return(
        <div
         className='flex flex-col min-w-[10rem] max-w-[15rem] p-7 bg-slate-700 rounded-lg shadow-lg shadow-black items-center'
        >
            <h2 className='font-semibold text-xl'>{name}</h2>
            <img src={img}
            className='w-full'
            />
            <p
            className='text-center'
            >{text}</p>
        </div>

    )
}