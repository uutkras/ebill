import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'customer-registration', 
    loadChildren: () => import('./pages/customer-registration/customer-registration.module').then(m => m.CustomerRegistrationModule) 
  },
  { 
    path: 'admin-registration', 
    loadChildren: () => import('./pages/admin-registration/admin-registration.module').then(m => m.AdminRegistrationModule) 
  },
  { 
    path: 'registration-acknowledgement', 
    loadChildren: () => import('./pages/registration-acknowledgement/registration-acknowledgement.module').then(m => m.RegistrationAcknowledgementModule) 
  },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'view-bill', loadChildren: () => import('./pages/view-bill/view-bill.module').then(m => m.ViewBillModule) },
  { path: 'bill-payment', loadChildren: () => import('./pages/bill-payment/bill-payment.module').then(m => m.BillPaymentModule) },
  { path: 'payment-acknowledgement', loadChildren: () => import('./pages/payment-acknowledgement/payment-acknowledgement.module').then(m => m.PaymentAcknowledgementModule) },
  { path: 'register-complaint', loadChildren: () => import('./pages/register-complaint/register-complaint.module').then(m => m.RegisterComplaintModule) },
  { path: 'view-complaint', loadChildren: () => import('./pages/view-complaint/view-complaint.module').then(m => m.ViewComplaintModule) },
  { path: 'admin-dashboard', loadChildren: () => import('./pages/admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule) },
  { path: 'reports', loadChildren: () => import('./pages/reports/reports.module').then(m => m.ReportsModule) },
  { path: 'forgot-password', loadChildren: () => import('./pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: 'home' }
];
