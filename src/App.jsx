import { lazy, Suspense } from 'react';

const RemoteHeader = lazy(() => import('BlogApp/Head'));

function App() {
    return (
        <div>
            <p>Host App</p>
            <Suspense fallback={<div>Loading Header...</div>}>
                <RemoteHeader />
            </Suspense>
        </div>
    )
}

export default App