import React from 'react';
import Text from '../../../../model/Text';
import Compliment from './model/Compliment';

export const emptyCompliment = new Compliment('', '');

const compliment1Text = <p>
    I'll take you to the <span className={`font-family-dawning`}>future</span><br></br>
    Forget about the past<br></br>
    You can keep all of your secrets<br></br>
    <span className={`font-family-dawning`}>I swear</span> that I won't ask<br></br>
    Let go of all your troubles<br></br>
    I don't care where you've been<br></br>
    The only thing that matters now<br></br>
    Is where the night will end<br></br>
    Them bright big lights are shining on us<br></br>
    That beat so tight it makes you wanna<br></br>
    Get up, get down like <span className={`font-family-dawning`}>there's no tomorrow</span><br></br>
    Like there's no tomorrow
</p>


export const compliment1 = new Compliment('Tu es génial / géniale', compliment1Text);
export const compliment2 = new Compliment('Tu es radieux / radieuse', compliment1Text);
export const compliment3 = new Compliment('Tu es incroyable', compliment1Text);
export const compliment4 = new Compliment('Tu es courageux / courageuse', compliment1Text);
export const compliment5 = new Compliment('Tu es unique', compliment1Text);
export const compliment6 = new Compliment('Tu en vaux la peine', compliment1Text);
export const compliment7 = new Compliment('Tu es une bonne personne', compliment1Text);
export const compliment8 = new Compliment('Tu le mérites', compliment1Text);