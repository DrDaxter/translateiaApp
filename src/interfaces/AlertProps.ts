export interface ToastAlertPropsInterface{
    action: 'success'|'info'|'error'|'warning'|'attention',
    variant: 'accent'|'solid'|'outline',
    toastTitle: string,
    toastDescription: string
}