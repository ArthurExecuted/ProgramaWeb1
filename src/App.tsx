import { memo } from 'react';
import type { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { MainPage } from './components/MainPage/MainPage';
import { LogInRegisterPage } from './components/LogInRegisterPage/LogInRegisterPage';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={LogInRegisterPage} />
          <Route exact path="/main" component={MainPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
});
