import { Routes } from '@angular/router';
import { StructureComponent } from './layout/structure/structure.component';
import { AllproductsPageComponent } from './pages/allproducts-page/allproducts-page.component';
import { SelectedProductPageComponent } from './pages/selected-product-page/selected-product-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactusPageComponent } from './pages/contactus-page/contactus-page.component';
import { MenPageComponent } from './pages/men-page/men-page.component';
import { AuthGuard } from './authentication/auth.guard';
import { LogoutModalComponent } from './components/logout-modal/logout-modal.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '',
        component: StructureComponent,
        children: [
            {
                path: 'home',
                component: AllproductsPageComponent
            },
            {
                path: 'selected-product',
                component: SelectedProductPageComponent,
                canActivate: [AuthGuard]
            },
            { 
                path: 'product/:id', 
                component: SelectedProductPageComponent 
            },
            {
                path: 'about',
                component: AboutPageComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'contact',
                component: ContactusPageComponent,
                canActivate: [AuthGuard]
            },
            {
                path:'cart-page',
                component:CartPageComponent,
                canActivate:[AuthGuard]
            },
            {
                path: 'category/:category',
                component: MenPageComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'checkout',
                component: CheckoutPageComponent,
                canActivate: [AuthGuard]
            },
            
        ]
    },
    {
        path: 'login',
        component: LoginPageComponent
    },
    {
        path: 'signup',
        component: SignupPageComponent
    },
    {
        path: 'modal',
        component: LogoutModalComponent
    }
];
