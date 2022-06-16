import Tyre from '../assets/atores principais/Tyre.png';
import Ben from '../assets/atores principais/Ben.png';
import Cooke from '../assets/atores principais/Cooke.png';
import Pegg from '../assets/atores principais/Pegg.png';
import TJ from '../assets/atores principais/T.J.png';




import { ElencoCard } from './ElencoCard';

export function Main() {
    return(
        <main
         className="mx-12 flex flex-col gap-y-[40px]"
        >

            <section
             className="flex flex-col gap-y-[30px]"
            >
                <h2
                 id="info-geral"
                 className="font-bold text-2xl"
                >
                    Info geral
                </h2>
                <section
                 className="flex flex-col gap-y-[10px]"
                >
                    <p
                    className="first-letter:ml-10 text-justify"
                    >
                        Ready Player One (no Brasil, Jogador Nº1) é um filme distópico de ação, aventura e ficção científica estadunidense de 2018, produzido e dirigido por Steven Spielberg e escrito por Zak Penn e Ernest Cline, baseado no romance de 2011 de mesmo nome escrito por Cline. Produzido pela Warner Bros. Pictures, Amblin Partners, Amblin Entertainment, Village Roadshow Pictures, De Line Pictures e Farah Films & Management e distribuído pela Warner Bros., é estrelado por Tye Sheridan, Olivia Cooke, Ben Mendelsohn, T. J. Miller, Simon Pegg e Mark Rylance.
                    </p>

                    <p
                    className="first-letter:ml-10 text-justify"
                    >
                        As filmagens ocorreram entre julho e setembro de 2016 em Birmingham, na Inglaterra. Ambientado em Ohio, nos Estados Unidos, outras regiões da cidade de Birmingham foram utilizadas nas filmagens, como a área central Jewellery Quarter, o albergue Hatters e a antiga área industrial de Digbeth.
                    </p>

                    <p
                    className="first-letter:ml-10 text-justify"
                    >
                        A pré-estreia de Ready Player One ocorreu no South by Southwest, em Austin, no dia 11 de março de 2018. Estreou no Brasil e em Portugal em 29 de março de 2018, sendo lançado no mesmo dia nos Estados Unidos nos formatos convencional, RealD 3D, IMAX e IMAX 3D. Recebeu críticas geralmente positivas, destacando-se o visual, efeitos visuais, ritmo e direção. Para alguns, apesar de uma melhora em relação à obra escrita por Ernest Cline, peca pela "falta de desenvolvimento de personagem". Em consenso, críticos relatam que Ready Player One possui a nostalgia que marcou os filmes dos anos de 1980 e 1990 que consagraram Spielberg, podendo ser o novo clássico do currículo do diretor. Arrecadou mais de US$ 582 milhões mundialmente, contra um orçamento de US$ 175 milhões.
                    </p>
                </section>
            </section>

            <section
                id="resumo"
                className="flex flex-col gap-y-[30px]"
            >
                <h2
                 className="font-bold text-2xl"
                >
                    Enredo
                </h2>
                <section
                    className="flex flex-col gap-y-[10px]"
                >
                    <p className="first-letter:ml-10 text-justify">
                        Em 2045, a humanidade procura fugir da vida normal através do OASIS (<b>O</b>ntologically <b>A</b>nthropocentric <b>S</b>ensory <b>I</b>mmersive <b>S</b>imulation), um videogame de realidade virtual criado por James Halliday e Ogden Morrow da Gregarious Games em 2025. Após a morte de Halliday, uma mensagem pré-gravada deixada por seu avatar, Anorak, anuncia um desafio, concedendo a propriedade do OASIS ao primeiro jogador que encontrar o easter egg dentro dele, que está trancado atrás de um portão que requer três chaves. O concurso atraiu vários “Gunters”, ou caçadores de ovos, e o interesse de Nolan Sorrento, CEO da Innovative Online Industries (IOI), que procura controlar o próprio OASIS. A IOI usa um número de funcionários contratados e empregados chamados "Seis" para encontrar o ovo.
                    </p>
                    <p className="first-letter:ml-10 text-justify">
                        Wade Watts é um adolescente órfão que vive nas favelas de Columbus, com sua tia Alice. No OASIS, seu avatar, Parzival, é o melhor amigo de Aech, um mecânico virtual. Um dia, Parzival faz amizade com Art3mis, uma conhecida gunter, compartilhando um interesse comum na história de Halliday. Eles reveem a vida de Halliday nos arquivos, uma biblioteca on-line da vida de Halliday que surgiu no início do desafio. Eles descobrem que Halliday teve vários arrependimentos na vida, incluindo seu amor não correspondido pela esposa de Morrow, Kira, e perder Morrow como amigo, depois de forçá-lo a assinar sua parte na Gregarious Games. Usando essas informações, eles resolvem os dois primeiros desafios do jogo de Anorak: Uma corrida de carros em Manhattan e uma busca por Kira no hotel de The Shining. Aech e dois outros amigos, Daito e Sho, logo seguem o exemplo, o grupo se torna conhecido como "Cinco no topo" nos placares do OASIS.
                    </p>
                </section>

                <section>
                    <p className="first-letter:ml-10 text-justify">
                        Sorrento descobre a identidade de Parzival através do mercenário i-R0k, e tenta influenciar Wade a aderir a IOI, mas ele se recusa. Em retaliação, Sorrento ordena que sua agente de segurança, Zandor, cordene um ataque de drones à sua casa, matando Alice. A usuária de Art3mis, Samantha Cook, resgata Wade, mas eles logo são encontrados pela IOI. Samantha é capturada e enviada para um dos Centros de Lealdade da IOI para quitar a dívida adquirida por seu pai, enquanto Wade é salvo pelo resto do grupo - Helen (Aech), Toshiro (Daito) e Zhou (Sho). O grupo rastreia a localização de Samantha na IOI e remotamente a ajudam a escapar, permitindo que ela os auxilie no OASIS como Art3mis.
                    </p>
                    <p className="first-letter:ml-10 text-justify">
                        O terceiro desafio exige descobrir o jogo favorito de Halliday em um Atari 2600, em um castelo no planeta Doom, que Sorrento protegeu com um campo de força. Parzival chama os outros jogadores do OASIS para ajudar os rebeldes a atacarem as forças da IOI ao redor do castelo. Art3mis desativa o campo de força, permitindo que Parzival alcance o console, mas Sorrento ativa o Cataclyst, uma bomba que mata todos os avatares no Planeta Doom. No entanto, devido a ter ganhado uma moeda do curador dos arquivos, Parzival ganha uma vida extra. Após encontrar o easter egg de Adventure; ele é premiado com a última chave. Ele abre o portão e é recebido por Anorak e recebe um contrato para assinar; no entanto, ele reconhece como o mesmo contrato assinado por Morrow para entregar sua parte da Gregarious e recusa a assinar. Anorak muda de forma, tornando-se Halliday e revelando que o contrato foi o teste final para garantir que Parzival não cometeria os mesmos erros que ele. Parzival recebe o easter egg e o controle do OASIS.
                    </p>
                </section>
            </section>

            <section
             className="flex flex-col gap-y-[30px]"
            >
                <h2 
                 id="elenco"
                 className="font-bold text-2xl"
                >
                    Elenco
                </h2>
                <section
                 className='flex flex-wrap gap-x-3 gap-y-4 justify-center'
                >
                    <ElencoCard
                    img={Tyre}
                    name='Tyre'
                    text='No filme, atua como Wade Watts'
                    />
                    <ElencoCard
                    img={Ben}
                    name='Ben'
                    text='Atua como Sorrento'
                    />
                    <ElencoCard
                    img={Cooke}
                    name='Cooke'
                    text='Atua como Samantha'
                    />
                    <ElencoCard
                    img={Pegg}
                    name='Pegg'
                    text='Atua como Ogden'
                    />
                    <ElencoCard
                    img={TJ}
                    name='T.J'
                    text='Atua como i-R0k'
                    />
                </section>
            </section>
        </main>
    )
}