import { Form, Header, Information, Result, Footer } from './_components';
import { HomeProvider } from './_context';

export default function Home() {
  return (
    <HomeProvider>
      <div className='flex flex-col items-center h-lvh overflow-auto'>
        <div className='flex flex-col gap-16 p-8 max-w-4xl w-full'>
          <Header />

          <main>
            <Form />
          </main>

          <Result />
          <hr />
          <Information />
          <hr />
          <Footer />
        </div>
      </div>
    </HomeProvider>
  );
}

