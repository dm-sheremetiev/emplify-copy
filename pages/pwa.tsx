import { useEffect } from 'react';
import { useRouter } from 'next/router';

function PWA(): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      if (router) router.push('/');
    }, 2000);
  }, [router]);

  return (
    <div className="container flex justify-center" style={{ height: '100vh', alignItems: 'center' }}>
      <img src="/images/color-emplifi-logo-RGB.svg" className="card-in" alt="Emplifi" style={{ maxWidth: 280, width: '90%' }} />
    </div>
  );
}

export default PWA;
