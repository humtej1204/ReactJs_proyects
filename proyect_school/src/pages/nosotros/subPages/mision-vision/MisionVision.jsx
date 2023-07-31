import React from "react";


/* Styles */
import './MisionVision.scss';

/* Images */
import bannerImg from '../../../../assets/imgs/nosotros/school001.png';

export function MisionVision() {
    return (
        <main id="misionVision">
            <section id="presentation_banner"
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url(${bannerImg})` }}>
                <h1>METAS Y OBJETIVOS</h1>
                <p>
                    Integer augue eros, rutrum at nisi vel, tempor faucibus urna. Aliquam sed tortor nec lacus ultricies condimentum eget in justo. Nullam sodales id metus vitae sollicitudin. Ut ullamcorper tincidunt malesuada.
                </p>
            </section>

            <section className="values_sect">
                <h1>Nuestros Valores</h1>
                <div className="values_container">
                    {values.map((elem, index) => (
                        <div key={'value_' + index} className="value_container">
                            <div className="value_icon">
                                <i className={`fi fi-rr-${elem.icon}`}></i>
                            </div>
                            <h2 className="value_text">{elem.value}</h2>
                        </div>
                    ))}
                </div>
            </section>

            <article className="objectives_sect">
                <header>
                    <h1>Mision y Vision</h1>
                    <b>La Esencia de Nuestra Institución</b>
                </header>

                <p>
                    Maecenas sit amet finibus justo. Etiam interdum, turpis a mollis condimentum, nunc libero vehicula dui, in mollis dui justo id velit. Sed eget rhoncus mi. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                </p>

                <div className="objective_cardContainer">
                    <div className="objective_card">
                        <div className="objective_logo mision_icon">
                            <i className="fi fi-rs-bullseye-arrow"></i>
                        </div>
                        <div className="objective_content mision_content">
                            <h1>MISIÓN</h1>
                            <p>
                                Maecenas sit amet finibus justo. Etiam interdum, turpis a mollis condimentum, nunc libero vehicula dui, in mollis dui justo id velit. Sed eget rhoncus mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. In pretium sapien eu sapien posuere dapibus. Nam blandit auctor urna, ac dapibus sapien lobortis a. Nunc vulputate leo et nisl tristique aliquet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                            </p>
                        </div>
                    </div>
                    <div className="objective_card">
                        <div className="objective_logo vision_icon">
                            <i className="fi fi-rs-eye"></i>
                        </div>
                        <div className="objective_content vision_content">
                            <h1>VISIÓN</h1>
                            <p>
                                Duis in orci viverra, mattis nulla at, tempus dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sed velit faucibus, facilisis urna id, pellentesque ipsum. Etiam ut pellentesque velit. Vestibulum varius varius justo, ac vulputate dolor viverra nec. In hac habitasse platea dictumst. In urna eros, auctor eu nisl nec, facilisis bibendum nulla. Praesent at consequat lorem, in porttitor lorem.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg_section">
                    <svg className="bg_left" width="100%" height="auto" viewBox="0 0 1224 1206" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1054.65 246.81L1223.73 399.278L1000.79 451.371L1054.65 246.81Z" fill="#F69834"></path>
                        <path d="M1223.82 182.507L1223.72 399.289L1054.65 246.812L1223.82 182.507Z" fill="#EF8438"></path>
                        <path d="M128.817 630.808L0.832031 711.26L46.3202 737.832L173.161 664.048L128.817 630.808Z" fill="#F79D43"></path>
                        <path d="M179.734 598.791L128.796 630.825L173.152 664.077L179.734 598.791Z" fill="#FAA546"></path>
                        <path d="M184.263 818.45L173.148 664.048L46.29 737.834L184.263 818.45Z" fill="#EF8438"></path>
                        <path d="M268.316 543.104L179.713 598.807L173.144 664.06L352.883 625.807L268.316 543.104Z" fill="#F89F3F"></path>
                        <path d="M268.307 543.1L316.592 512.754L374.238 522.991L352.878 625.816L268.307 543.1Z" fill="#FAA91F"></path>
                        <path d="M173.145 664.041L352.879 625.795L217.584 837.917L184.242 818.44L173.145 664.041Z" fill="#F47917"></path>
                        <path d="M456.471 748.542L352.859 625.804L217.56 837.884L244.426 853.603L456.471 748.542Z" fill="#F68015"></path>
                        <path d="M561.249 556.193L374.232 522.983L352.863 625.816L667.915 670.159L561.249 556.193Z" fill="#FFAE04"></path>
                        <path d="M665.614 574.716L561.246 556.194L667.92 670.168L665.614 574.716Z" fill="#FFD001"></path>
                        <path d="M456.452 748.545L667.913 670.159L352.852 625.806L456.452 748.545Z" fill="#FFB801"></path>
                        <path d="M623.556 832.28L667.92 670.151L456.439 748.544L623.556 832.28Z" fill="#FFD002"></path>
                        <path d="M623.561 832.278L456.447 748.536L486.673 995.164L523.084 1016.43L623.561 832.278Z" fill="#FF7402"></path>
                        <path d="M358.41 920.214L456.448 748.536L486.678 995.162L358.41 920.214Z" fill="#F67710"></path>
                        <path d="M456.452 748.548L244.414 853.594L358.436 920.214L456.452 748.548Z" fill="#F07821"></path>
                        <path d="M703.473 581.453L665.572 574.717L667.92 670.164L763.121 631.924L862.534 411.304L781.117 402.575L703.473 581.453Z" fill="#FFD701"></path>
                        <path d="M866.736 864.789L763.13 631.916L667.924 670.16L866.736 864.789Z" fill="#FFD002"></path>
                        <path d="M623.561 832.275L866.741 864.784L684.726 1015.42L623.561 832.275Z" fill="#FF9201"></path>
                        <path d="M684.739 1015.43L623.569 832.267L523.066 1016.43L569.508 1043.55L684.739 1015.43Z" fill="#F58216"></path>
                        <path d="M871.719 1016.95L866.738 864.778L684.725 1015.42L871.719 1016.95Z" fill="#F97C0D"></path>
                        <path d="M728.988 1136.76L684.734 1015.43L651.887 1091.71L728.988 1136.76Z" fill="#EC6F24"></path>
                        <path d="M684.737 1015.42L569.473 1043.55L651.91 1091.71L684.737 1015.42Z" fill="#F07920"></path>
                        <path d="M950.364 1125.38L871.715 1016.93L782.578 1168.06L847.238 1205.84L950.364 1125.38Z" fill="#E8662B"></path>
                        <path d="M1072.71 1029.92L871.725 1016.95L950.361 1125.39L1072.71 1029.92Z" fill="#EB732D"></path>
                        <path d="M1077.13 1026.46L866.732 864.776L871.71 1016.96L1072.68 1029.93L1077.13 1026.46Z" fill="#F06B16"></path>
                        <path d="M1080.58 791.636L866.729 864.788L1077.14 1026.47L1092.55 1014.44L1223.59 807.009L1080.58 791.636Z" fill="#F3801D"></path>
                        <path d="M1223.48 912.19L1223.58 807.017L1092.53 1014.44L1223.48 912.19Z" fill="#E3622A"></path>
                        <path d="M1223.57 807.013L1223.64 637.252L1080.55 791.644L1223.57 807.013Z" fill="#EB6B21"></path>
                        <path d="M1080.59 791.64L1018.57 603.966L866.736 864.788L1080.59 791.64Z" fill="#FF8701"></path>
                        <path d="M1018.6 603.979L763.131 631.915L866.732 864.789L1018.6 603.979Z" fill="#FFDE02"></path>
                        <path d="M1018.62 603.991L862.501 411.319L763.123 631.92L1018.62 603.991Z" fill="#FFEA02"></path>
                        <path d="M862.523 411.33L851.063 271.361L833.325 282.286L781.105 402.587L862.523 411.33Z" fill="#FFB002"></path>
                        <path d="M1000.79 451.366L851.057 271.363L862.499 411.342L1018.59 604.017L1000.79 451.366Z" fill="#FFC002"></path>
                        <path d="M1000.8 451.387L1054.66 246.806L851.053 271.362L1000.8 451.387Z" fill="#F99E20"></path>
                        <path d="M851.071 271.366L833.303 282.301L846.992 250.771L851.071 271.366Z" fill="#FF9A24"></path>
                        <path d="M846.984 250.794L872.035 193.055L929.021 161.906L851.064 271.349L846.984 250.794Z" fill="#FFB000"></path>
                        <path d="M1049.59 96.0869L928.979 161.956L851.049 271.371L1054.67 246.819L1049.59 96.0869Z" fill="#F18935"></path>
                        <path d="M1110.39 62.8955L1049.58 96.0992L1054.66 246.819L1223.82 182.504V179.221L1110.39 62.8955Z" fill="#EA7532"></path>
                        <path d="M1223.83 0.945801L1110.36 62.913L1223.83 179.243V0.945801Z" fill="#EB7A34"></path>
                        <path d="M1223.64 637.274L1080.57 791.634L1018.54 603.979L1223.64 637.274Z" fill="#F78513"></path>
                        <path d="M1223.65 637.286L1018.53 604.004L1223.73 399.261L1223.65 637.286Z" fill="#F47917"></path>
                        <path d="M1223.73 399.267L1018.58 603.979L1000.79 451.371L1223.73 399.267Z" fill="#F88410"></path>
                        <path d="M667.923 670.126L866.739 864.789L623.555 832.284L667.923 670.126Z" fill="#FFC801"></path>
                        <path d="M782.611 1168.08L871.731 1016.94L684.725 1015.42L728.981 1136.74L782.611 1168.08Z" fill="#F17C22"></path>
                    </svg>
                    <svg className="bg_rigth" width="100%" height="auto" viewBox="0 0 1224 1206" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1054.65 246.81L1223.73 399.278L1000.79 451.371L1054.65 246.81Z" fill="#F69834"></path>
                        <path d="M1223.82 182.507L1223.72 399.289L1054.65 246.812L1223.82 182.507Z" fill="#EF8438"></path>
                        <path d="M128.817 630.808L0.832031 711.26L46.3202 737.832L173.161 664.048L128.817 630.808Z" fill="#F79D43"></path>
                        <path d="M179.734 598.791L128.796 630.825L173.152 664.077L179.734 598.791Z" fill="#FAA546"></path>
                        <path d="M184.263 818.45L173.148 664.048L46.29 737.834L184.263 818.45Z" fill="#EF8438"></path>
                        <path d="M268.316 543.104L179.713 598.807L173.144 664.06L352.883 625.807L268.316 543.104Z" fill="#F89F3F"></path>
                        <path d="M268.307 543.1L316.592 512.754L374.238 522.991L352.878 625.816L268.307 543.1Z" fill="#FAA91F"></path>
                        <path d="M173.145 664.041L352.879 625.795L217.584 837.917L184.242 818.44L173.145 664.041Z" fill="#F47917"></path>
                        <path d="M456.471 748.542L352.859 625.804L217.56 837.884L244.426 853.603L456.471 748.542Z" fill="#F68015"></path>
                        <path d="M561.249 556.193L374.232 522.983L352.863 625.816L667.915 670.159L561.249 556.193Z" fill="#FFAE04"></path>
                        <path d="M665.614 574.716L561.246 556.194L667.92 670.168L665.614 574.716Z" fill="#FFD001"></path>
                        <path d="M456.452 748.545L667.913 670.159L352.852 625.806L456.452 748.545Z" fill="#FFB801"></path>
                        <path d="M623.556 832.28L667.92 670.151L456.439 748.544L623.556 832.28Z" fill="#FFD002"></path>
                        <path d="M623.561 832.278L456.447 748.536L486.673 995.164L523.084 1016.43L623.561 832.278Z" fill="#FF7402"></path>
                        <path d="M358.41 920.214L456.448 748.536L486.678 995.162L358.41 920.214Z" fill="#F67710"></path>
                        <path d="M456.452 748.548L244.414 853.594L358.436 920.214L456.452 748.548Z" fill="#F07821"></path>
                        <path d="M703.473 581.453L665.572 574.717L667.92 670.164L763.121 631.924L862.534 411.304L781.117 402.575L703.473 581.453Z" fill="#FFD701"></path>
                        <path d="M866.736 864.789L763.13 631.916L667.924 670.16L866.736 864.789Z" fill="#FFD002"></path>
                        <path d="M623.561 832.275L866.741 864.784L684.726 1015.42L623.561 832.275Z" fill="#FF9201"></path>
                        <path d="M684.739 1015.43L623.569 832.267L523.066 1016.43L569.508 1043.55L684.739 1015.43Z" fill="#F58216"></path>
                        <path d="M871.719 1016.95L866.738 864.778L684.725 1015.42L871.719 1016.95Z" fill="#F97C0D"></path>
                        <path d="M728.988 1136.76L684.734 1015.43L651.887 1091.71L728.988 1136.76Z" fill="#EC6F24"></path>
                        <path d="M684.737 1015.42L569.473 1043.55L651.91 1091.71L684.737 1015.42Z" fill="#F07920"></path>
                        <path d="M950.364 1125.38L871.715 1016.93L782.578 1168.06L847.238 1205.84L950.364 1125.38Z" fill="#E8662B"></path>
                        <path d="M1072.71 1029.92L871.725 1016.95L950.361 1125.39L1072.71 1029.92Z" fill="#EB732D"></path>
                        <path d="M1077.13 1026.46L866.732 864.776L871.71 1016.96L1072.68 1029.93L1077.13 1026.46Z" fill="#F06B16"></path>
                        <path d="M1080.58 791.636L866.729 864.788L1077.14 1026.47L1092.55 1014.44L1223.59 807.009L1080.58 791.636Z" fill="#F3801D"></path>
                        <path d="M1223.48 912.19L1223.58 807.017L1092.53 1014.44L1223.48 912.19Z" fill="#E3622A"></path>
                        <path d="M1223.57 807.013L1223.64 637.252L1080.55 791.644L1223.57 807.013Z" fill="#EB6B21"></path>
                        <path d="M1080.59 791.64L1018.57 603.966L866.736 864.788L1080.59 791.64Z" fill="#FF8701"></path>
                        <path d="M1018.6 603.979L763.131 631.915L866.732 864.789L1018.6 603.979Z" fill="#FFDE02"></path>
                        <path d="M1018.62 603.991L862.501 411.319L763.123 631.92L1018.62 603.991Z" fill="#FFEA02"></path>
                        <path d="M862.523 411.33L851.063 271.361L833.325 282.286L781.105 402.587L862.523 411.33Z" fill="#FFB002"></path>
                        <path d="M1000.79 451.366L851.057 271.363L862.499 411.342L1018.59 604.017L1000.79 451.366Z" fill="#FFC002"></path>
                        <path d="M1000.8 451.387L1054.66 246.806L851.053 271.362L1000.8 451.387Z" fill="#F99E20"></path>
                        <path d="M851.071 271.366L833.303 282.301L846.992 250.771L851.071 271.366Z" fill="#FF9A24"></path>
                        <path d="M846.984 250.794L872.035 193.055L929.021 161.906L851.064 271.349L846.984 250.794Z" fill="#FFB000"></path>
                        <path d="M1049.59 96.0869L928.979 161.956L851.049 271.371L1054.67 246.819L1049.59 96.0869Z" fill="#F18935"></path>
                        <path d="M1110.39 62.8955L1049.58 96.0992L1054.66 246.819L1223.82 182.504V179.221L1110.39 62.8955Z" fill="#EA7532"></path>
                        <path d="M1223.83 0.945801L1110.36 62.913L1223.83 179.243V0.945801Z" fill="#EB7A34"></path>
                        <path d="M1223.64 637.274L1080.57 791.634L1018.54 603.979L1223.64 637.274Z" fill="#F78513"></path>
                        <path d="M1223.65 637.286L1018.53 604.004L1223.73 399.261L1223.65 637.286Z" fill="#F47917"></path>
                        <path d="M1223.73 399.267L1018.58 603.979L1000.79 451.371L1223.73 399.267Z" fill="#F88410"></path>
                        <path d="M667.923 670.126L866.739 864.789L623.555 832.284L667.923 670.126Z" fill="#FFC801"></path>
                        <path d="M782.611 1168.08L871.731 1016.94L684.725 1015.42L728.981 1136.74L782.611 1168.08Z" fill="#F17C22"></path>
                    </svg>
                </div>
            </article>
        </main>
    );
}

const values = [
    {value: 'Puntualidad', icon: 'alarm-clock'},
    {value: 'Disciplina', icon: 'book-open-reader'},
    {value: 'Estudio', icon: 'books'}
]