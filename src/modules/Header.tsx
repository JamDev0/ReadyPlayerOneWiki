export function Header() {
    return(
        <header
         className="flex flex-col w-full items-center p-7 gap-y-[20px] text-[#c9d0d3] bg-[#021014] mb-[100px] top-0 left-0"
        >
            <h1
             className="font-readyPlayerOneFont text-3xl"
            >
                Ready Player One
            </h1>

            <nav>
                <ul
                 className="flex gap-x-10 text-lg font-bold"
                >
                    <li><a className="hover:underline hover:decoration-[#46d3f0]" href="#info-geral">Info geral</a></li>
                    <li><a className="hover:underline hover:decoration-[#46d3f0]" href="#resumo">Enredo</a></li>
                    <li><a className="hover:underline hover:decoration-[#46d3f0]" href="#elenco">Elenco</a></li>
                    <li><a className="hover:underline hover:decoration-[#46d3f0]" href="#integrantes">Integrantes</a></li>
                </ul>
            </nav>
        </header>
    )
}