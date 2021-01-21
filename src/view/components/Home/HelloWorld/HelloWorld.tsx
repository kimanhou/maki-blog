import React from 'react';
import './HelloWorld.scss';

interface IHomeProps {}

const HelloWorld : React.FC<IHomeProps> = props => {
    const introPicture = require(`../../../../images/intro-bg.jpg`);
    return (
        <svg className={`hello-world animate`} viewBox="0 0 357.1069 91.178729" >
            <defs >
                <clipPath clipPathUnits="userSpaceOnUse" id="clip-path-2">
                    <path
                        // style="fill:none;stroke:#000000;stroke-width:0.264999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        
                        style={{ fill: 'none',
                        strokeWidth: '1px',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        strokeOpacity: 1,
                        strokeMiterlimit: 4 }}
                        d="m 239.04496,57.645305 c 0.97836,5.26795 10.69831,-0.46641 12.05769,-8.921715 v 0 c -0.62805,7.106909 1.47862,12.515688 9.20035,7.557428 21.67288,-17.107379 65.74018,0.141669 96.6714,0.492874 m -117.92944,0.871413 c -0.12987,1.278284 -7.44098,5.357733 -11.65504,-0.665943 v 0 c -11.53925,6.305698 -7.8326,-2.280443 -7.14424,-8.912939 l -7.25874,1.314336 v 0 c -3.47914,3.64953 -6.88033,5.132311 -12.41864,6.09581 v 0 c -7.9027,9.995717 -15.41165,-2.06333 -2.62841,-8.560184 -5.24941,2.091648 -8.72191,9.462841 -12.48618,2.79296 -1.26744,13.712899 -5.57892,11.32005 -5.58592,-1.642917 -5.26332,17.648949 -10.13417,13.681485 -7.88601,-3.450129 -9.66733,3.876772 -21.34094,10.245293 -34.66558,11.007558 v 0 c -0.8141,1.047869 -1.95441,1.794684 -3.12155,2.464345 -2.9219,1.681916 -5.19593,1.960131 -6.26302,-0.376706 -7.9e-4,-0.0087 0,0 0,0 v 0 c -2.59148,2.65866 -11.06289,4.907775 -11.4805,-3.349342 v 0 c -2.39509,9.482953 -11.32318,7.458276 -12.97906,-0.709832 0.0136,-0.09131 0.0131,-0.185571 0.0408,-0.27296 l -0.0408,0.27296 c -5.615305,6.446343 -13.030793,8.115856 -15.936315,3.778713 -0.709514,-0.70095 -0.821449,-2.464379 -0.821449,-2.464379 v 0 c 0,0 -2.235499,2.201793 -4.600181,3.61442 -1.588148,0.680974 -3.176299,0.692499 -4.76446,-0.328584 -3.066418,-1.841516 0.643961,-7.891052 -1.613019,-10.041734 -4.996141,-1.900634 -7.566139,5.578319 -10.215989,10.863194 l 2.656848,-12.524335 v 0 c 0,0 -6.030068,14.593136 -17.93599,14.495838 -17.77696,-0.356529 -34.943079,-2.036548 -50.109019,-8.0503 L 0,423.03253 H 356.97401 V 56.773892"
                        />
                </clipPath>
            </defs>
            <g transform="translate(14.918766,-20.279011)">
                <path className={`hello-world-path`}
                    style={{ fill: 'none',
                        strokeWidth: '1px',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        strokeOpacity: 1,
                        strokeMiterlimit: 4 }}
                    d="m -14.786266,73.274165 c 15.16593488,6.013751 32.332054,7.693771 50.109014,8.0503 11.905919,0.0973 12.309513,-8.951344 17.935997,-14.495836 1.753796,-1.896911 3.419819,-2.261256 5.393445,-6.369229 0.868738,-2.464378 1.614184,-4.928755 1.150043,-7.393133 -0.606803,-2.102793 -1.249534,-3.93613 -2.464377,-1.478627 -1.197629,2.521534 -1.876265,5.216067 -2.62867,7.886009 L 50.60189,79.352962 c 2.649854,-5.284875 5.21985,-12.763827 10.215992,-10.863193 2.256978,2.150681 -1.453402,8.200218 1.613021,10.041733 1.588154,1.021082 3.176309,1.009561 4.764463,0.328586 2.36468,-1.41263 3.435017,-2.501674 4.600173,-3.614423 2.624138,-2.029891 5.200689,-4.097852 7.064549,-6.735966 1.760368,-2.901202 1.952801,-5.696561 -2.62867,-3.450127 -2.898487,2.447014 -3.830143,4.771101 -4.271589,7.06455 -0.174068,2.004928 -0.779421,4.166688 0.657167,5.585923 2.905511,4.337143 10.321002,2.667629 15.936309,-3.778713 17.260365,-22.083567 5.327523,-35.928693 0,0 1.655878,8.168108 10.583967,10.192784 12.979055,0.709832 14.74137,-22.126766 7.28132,-39.201942 0,0 0.41761,8.257116 8.88902,6.008003 11.4805,3.349343 -0.57619,-5.193237 1.36864,-9.151429 6.26302,-10.630848 -5.07214,1.63687 -6.76117,5.435179 -6.26302,10.630848 1.06709,2.336836 3.34112,2.05862 6.26302,0.376705 3.94349,-2.16984 5.19025,-5.329168 6.40738,-8.543176 0.96047,-2.69648 0.16551,-4.194988 -2.30008,-3.943004 -3.15298,0.462427 -3.76135,10.214778 -0.98575,10.021803 13.32464,-0.762262 24.99825,-7.130784 34.66558,-11.007556 -2.24816,17.131611 2.62269,21.09908 7.88601,3.45013 0.007,12.962966 4.31848,15.355814 5.58592,1.642917 3.76427,6.669881 7.23677,-0.701314 12.48618,-2.79296 -12.78324,6.496852 -5.27429,18.5559 2.62841,8.560181 0.43329,-0.548036 -0.43345,0.722587 2.6e-4,-0.01701 12.37674,-12.108482 -7.3621,-14.751852 -2.6e-4,0.01701 5.53831,-0.963498 8.9395,-2.446277 12.41864,-6.095809 5.16145,-7.01089 -5.52806,-1.545791 0,0 l 7.25874,-1.314334 c -0.68836,6.632494 -4.39501,15.218637 7.14424,8.91294 11.89379,-8.783498 8.38858,-55.178352 0,0 4.21406,6.023674 11.52517,1.944227 11.65504,0.66594 0.55765,-7.307026 4.86775,-13.349515 12.05769,-8.921713 -7.39809,-4.476946 -11.21353,2.740006 -12.05769,8.921713 0.97836,5.267951 10.69831,-0.466409 12.05769,-8.921713 1.95911,-1.680175 3.01976,-3.540041 3.63195,-5.489599 0.82464,-2.626116 0.40704,-5.95059 0.70403,-8.682234 -5.3316,8.417433 -8.20357,30.12042 4.86437,21.729259 21.67288,-17.107378 65.74018,0.141669 96.6714,0.492873"
                />
            </g>
            <g>
            <image
                width="357.23901"
                height="356.28894"
                preserveAspectRatio="none"
                href={introPicture}
                id="image8653"
                x="0.132496"
                y="44.528481"
                clip-path="url(#clip-path-2)" />
            </g>
        </svg>
    );
}

export default HelloWorld;