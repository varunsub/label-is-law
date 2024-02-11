'use client';

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <head>
                <link rel='icon' type='image/x-icon' href='/question.jpg' />
                <title>Check your label</title>
            </head>
            <body className='flex justify-center items-center h-screen m-0'>
                {children}
            </body>
        </html>
    );
}
