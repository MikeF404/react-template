import { Outlet } from 'react-router-dom'
import { Toaster } from './components/ui/sonner'
import Header from './components/Header'

export function App() {

  return (
    <div className="flex justify-center bg-[radial-gradient(#576faa_1px,transparent_1px)] [background-size:32px_32px]">
      <div className="flex min-h-screen max-w-[1080px] w-full flex-col">
        <div className="fixed top-0 left-0 right-0 z-50">
          <Header />
        </div>
        <div className="mt-16 flex-grow overflow-auto">
          <Outlet />
        </div>
        <Toaster richColors expand={false} duration={2000} closeButton={true} />
      </div>
    </div>
  );
}

export default App
