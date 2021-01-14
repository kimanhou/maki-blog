import React from 'react';
import './Instagram.scss';

interface IInstagramProps {

}

const Instagram : React.FC<IInstagramProps> = props => {
    return (
<svg className={`instagram`} viewBox="0 0 8.4666659 8.4666659" >
            <g>
            <path className={`maki-logo-path`} 
                style={{ fill: 'none',
                        strokeWidth: '3',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        strokeOpacity: 1,
                        strokeMiterlimit: 4,
                        // strokeDasharray: 'none' 
                    }}
                d="m 16.760369,31.186525 c 1.949643,0.01912 2.472219,0.187918 4.561371,-0.302107 3.740132,-1.906722 10.478979,-8.667378 14.942366,-7.532532 2.054693,0.684898 1.890967,5.30233 2.153909,7.14293 0.544881,3.993347 -0.0917,8.293031 -0.505542,12.088035 -0.243342,2.190088 -1.249702,6.945337 -1.560537,9.121183 C 29.908669,65.121841 32.749031,79.984163 20.879333,84.341519 11.783048,85.560204 16.5098,78.298373 20.055149,73.077667 25.163124,67.300241 31.197142,59.79646 35.006135,55.011485 42.918569,44.654256 51.364149,35.778381 58.852321,25.928867 c 5.185801,-8.136078 4.817542,4.012078 4.434206,7.862687 -1.513303,13.446842 -4.204012,27.752515 -6.023949,40.348896 7.317262,-21.169634 17.972234,-47.360129 33.397686,-62.876599 0.866303,-1.095703 3.86388,-1.082147 4.234739,0.743729 6.068697,28.302658 -9.742642,60.074734 -2.311642,81.949421 0.250659,0.651711 2.138212,5.80903 3.846193,4.670378 4.987386,-6.110871 3.226723,-13.997319 5.769286,-20.05515 1.6824,-11.471145 9.16792,-19.387955 17.5826,-20.055149 1.36611,-0.119213 2.50655,0 3.84619,0 -5.58739,-0.942025 -9.51587,1.569849 -12.04156,3.379564 -7.72593,3.462697 -14.4514,24.21693 -3.34321,20.796505 12.2612,-3.327115 11.26291,-15.701897 15.6595,-24.176069 0.0409,-0.08191 0.029,-0.361606 0,-0.27473 -0.81481,2.444443 -1.50045,5.156507 -1.92309,7.692387 -0.68005,4.08027 -0.9565,14.957407 3.84619,16.758412 5.08925,2.519167 10.34956,2.380933 15.11004,0.824185 12.11837,-15.695264 20.5764,-55.822923 17.30787,-59.066535 -2.49722,-0.977947 -8.31809,26.281763 -10.23384,38.070126 -0.96891,5.413507 -1.52577,14.86995 -3.22784,20.446952 -0.248,0 0.002,-0.830628 0.27473,-1.923095 0.9899,-3.959609 1.70992,-7.978127 3.84619,-11.53858 3.24532,-4.943527 10.2978,-10.264548 14.56059,-12.912219 2.14537,-1.311061 5.31048,-3.526142 7.96712,-2.197825 4.36599,7.713827 -8.4297,15.232209 -14.28586,17.582597 -1.54942,0.581033 -4.14867,0.422058 -5.76929,0.274727 -1.07525,-0.09775 -1.71111,-0.761442 -1.64837,-0.824182 0.90887,-0.908868 2.58582,-0.526804 3.84619,-0.27473 3.91333,0.782666 5.65843,3.718946 8.24184,6.044019 4.3079,3.904294 10.9298,7.546959 15.65951,7.14293 5.84286,3.927118 7.4648,-34.74018 9.34075,-29.395904 -1.7384,5.475977 -6.38369,25.341068 -2.19782,28.296992 7.91024,5.319255 14.32847,-0.876742 19.50569,-2.472553" />
            <path className={`maki-logo-cross-bar-1`}
                style={{ fill: 'none',
                        strokeWidth: '3',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        strokeOpacity: 1,
                        strokeMiterlimit: 4,
                        // strokeDasharray: 'none' 
                    }}
                d="m 181.26214,30.938993 17.15097,10.761388" />
            <path className={`maki-logo-cross-bar-2`}
                style={{ fill: 'none',
                strokeWidth: '3',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeOpacity: 1,
                strokeMiterlimit: 4,
                // strokeDasharray: 'none' 
            }}
                d="M 183.6162,40.018914 196.05905,26.567177" />
            </g>
        </svg>
    );
}

export default Instagram;