import React, { Fragment } from "react";

/* Pages Views */
import { Slider } from "./components/slider";
import { Content } from "./components/content";

/* Styles */
import './home.scss'

export function Home() {
  const slides = [{
      img:"https://65e50a04-a-62cb3a1a-s-sites.googlegroups.com/site/iealfredorebazaacosta/home/IMG_0099.jpg?attachauth=ANoY7crZJbibQD7qi2QJjb88uwqrNt3CS2Bs7MHj-dgVkMUmmipz-7Kk1wnJxiok6ODXy1JjFDGx87toB-dEtNHJh-5yaStiZhStRj_Y5lSNqkPLfO_FcBEYUsWCAbOMcb97nJHjDlV13qy8sPI8AxrsdvWGtu5HsL0RhdZV_Jrjo0vStI8F_86V2Oa_p_GtRnsmj6FrUWmC2yXnuGzWdVGdvtVqy9P9YXkhCCymtjsEEJyLwZfTMhw%3D&attredirects=0",
      title: "Hello World 01",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      img:"http://iealfredorebazaacosta.edu.pe/wp-content/uploads/2021/04/ara-2.jpeg",
      title: "Hello World 02",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      img:"http://iealfredorebazaacosta.edu.pe/wp-content/uploads/2021/04/IMG_20190524_114645-1024x768.jpg",
      title: "Hello World 03",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      img:"https://scontent.flim30-1.fna.fbcdn.net/v/t1.18169-9/1374047_749851625052474_5910419035944427687_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeGMsyoqQEwEsl4k313FjkMEpqcJj_jfcRWmpwmP-N9xFXi6iL8-jCQVUb-wemmaqaR7VteQBEwErRhaaUOUNlgp&_nc_ohc=gW3HQ2Fy3r4AX-M0ik_&_nc_ht=scontent.flim30-1.fna&oh=00_AT_tsIUYcSbFkQ98jkqoz8PQDeo1hOGYdJuKVsWMcqcaDw&oe=633C1961",
      title: "Hello World 04",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      img:"https://scontent.flim30-1.fna.fbcdn.net/v/t39.30808-6/244609472_288500029773403_5195476848717152864_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeE07bwFI6tBCatupE0_svMwWisgmpEiAFhaKyCakSIAWBl8LGkmfLD1vJNh7qUJkXhizB-_UK6IwJ3sPAdUVeGW&_nc_ohc=5MgYIceCBBgAX_91Qkx&tn=9Wtw7J-zsvVU5_Zt&_nc_ht=scontent.flim30-1.fna&oh=00_AT-W6di-EIov4zavU8-mt3URPRqR-j0eOtdh50KDHAfKUw&oe=631AD0BC",
      title: "Hello World 05",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];

  return (
    <Fragment>
      <div className="index">
        <section className="home-s1">
          <div className="header-sep"></div>
          <Slider 
            slides={slides}
            interval={8000}
            controls={true} 
            indicators={true}
          />
        </section>
        <section className="home-s2">
          <Content />
        </section>
      </div>
    </Fragment>
  );
}