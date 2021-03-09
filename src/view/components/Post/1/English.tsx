import React, { useEffect, useRef, useState } from 'react';
import { IPostContentProps } from '../../../../model/Post';
import PostTemplate, { getImageSrc } from '../PostTemplate/PostTemplate';
import Cross from '../PostTemplate/TemplateComponents/Cross';
import './PostPage.scss';

const English : React.FC<IPostContentProps> = props => {
    const postId = 1;
    const tldr = <>
                    <Cross/><span>Create / Have a Facebook developer account</span>
                    <div className={`p-separator`}></div>
                    <Cross/><span>Create a Facebook registered App</span>
                    <div className={`p-separator`}></div>
                    <Cross/><span>Add oEmbed product to your app</span>
                    <div className={`p-separator`}></div>
                    <Cross/><span>Get the App ID and the Client token to create your Client Access token = &#123;app-id&#125;|&#123;client-token&#125;</span>
                    <div className={`p-separator`}></div>
                    <Cross/><span>Write the curl command and send it to Facebook</span>
                    <div className={`p-separator`}></div>
                    <Cross/><span>Use the response from Facebook</span>
                </>;

    const url = 'https://www.instagram.com/p/CKMKlIzs5CG/';
    const [postHtml, setPostHtml] = useState<string | null>(null);
    const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);
    useEffect(() => {
        fetch(`https://graph.facebook.com/v9.0/instagram_oembed?url=${url}&access_token=857325501713225|f2b27b7ab1af66fad966fe773ffcaaf3&omitscript=true`)
            .then(resp => {
                if(resp.ok){
                    return resp.json();
                }
                throw new Error(resp.statusText);
            })
            .then(json => {
                setThumbnailUrl(json["thumbnail_url"]);
                setPostHtml(json["html"]);
                setTimeout(() => {
                    (window as any).instgrm.Embeds.process()
                }, 50);
            })
    }, []);

    return (
        <PostTemplate postId={postId}
                    title={props.title} 
                    titleTopLayerRef={props.titleTopLayerRef} 
                    titleBottomLayerRef={props.titleBottomLayerRef} 
                    postIdClassName={`one`}
                    tldr={tldr}
                    relatedPosts={[]}>
            <p>This step-by-step guide is for websites and applications without a backend server. If your app relies on a backend server, the process will differ from step 4, you will need to use an App Access Token instead of a Client Access Token when accessing the oEmbed endpoint.</p>
            
            <div className={`section-separator`}></div>
            
            <h2 className={`step-title`}>1. Create / Have a Facebook developer account</h2>
            <p className={`italic`}>Where ? <a href='https://www.facebook.com/' target='_blank'>facebook.com</a></p>
            <Cross/><span>If you want to create a separate Facebook account from your personal account, log out from your personal account and <b>create a new Facebook account</b> from scratch. Confirm your email and log in into your new account.</span>
            <div className={`p-separator`}></div>
            <Cross/><span>To make it a developer account, <b>go to <a href='http://www.facebook.com/developers/become_test_account.php' target='_blank'>http://www.facebook.com/developers/become_test_account.php</a></b> and click on the “Make [<span className={`italic`}>your developer username</span>] a Test Account” button.</span>
            
            <div className={`section-separator`}></div>

            <h2 className={`step-title`}>2. Create a registered Facebook App</h2>
            <p className={`italic`}>Where ? <a href='https://developers.facebook.com' target='_blank'>developers.facebook.com</a></p>
            <Cross/><span>On Facebook for developers website, go to your <a href='https://developers.facebook.com/apps' target='_blank'>Apps panel</a>.</span>
            <img src={getImageSrc(postId, '1.jpg')}/>
            <Cross/><span>Click on “Create an app”.</span>
            <img src={getImageSrc(postId, '2.jpg')}/>
            <Cross/><span>Choose your app type, you will need to pick one that has oEmbed for Instagram in its list of Available products. You can read about <a href='https://developers.facebook.com/docs/development/create-an-app/app-dashboard/app-types' target='_blank'>app types here</a>. For example, for this blog I chose “Build connected experiences”.</span>
            <img src={getImageSrc(postId, '3.jpg')} className={`width-50`}/>
            <Cross/><span>Fill in the app name and the email address.</span>
            <img src={getImageSrc(postId, '4.jpg')} className={`width-50`}/>
            <Cross/><span>The following security check doesn't seem to work on Chrome, so I hope you have another web browser.</span>
            
            <div className={`section-separator`}></div>

            <h2 className={`step-title`}>3. Add oEmbed product</h2>
            <p className={`italic`}>Where ? Still on <a href='https://developers.facebook.com' target='_blank'>developers.facebook.com</a></p>
            <Cross/><span>You now need to add oEmbed Product to your app. In order to do this, go to your app dashboard, scroll down to the section called “Add Products to Your App” and locate oEmbed. Click on the “Set up” button.</span>
            <img src={getImageSrc(postId, '5.jpg')}/>
            <Cross/><span>Confirm the acceptance of oEmbed. When you get back to your app dashboard, you should see oEmbed in “My Products” section.</span>
            <img src={getImageSrc(postId, '6.jpg')}/>
            
            <div className={`section-separator`}></div>

            <h2 className={`step-title`}>4. Get the App ID and the Client token</h2>
            <p className={`italic`}>Where ? Still on <a href='https://developers.facebook.com' target='_blank'>developers.facebook.com</a></p>
            <p>The Instagram oEmbed endpoint requires either an App Access Token or a Client Access Token. As mentioned in the introduction, we deal here with applications without a backend server so we use the Client Access Token, which consists in the App ID and the Client token, separated by a pipe symbol.</p>
            <Cross/><span>On your app dashboard, the <b>App ID</b> is the 16-digit number located at the top of your screen, next to the app name.</span>
            <img src={getImageSrc(postId, '7.jpg')}/>
            <Cross/><span>To get your <b>client token</b>, go to <b>Settings &#62; Advanced &#62; Security &#62; Client token</b>.</span>
            <img src={getImageSrc(postId, '8.jpg')}/>
            <Cross/><span>Your Client Access Token is : <b className={`color-green`}>&#123;app-id&#125;|&#123;client-token&#125;</b>.
            <br></br>For example : access_token = 1234567891011121|1234a56b78cd91e0f1g2h3jik4l5m678</span>

            <div className={`section-separator`}></div>

            <h2 className={`step-title`}>5. Write the command curl</h2>
            <p className={`italic`}>Where ? In your code, you can also test from a terminal or a browser.</p>
            <Cross/><span>You need to send a request to: </span>
            <div className={`code-sample`}>GET /instagram_oembed?url=&#123;url&#125;&amp;access_token=&#123;access-token&#125;</div>
            <span>With <span className={`color-green`}>&#123;url&#125;</span> = URL of the Instagram post you want to query. For example : <a href='https://www.instagram.com/p/CKMKlIzs5CG/' target='_blank'>https://www.instagram.com/p/CKMKlIzs5CG/</a></span>
            <br></br>
            <span>And <span className={`color-green`}>&#123;access-token&#125;</span> = <span className={`color-green`}>&#123;app-id&#125;|&#123;client-token&#125;</span> as seen previously.</span>
            <p>Sample request:</p>
            <div className={`code-sample`}>curl -X GET \<br></br>
                <span className={`color-fluo-green`}>"https://graph.facebook.com/v9.0/instagram_oembed?url=https://www.instagram.com/p/CKMKlIzs5CG/&amp;access_token=1234567891011121|1234a56b78cd91e0f1g2h3jik4l5m678"</span></div>
            <p>If you are testing from a browser, copy paste the part in green, without the double quotes, in your browser's URL bar.</p>
            <p>You should get a response which looks like this: </p>
            <div className={`code-sample`}>
                &#123;<br></br>
                <span className={`nbsp`}/><span className={`color-fluo-green`}>"version"</span>: <span className={`color-fluo-green`}>"1.0"</span>,<br></br>
                <span className={`nbsp`}/><span className={`color-fluo-green`}>"author_name"</span>: <span className={`color-fluo-green`}>"thisismakiworld"</span>,<br></br>
                <span className={`nbsp`}/><span className={`color-fluo-green`}>"provider_name"</span>: <span className={`color-fluo-green`}>"Instagram"</span>,<br></br>
                <span className={`nbsp`}/><span className={`color-fluo-green`}>"provider_url"</span>: <span className={`color-fluo-green`}>"https://www.instagram.com/"</span>,<br></br>
                <span className={`nbsp`}/><span className={`color-fluo-green`}>"type"</span>: <span className={`color-fluo-green`}>"rich"</span>,<br></br>
                <span className={`nbsp`}/><span className={`color-fluo-green`}>"width"</span>: <span className={`color-fluo-blue`}>658</span>,<br></br>
                <span className={`nbsp`}/><span className={`color-fluo-green`}>"html"</span>: <span className={`color-fluo-green`}>"&lt;blockquote class=\'instagram-media\" data-instgrm-ca...'</span>,<br></br>
                <span className={`nbsp`}/><span className={`color-fluo-green`}>"thumbnail_url"</span>: <span className={`color-fluo-green`}>"https://scontent.cdninstagram.com/v/t51.2885-15/..."</span>,<br></br>
                <span className={`nbsp`}/><span className={`color-fluo-green`}>"thumbnail_width"</span>: <span className={`color-fluo-blue`}>640</span>,<br></br>
                <span className={`nbsp`}/><span className={`color-fluo-green`}>"thumbnail_height"</span>: <span className={`color-fluo-blue`}>640</span><br></br>
                &#125;
            </div>
            <div className={`section-separator`}></div>

            <h2 className={`step-title`}>6. Use the response from Facebook</h2>
            <p className={`italic`}>Where ? In your code.</p>
            <p>The response includes an embed HTML in the property <b>"html"</b>, which contains a reference to the Instagram embed.js JavaScript library. You might need to separately load this library before initializing the embed HTML (if you are using the field innerHtml for example as it blocks any script to be loaded). To do this, add the script in your index.html, include <span className={`color-green`}>omitscript=true</span> in your request, then call the <span className={`color-green`}>instgrm.Embeds.process()</span> function after loading the library.</p>
            <p>If you copy paste the <b>embed HTML</b> sent by Facebook into your code, you will get:</p>
            <div className="content" dangerouslySetInnerHTML={{__html: postHtml!}}></div>
            <p>If you just need the picture in relatively low quality, <b>'thumbnail_url'</b> gives you the link to the photo. Set it in the src of an image and you will get this:</p>
            <img src={thumbnailUrl!}/>

            <p>For more information, check the <a href='https://developers.facebook.com/docs/instagram/oembed/' target='_blank'>official documentation of Instagram oEmbed</a>.</p>
        </PostTemplate>
    );
}

export default English;