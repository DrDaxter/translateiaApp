import React from 'react'
import { Toast, VStack, ToastTitle, ToastDescription } from '@gluestack-ui/themed';
import { ToastAlertPropsInterface } from '../../../interfaces/AlertProps';

interface Props extends ToastAlertPropsInterface{ nativeId: string}

export const ToastAlertComponent = ({
    nativeId,
    action,
    variant,
    toastTitle,
    toastDescription
}:Props) => {
  return (
    <Toast nativeID={`toast-${nativeId}`} action={action} variant={variant}>
        <VStack space='xs' flex={0}>
            <ToastTitle>{toastTitle}</ToastTitle>
            <ToastDescription>{toastDescription}</ToastDescription>
        </VStack>
    </Toast>
  )
}
