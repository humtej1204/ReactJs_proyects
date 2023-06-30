// import React from "react";
import parse from 'html-react-parser';

/* Styles */
import './HtmlParser.scss'

export function HtmlParser({htmlData}) {
    return (
        <section id='html_parser'>
            {parse(htmlTest)}
        </section>
    )
}

const htmlTest = `
<p>
Aunque la idea de una manada de perros planteaba un reto interesante desde el punto de vista del diseño y la ingeniería, a la directora artística Gem “Lonewingy” Lim le entusiasmó la oportunidad de trabajar en otro campeón tipo criatura después de crear tantos humanos guapos: Qiyana, Zeri, Sett, el rediseño de Kayle y el rediseño de Evelynn, por mencionar algunos.
</p>

<img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltee2022e6fa2a6352/648b8bf5359ef0588f60e207/06222023_Champion_Insights_NaafiriArticle_Naafiri_Progress_Gif.gif" />
<hr />
<span>DIFERENTES EXPLORACIONES PERRUNAS PARA NAAFIRI</span>

<h2>Una sola mente esparcida en varios cuerpos</h2>
<p>A medida que las huellas (¿patas?) de Naafiri se multiplicaban dentro del juego, Riot Twin Enso y el director de diseño del juego, Stephen “Riot Raptorr” Auker, necesitaban asegurarse de que seguía cumpliendo con su planteamiento inicial de asesina sencilla y fácil de aprender. El conjunto de Naafiri tenía que ser poderoso pero accesible. Y debía depender mucho de los integrantes de su jauría para que la ayuden a conseguir asesinatos. Es por eso que sus otros perritos necesitaban una nueva IA inteligente.</p>

<h2>El aullido de los perros</h2>
<p>Ahora nuestra perrita Darkin tenía un trasfondo, un gancho de jugabilidad, una nueva tecnología para su manada y un aspecto genial, pero aún quedaba la pregunta: ¿Cómo suena una manada de perros demoníacos?</p>

<p>“Ay, pues. Naafiri fue una campeona complicada de descifrar”, ríe el productor de doblaje Nick “ProfRincewind” Lanza. “Desde el principio, el hecho de ser varios perros requería varias voces. Desde el punto de vista del doblaje es un enfoque realmente único. Sabíamos que queríamos crear un sonido crudo y animalesco sin depender demasiado de efectos o filtros digitales. Esto significaba crear el efecto a la antigua, dejando que los actores grabaran varias capas de la misma línea con diferentes tonos vocales e interpretaciones de la voz directamente en el estudio. Un gran aplauso para nuestro diseñador de doblaje, Austin “Riot Puma Pet” Mullen, por ser a quien se le ocurrió esta idea en primer lugar”.</p>

<table>
<tr>
  <th>Company</th>
  <th>Contact</th>
  <th>Country</th>
</tr>
<tr>
  <td>asd</td>
  <td>asd</td>
  <td>asd</td>
</tr>
<tr>
  <td>asd</td>
  <td>asd</td>
  <td>asd</td>
</tr>
</table>

<p>Al explorar la estética auditiva de la voz de un campeón, Riot Puma Pet se fija en dos elementos principales del diseño: lo físico y lo emocional. No solo él y el equipo de doblaje tuvieron que capturar las muchas voces de perro de Naafiri (lo físico), sino también el espíritu Darkin interno que ayudó a dar a la manada su conciencia colectiva (lo emocional). Naafiri alberga multitudes.</p>

<h2>La creación del Pogchamp de los Perros</h2>
<iframe
src="https://www.youtube.com/embed/cXlbO3iSBw4"
title="SABUESOS DE HIERRO | Cinemática de Naafiri - League of Legends"
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
allowfullscreen></iframe>

<p>“Sinceramente siento que Naafiri no es quien es sin su actriz, Morla Gorrondona”, afirma Riot Puma Pet. “Pasó mucho tiempo con nosotros probando distintas voces e ideas de actuación. Las sesiones con ella fueron auténticos parques de diversiones de sonidos y exploraciones monstruosas”.</p>

<p>Y si tienes buen oído, podrás escuchar mucho más que simples sonidos de monstruos en el doblaje de Naafiri. Cada línea de voz fue cuidadosamente construida con una interpretación más humana que transmite el sentido de liderazgo de Naafiri entre la manada.</p>

<h3>Caracteristicas</h3>
<ul>
 <li>punto uno</li>
 <li>punto dos</li>
 <li>punto tres</li>
</ul>

<h3>Poderes</h3>
<ol>
 <li>punto uno</li>
 <li>punto dos</li>
 <li>punto tres</li>
</ol>`