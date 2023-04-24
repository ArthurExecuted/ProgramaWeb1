import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Line2Icon2 } from './Line2Icon2.js';
import { Line2Icon } from './Line2Icon.js';
import classes from './LogInRegisterPage.module.css';
import { Rectangle1Icon } from './Rectangle1Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 3:129 */
export const LogInRegisterPage: FC<Props> = memo(function LogInRegisterPage(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.chocolateChipCookieBatterInABo}></div>
      <div className={classes.rectangle1}>
        <Rectangle1Icon className={classes.icon} />
      </div>
      <div className={classes.logInRegister}>
        <div className={classes.google}>
          <div className={classes.nomeDeUser}></div>
          <div className={classes.logInComGoogle}>Log in com Google</div>
          <div className={classes._73289301}></div>
        </div>
        <div className={classes.logIn}>
          <div className={classes.senha}></div>
          <div className={classes.nomeDeUser2}></div>
          <div className={classes.lOGIN}>LOG IN</div>
          <div className={classes.nomeDeUsuarioEmail}>Nome de usuário/Email</div>
          <div className={classes.senha2}>Senha</div>
        </div>
        <div className={classes.register}>
          <div className={classes.senhaDeNovo}></div>
          <div className={classes.senha3}></div>
          <div className={classes.email}></div>
          <div className={classes.nomeDeUser3}></div>
          <div className={classes.rEGISTRAR}>REGISTRAR</div>
          <div className={classes.nomeDeUsuario}>Nome de usuário</div>
          <div className={classes.email2}>Email</div>
          <div className={classes.senha4}>Senha</div>
          <div className={classes.confirmarSenha}>Confirmar senha</div>
        </div>
        <div className={classes.line2}>
          <Line2Icon className={classes.icon2} />
        </div>
        <div className={classes.line22}>
          <Line2Icon2 className={classes.icon3} />
        </div>
      </div>
    </div>
  );
});
