import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { LupaIcon } from './LupaIcon.js';
import classes from './MainPage.module.css';
import { PerfilIcon } from './PerfilIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 1:2 */
export const MainPage: FC<Props> = memo(function MainPage(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.cookies_bg}></div>
      <div className={classes.backgroundBlur}></div>
      <div className={classes.linha}>
        <div className={classes.itemDaLinha}>
          <div className={classes.base_item}></div>
          <div className={classes.img_item}></div>
          <div className={classes.blur_item}></div>
          <div className={classes.aACHENERPRINTEN}>AACHENER PRINTEN</div>
          <div className={classes.alemanha}>Alemanha</div>
          <div className={classes.aachenerPrintenSaoUmTipoDeLebk}>
            Aachener Printen são um tipo de Lebkuchen . O termo é uma denominação de origem protegida e, portanto, todos
            os fabricantes podem ser encontrados em ou perto de Aachen. Printen são feitos de uma variedade de
            ingredientes, incluindo canela , anis , cravo , cardamomo , coentro , pimenta da Jamaica e também gengibre .
          </div>
        </div>
        <div className={classes.itemDaLinha2}>
          <div className={classes.base_item2}></div>
          <div className={classes.img_item2}></div>
          <div className={classes.blur_item2}></div>
          <div className={classes.aACHENERPRINTEN2}>AACHENER PRINTEN</div>
          <div className={classes.alemanha2}>Alemanha</div>
          <div className={classes.aachenerPrintenSaoUmTipoDeLebk2}>
            Aachener Printen são um tipo de Lebkuchen . O termo é uma denominação de origem protegida e, portanto, todos
            os fabricantes podem ser encontrados em ou perto de Aachen. Printen são feitos de uma variedade de
            ingredientes, incluindo canela , anis , cravo , cardamomo , coentro , pimenta da Jamaica e também gengibre .
          </div>
        </div>
        <div className={classes.itemDaLinha3}>
          <div className={classes.base_item3}></div>
          <div className={classes.img_item3}></div>
          <div className={classes.blur_item3}></div>
          <div className={classes.aACHENERPRINTEN3}>AACHENER PRINTEN</div>
          <div className={classes.alemanha3}>Alemanha</div>
          <div className={classes.aachenerPrintenSaoUmTipoDeLebk3}>
            Aachener Printen são um tipo de Lebkuchen . O termo é uma denominação de origem protegida e, portanto, todos
            os fabricantes podem ser encontrados em ou perto de Aachen. Printen são feitos de uma variedade de
            ingredientes, incluindo canela , anis , cravo , cardamomo , coentro , pimenta da Jamaica e também gengibre .
          </div>
        </div>
        <div className={classes.itemDaLinha4}>
          <div className={classes.base_item4}></div>
          <div className={classes.img_item4}></div>
          <div className={classes.blur_item4}></div>
          <div className={classes.aACHENERPRINTEN4}>AACHENER PRINTEN</div>
          <div className={classes.alemanha4}>Alemanha</div>
          <div className={classes.aachenerPrintenSaoUmTipoDeLebk4}>
            Aachener Printen são um tipo de Lebkuchen . O termo é uma denominação de origem protegida e, portanto, todos
            os fabricantes podem ser encontrados em ou perto de Aachen. Printen são feitos de uma variedade de
            ingredientes, incluindo canela , anis , cravo , cardamomo , coentro , pimenta da Jamaica e também gengibre .
          </div>
        </div>
      </div>
      <div className={classes.header}>
        <div className={classes.base}></div>
        <div className={classes.pesquisa}></div>
        <div className={classes.pesquisarCookies}>Pesquisar Cookies</div>
        <div className={classes.perfil}>
          <PerfilIcon className={classes.icon} />
        </div>
        <div className={classes.lupa}>
          <LupaIcon className={classes.icon2} />
        </div>
      </div>
      <div className={classes.hidden_log}>
        <div className={classes.logOut}></div>
        <div className={classes.lOGOUT}>LOG OUT</div>
      </div>
    </div>
  );
});
