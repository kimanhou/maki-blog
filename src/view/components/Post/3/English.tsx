import React from 'react';
import { IPostContentProps } from '../../../../model/Post';
import PostTemplate from '../PostTemplate/PostTemplate';
import './PostPage.scss';

const English : React.FC<IPostContentProps> = props => {
    const tldr = <p>TLDR #3</p>;

    return (
        <PostTemplate title={props.title} 
                    titleTopLayerRef={props.titleTopLayerRef} 
                    titleBottomLayerRef={props.titleBottomLayerRef} 
                    postIdClassName={`three`}
                    tldr={tldr}>
            <p>This is post #3</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie lectus vitae accumsan volutpat. Mauris eleifend neque nulla, vel pellentesque metus mattis et. Sed pharetra lorem tortor, condimentum eleifend purus cursus in. Ut dignissim sollicitudin ornare. Sed nulla nulla, dapibus id cursus sit amet, blandit vitae ligula. Nunc condimentum ullamcorper odio id dapibus. Nulla venenatis erat arcu, vel eleifend enim tristique in. Etiam sollicitudin venenatis felis non sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent molestie cursus enim, ac rhoncus felis vulputate egestas. Integer eget semper sem.</p>
            <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis mi arcu, malesuada vitae arcu non, consequat tempus diam. Aenean at fermentum purus, sit amet ultrices lacus. Mauris sit amet vehicula diam. Quisque eget sem neque. Maecenas sed augue eros. Suspendisse facilisis tortor id sem posuere, nec molestie augue tincidunt. Suspendisse dignissim velit augue, ac aliquam turpis feugiat ac. Vivamus eget odio eu lacus dignissim condimentum. Etiam sit amet justo volutpat, cursus augue id, finibus magna. Nullam cursus sollicitudin ligula ac tempor.</p>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras nibh libero, vehicula ac suscipit at, consequat in nulla. Cras molestie pulvinar quam eget fermentum. Aenean quis feugiat orci. Ut nec dui sodales, suscipit orci eget, laoreet mauris. Sed eget est vitae magna tristique condimentum non vel tellus. Mauris tellus mauris, porttitor in tincidunt eget, tristique vel diam. Duis pellentesque a massa vitae pellentesque. Cras commodo sapien sit amet nulla venenatis porttitor. Donec consectetur faucibus facilisis. Nam sed facilisis augue. Etiam id pellentesque nunc, sed blandit magna. Aenean finibus varius erat vel fermentum.</p>
            <p>Fusce eget tincidunt justo, at feugiat massa. Aenean ac leo at felis ultrices pharetra et a nulla. Curabitur nec leo ut elit accumsan venenatis ac id quam. Duis at purus fringilla, facilisis turpis condimentum, fringilla nisi. Quisque placerat erat est, at euismod nunc mattis semper. Vivamus malesuada sodales magna, non vestibulum sapien finibus sed. Nulla aliquam tortor vitae nulla malesuada, dictum molestie magna venenatis. Nullam et diam ultricies, tincidunt lacus vitae, volutpat quam. Praesent est ipsum, dignissim et magna et, malesuada scelerisque lacus. Proin elementum mauris finibus dui vehicula tempus. Suspendisse est eros, cursus ac hendrerit et, varius at lectus. Aenean eget finibus nulla.</p>
            <p>Nulla condimentum aliquet justo, eget lobortis velit facilisis non. Morbi tempus nulla quis odio fermentum, convallis tempus nulla viverra. In non arcu feugiat, luctus mi eu, interdum tellus. Ut rutrum gravida nisi id condimentum. Duis pulvinar iaculis pharetra. Quisque iaculis pretium laoreet. Curabitur pretium ex sit amet leo cursus vestibulum. Mauris sit amet libero bibendum, fermentum erat non, sagittis purus. Praesent id sapien non nisl placerat blandit vitae a sem.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie lectus vitae accumsan volutpat. Mauris eleifend neque nulla, vel pellentesque metus mattis et. Sed pharetra lorem tortor, condimentum eleifend purus cursus in. Ut dignissim sollicitudin ornare. Sed nulla nulla, dapibus id cursus sit amet, blandit vitae ligula. Nunc condimentum ullamcorper odio id dapibus. Nulla venenatis erat arcu, vel eleifend enim tristique in. Etiam sollicitudin venenatis felis non sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent molestie cursus enim, ac rhoncus felis vulputate egestas. Integer eget semper sem.</p>
            <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis mi arcu, malesuada vitae arcu non, consequat tempus diam. Aenean at fermentum purus, sit amet ultrices lacus. Mauris sit amet vehicula diam. Quisque eget sem neque. Maecenas sed augue eros. Suspendisse facilisis tortor id sem posuere, nec molestie augue tincidunt. Suspendisse dignissim velit augue, ac aliquam turpis feugiat ac. Vivamus eget odio eu lacus dignissim condimentum. Etiam sit amet justo volutpat, cursus augue id, finibus magna. Nullam cursus sollicitudin ligula ac tempor.</p>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras nibh libero, vehicula ac suscipit at, consequat in nulla. Cras molestie pulvinar quam eget fermentum. Aenean quis feugiat orci. Ut nec dui sodales, suscipit orci eget, laoreet mauris. Sed eget est vitae magna tristique condimentum non vel tellus. Mauris tellus mauris, porttitor in tincidunt eget, tristique vel diam. Duis pellentesque a massa vitae pellentesque. Cras commodo sapien sit amet nulla venenatis porttitor. Donec consectetur faucibus facilisis. Nam sed facilisis augue. Etiam id pellentesque nunc, sed blandit magna. Aenean finibus varius erat vel fermentum.</p>
            <p>Fusce eget tincidunt justo, at feugiat massa. Aenean ac leo at felis ultrices pharetra et a nulla. Curabitur nec leo ut elit accumsan venenatis ac id quam. Duis at purus fringilla, facilisis turpis condimentum, fringilla nisi. Quisque placerat erat est, at euismod nunc mattis semper. Vivamus malesuada sodales magna, non vestibulum sapien finibus sed. Nulla aliquam tortor vitae nulla malesuada, dictum molestie magna venenatis. Nullam et diam ultricies, tincidunt lacus vitae, volutpat quam. Praesent est ipsum, dignissim et magna et, malesuada scelerisque lacus. Proin elementum mauris finibus dui vehicula tempus. Suspendisse est eros, cursus ac hendrerit et, varius at lectus. Aenean eget finibus nulla.</p>
            <p>Nulla condimentum aliquet justo, eget lobortis velit facilisis non. Morbi tempus nulla quis odio fermentum, convallis tempus nulla viverra. In non arcu feugiat, luctus mi eu, interdum tellus. Ut rutrum gravida nisi id condimentum. Duis pulvinar iaculis pharetra. Quisque iaculis pretium laoreet. Curabitur pretium ex sit amet leo cursus vestibulum. Mauris sit amet libero bibendum, fermentum erat non, sagittis purus. Praesent id sapien non nisl placerat blandit vitae a sem.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie lectus vitae accumsan volutpat. Mauris eleifend neque nulla, vel pellentesque metus mattis et. Sed pharetra lorem tortor, condimentum eleifend purus cursus in. Ut dignissim sollicitudin ornare. Sed nulla nulla, dapibus id cursus sit amet, blandit vitae ligula. Nunc condimentum ullamcorper odio id dapibus. Nulla venenatis erat arcu, vel eleifend enim tristique in. Etiam sollicitudin venenatis felis non sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent molestie cursus enim, ac rhoncus felis vulputate egestas. Integer eget semper sem.</p>
            <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis mi arcu, malesuada vitae arcu non, consequat tempus diam. Aenean at fermentum purus, sit amet ultrices lacus. Mauris sit amet vehicula diam. Quisque eget sem neque. Maecenas sed augue eros. Suspendisse facilisis tortor id sem posuere, nec molestie augue tincidunt. Suspendisse dignissim velit augue, ac aliquam turpis feugiat ac. Vivamus eget odio eu lacus dignissim condimentum. Etiam sit amet justo volutpat, cursus augue id, finibus magna. Nullam cursus sollicitudin ligula ac tempor.</p>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras nibh libero, vehicula ac suscipit at, consequat in nulla. Cras molestie pulvinar quam eget fermentum. Aenean quis feugiat orci. Ut nec dui sodales, suscipit orci eget, laoreet mauris. Sed eget est vitae magna tristique condimentum non vel tellus. Mauris tellus mauris, porttitor in tincidunt eget, tristique vel diam. Duis pellentesque a massa vitae pellentesque. Cras commodo sapien sit amet nulla venenatis porttitor. Donec consectetur faucibus facilisis. Nam sed facilisis augue. Etiam id pellentesque nunc, sed blandit magna. Aenean finibus varius erat vel fermentum.</p>
            <p>Fusce eget tincidunt justo, at feugiat massa. Aenean ac leo at felis ultrices pharetra et a nulla. Curabitur nec leo ut elit accumsan venenatis ac id quam. Duis at purus fringilla, facilisis turpis condimentum, fringilla nisi. Quisque placerat erat est, at euismod nunc mattis semper. Vivamus malesuada sodales magna, non vestibulum sapien finibus sed. Nulla aliquam tortor vitae nulla malesuada, dictum molestie magna venenatis. Nullam et diam ultricies, tincidunt lacus vitae, volutpat quam. Praesent est ipsum, dignissim et magna et, malesuada scelerisque lacus. Proin elementum mauris finibus dui vehicula tempus. Suspendisse est eros, cursus ac hendrerit et, varius at lectus. Aenean eget finibus nulla.</p>
            <p>Nulla condimentum aliquet justo, eget lobortis velit facilisis non. Morbi tempus nulla quis odio fermentum, convallis tempus nulla viverra. In non arcu feugiat, luctus mi eu, interdum tellus. Ut rutrum gravida nisi id condimentum. Duis pulvinar iaculis pharetra. Quisque iaculis pretium laoreet. Curabitur pretium ex sit amet leo cursus vestibulum. Mauris sit amet libero bibendum, fermentum erat non, sagittis purus. Praesent id sapien non nisl placerat blandit vitae a sem.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie lectus vitae accumsan volutpat. Mauris eleifend neque nulla, vel pellentesque metus mattis et. Sed pharetra lorem tortor, condimentum eleifend purus cursus in. Ut dignissim sollicitudin ornare. Sed nulla nulla, dapibus id cursus sit amet, blandit vitae ligula. Nunc condimentum ullamcorper odio id dapibus. Nulla venenatis erat arcu, vel eleifend enim tristique in. Etiam sollicitudin venenatis felis non sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent molestie cursus enim, ac rhoncus felis vulputate egestas. Integer eget semper sem.</p>
            <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis mi arcu, malesuada vitae arcu non, consequat tempus diam. Aenean at fermentum purus, sit amet ultrices lacus. Mauris sit amet vehicula diam. Quisque eget sem neque. Maecenas sed augue eros. Suspendisse facilisis tortor id sem posuere, nec molestie augue tincidunt. Suspendisse dignissim velit augue, ac aliquam turpis feugiat ac. Vivamus eget odio eu lacus dignissim condimentum. Etiam sit amet justo volutpat, cursus augue id, finibus magna. Nullam cursus sollicitudin ligula ac tempor.</p>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras nibh libero, vehicula ac suscipit at, consequat in nulla. Cras molestie pulvinar quam eget fermentum. Aenean quis feugiat orci. Ut nec dui sodales, suscipit orci eget, laoreet mauris. Sed eget est vitae magna tristique condimentum non vel tellus. Mauris tellus mauris, porttitor in tincidunt eget, tristique vel diam. Duis pellentesque a massa vitae pellentesque. Cras commodo sapien sit amet nulla venenatis porttitor. Donec consectetur faucibus facilisis. Nam sed facilisis augue. Etiam id pellentesque nunc, sed blandit magna. Aenean finibus varius erat vel fermentum.</p>
            <p>Fusce eget tincidunt justo, at feugiat massa. Aenean ac leo at felis ultrices pharetra et a nulla. Curabitur nec leo ut elit accumsan venenatis ac id quam. Duis at purus fringilla, facilisis turpis condimentum, fringilla nisi. Quisque placerat erat est, at euismod nunc mattis semper. Vivamus malesuada sodales magna, non vestibulum sapien finibus sed. Nulla aliquam tortor vitae nulla malesuada, dictum molestie magna venenatis. Nullam et diam ultricies, tincidunt lacus vitae, volutpat quam. Praesent est ipsum, dignissim et magna et, malesuada scelerisque lacus. Proin elementum mauris finibus dui vehicula tempus. Suspendisse est eros, cursus ac hendrerit et, varius at lectus. Aenean eget finibus nulla.</p>
            <p>Nulla condimentum aliquet justo, eget lobortis velit facilisis non. Morbi tempus nulla quis odio fermentum, convallis tempus nulla viverra. In non arcu feugiat, luctus mi eu, interdum tellus. Ut rutrum gravida nisi id condimentum. Duis pulvinar iaculis pharetra. Quisque iaculis pretium laoreet. Curabitur pretium ex sit amet leo cursus vestibulum. Mauris sit amet libero bibendum, fermentum erat non, sagittis purus. Praesent id sapien non nisl placerat blandit vitae a sem.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie lectus vitae accumsan volutpat. Mauris eleifend neque nulla, vel pellentesque metus mattis et. Sed pharetra lorem tortor, condimentum eleifend purus cursus in. Ut dignissim sollicitudin ornare. Sed nulla nulla, dapibus id cursus sit amet, blandit vitae ligula. Nunc condimentum ullamcorper odio id dapibus. Nulla venenatis erat arcu, vel eleifend enim tristique in. Etiam sollicitudin venenatis felis non sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent molestie cursus enim, ac rhoncus felis vulputate egestas. Integer eget semper sem.</p>
            <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis mi arcu, malesuada vitae arcu non, consequat tempus diam. Aenean at fermentum purus, sit amet ultrices lacus. Mauris sit amet vehicula diam. Quisque eget sem neque. Maecenas sed augue eros. Suspendisse facilisis tortor id sem posuere, nec molestie augue tincidunt. Suspendisse dignissim velit augue, ac aliquam turpis feugiat ac. Vivamus eget odio eu lacus dignissim condimentum. Etiam sit amet justo volutpat, cursus augue id, finibus magna. Nullam cursus sollicitudin ligula ac tempor.</p>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras nibh libero, vehicula ac suscipit at, consequat in nulla. Cras molestie pulvinar quam eget fermentum. Aenean quis feugiat orci. Ut nec dui sodales, suscipit orci eget, laoreet mauris. Sed eget est vitae magna tristique condimentum non vel tellus. Mauris tellus mauris, porttitor in tincidunt eget, tristique vel diam. Duis pellentesque a massa vitae pellentesque. Cras commodo sapien sit amet nulla venenatis porttitor. Donec consectetur faucibus facilisis. Nam sed facilisis augue. Etiam id pellentesque nunc, sed blandit magna. Aenean finibus varius erat vel fermentum.</p>
            <p>Fusce eget tincidunt justo, at feugiat massa. Aenean ac leo at felis ultrices pharetra et a nulla. Curabitur nec leo ut elit accumsan venenatis ac id quam. Duis at purus fringilla, facilisis turpis condimentum, fringilla nisi. Quisque placerat erat est, at euismod nunc mattis semper. Vivamus malesuada sodales magna, non vestibulum sapien finibus sed. Nulla aliquam tortor vitae nulla malesuada, dictum molestie magna venenatis. Nullam et diam ultricies, tincidunt lacus vitae, volutpat quam. Praesent est ipsum, dignissim et magna et, malesuada scelerisque lacus. Proin elementum mauris finibus dui vehicula tempus. Suspendisse est eros, cursus ac hendrerit et, varius at lectus. Aenean eget finibus nulla.</p>
            <p>Nulla condimentum aliquet justo, eget lobortis velit facilisis non. Morbi tempus nulla quis odio fermentum, convallis tempus nulla viverra. In non arcu feugiat, luctus mi eu, interdum tellus. Ut rutrum gravida nisi id condimentum. Duis pulvinar iaculis pharetra. Quisque iaculis pretium laoreet. Curabitur pretium ex sit amet leo cursus vestibulum. Mauris sit amet libero bibendum, fermentum erat non, sagittis purus. Praesent id sapien non nisl placerat blandit vitae a sem.</p>        
        </PostTemplate>
    );
}

export default English;