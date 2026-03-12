import { useState } from 'react'
function Game(){

const Presentacion={
    titulo:"¡Juega nuestro divertidos y populares juegos!",
    info: "En el reino encontrarás los mejores juegos para navegador y las aplicaciones para dispositivos móviles. Juega en tu ordenador, móvil o tableta y sincroniza fácilmente tu progreso. Los juegos de King son fáciles de manejar, ¡pero difíciles de dominar! Así que entra en nuestro reino ¡y prepárate para divertirte como nunca!"
};
const menu=["inicio","juegos","trabajos"]

return(
    <div>
    <div class="Menu">
    <ul class="menu">
       {menu.map((seccion,index)=> (
        <li key={index}>{seccion}</li>
       ))}
       <img class="img3" src="https://www.king.com/media/aplg20fk/logo.svg?width=110&height=74&v=133770142968670000"></img>
       <li class="men1">Canjear tarjeta regalo</li>
       <li class="men2">Comunidad</li>
    </ul>
    </div>
    
    <div class="Contenido1">
    <div class="Img1">
        <img class="img1" src="https://www.king.com/media/iiqfc4of/games-left-image.webp?width=540&v=133776268924170000&format=webp&quality=85"></img>
    </div>
        <h2 class="titulin">{Presentacion.titulo}</h2>
        <p class="contenidin">{Presentacion.info}</p>
        <div class="Contenido2">
        <div class="ficha grande">
            <img src="https://www.king.com/media/101hzoxu/bacgkround.webp?width=640&height=369&v=133776269695670000&format=webp&quality=85"></img>
            <p>Candy Crush Saga</p>
        </div>
        <div class="ficha">
            <img src="https://www.king.com/media/nh1anevm/background.webp?width=640&height=369&v=133776277031400000&format=webp&quality=85"></img>
            <p>Candy Crush Soda Saga</p>
        </div>
        <div class="ficha">
            <img src="https://www.king.com/media/cidplqrm/background.webp?width=640&height=369&v=133776277555270000&format=webp&quality=85"></img>
            <p>Farm Heroes Saga</p>

        </div>
        <div class="ficha">
            <img src="https://www.king.com/media/cbtlghuj/hero_lg.webp?width=640&height=369&v=133827997351970000&format=webp&quality=85"></img>
            <p>Candy Crush Solitaire</p>

        </div>
        <div class="ficha">
            <img src="https://www.king.com/media/tcejahpd/background.webp?width=640&height=369&v=133776278231830000&format=webp&quality=85"></img>
            <p>Pet Rescue Saga</p>
        </div>
        <div class="ficha">
            <img src="https://www.king.com/media/xbblmlge/background.webp?width=640&height=369&v=133776278802670000&format=webp&quality=85"></img>
            <p>Candy Crush Jelly Saga</p>
        </div>
        <div class="ficha">
            <img src="https://www.king.com/media/gl2nn03t/background.webp?width=640&height=369&v=133776279160700000&format=webp&quality=85"></img>
            <p>Bubble Witch 3 Saga</p>
        </div>
        <div class="ficha">
            <img src="https://www.king.com/media/v1pd2k3a/background.webp?width=640&height=369&v=133776279579030000&format=webp&quality=85"></img>
            <p>Candy Crush Friends Saga</p>
        </div>
        <div class="ficha">
            <img src="https://www.king.com/media/j45nbgdf/background.webp?width=640&height=369&v=133776280074330000&format=webp&quality=85"></img>
            <p>Farm Heroes Super Saga</p>
        </div>
        <div class="ficha">
            <img src="https://www.king.com/media/ljihsxgj/background.webp?width=640&height=369&v=133776280473000000&format=webp&quality=85"></img>
            <p>Diamond Diaries Saga</p>
        </div>
        <div class="ficha">
            <img src="https://www.king.com/media/zfucdaqj/background.webp?width=640&height=369&v=133776280879130000&format=webp&quality=85"></img>
            <p>Pyramid Solitaire Saga</p>
        </div>
        <div class="ficha">
            <img src="https://www.king.com/media/thgdtl30/background.webp?width=640&height=369&v=133776281234300000&format=webp&quality=85"></img>
            <p>Bubble Witch 2 Saga</p>
        </div>
        <div class="ficha">
            <img src="https://www.king.com/media/wqcb1viy/background.webp?width=640&height=369&v=133776281592500000&format=webp&quality=85"></img>
            <p>Blossom Blast Saga</p>
        </div>    
        </div>
    <div class="Img2">
        <img class="img2" src="https://www.king.com/media/apcgaqk0/games-right-image.webp?width=400&v=133776268935330000&format=webp&quality=85"></img>
        
    </div>
    </div>

    </div>

);
}
export default Game;