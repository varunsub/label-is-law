'use client';
import 'tailwindcss/tailwind.css'; // Ensure you import TailwindCSS
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import MainPage from '@/components/MainPage';

const queryClient = new QueryClient();

export default function Home() {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <MainPage />
        </QueryClientProvider>
    );
}
