import React from 'react';
import { useQRCode } from 'next-qrcode';

const QRcode = () => {
    const { Image } = useQRCode();
  return (
    <>
    <div className="rounded-lg">
    <Image 
    text={'https://discord.com/login?redirect_to=%2Flogin%3Fredirect_to%3D%252Fchannels%252F%2540me'}
    options={{
        type: 'image/jpeg',
        quality: 0.3,
        errorCorrectionLevel: 'M',
        margin: 3,
        scale:4,
        width: 150,
        color: {
            dark: '#000000',
            light: '#ffffff',
        },
    }}
    />
    </div>
    </>
  )
}

export default QRcode
