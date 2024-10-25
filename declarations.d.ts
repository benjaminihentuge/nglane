declare module '*.jpg' {
    const value: import('next/dist/shared/lib/image-external-types').StaticImageData;
    export default value;
  }
  
  declare module '*.jpeg' {
    const value: import('next/dist/shared/lib/image-external-types').StaticImageData;
    export default value;
  }
  
  declare module '*.png' {
    const value: import('next/dist/shared/lib/image-external-types').StaticImageData;
    export default value;
  }
  
  declare module '*.svg' {
    const value: string;
    export default value;
  }
  
  declare module '*.gif' {
    const value: import('next/dist/shared/lib/image-external-types').StaticImageData;
    export default value;
  }
  
  declare module '*.webp' {
    const value: import('next/dist/shared/lib/image-external-types').StaticImageData;
    export default value;
  }
  
  declare module '*.ico' {
    const value: import('next/dist/shared/lib/image-external-types').StaticImageData;
    export default value;
  }
  
  declare module 'react-paystack' {
    import * as React from 'react';
  
    interface PaystackButtonProps {
      email: string;
      amount: number;
      publicKey: string;
      onSuccess: (reference: any) => void;
      onClose?: () => void;
      text?: string;
      className?: string;
      currency?: string;
      channels?: string[];
      metadata?: Record<string, any>;
      reference?: string;
    }
  
    export const PaystackButton: React.FC<PaystackButtonProps>;
  }
  