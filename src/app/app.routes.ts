import { Routes } from '@angular/router';
import { IntroComponent } from './pages/intro/intro.component';
import { MessageComponent } from './pages/message/message.component';

export const routes: Routes = [
    {
        path: '',
        component: IntroComponent,
    },
    {
        path: 'message',
        component: MessageComponent,
    }
];
