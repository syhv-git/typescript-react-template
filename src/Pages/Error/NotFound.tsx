import { useRouteError } from 'react-router-dom';

export default function NotFound() {
    const err = useRouteError();
    console.error(err);
    return (
        <div>
            <span>Page Not Found</span>
        </div>
    );
}
