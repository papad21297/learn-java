import {AuthProvider} from './src/contexts/Auth';
import {Router} from './src/routes/Router';

// cls&&set BASE_ADDRESS_URL="http://192.168.1.116:19000"&&npx expo start

export default function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}
