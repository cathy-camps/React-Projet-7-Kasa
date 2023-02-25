import { render, screen } from '@testing-library/react';
import App from './pages/Home';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

import { useNavigate } from 'react-router-dom';

function MonComposant() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/route-de-destination');
  }

  return (
    <button onClick={handleClick}>Aller à la route de destination</button>
  );
}

function lastImageClick() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const lastIndex = images.length - 1
  if (currentImageIndex === lastIndex) {
    setCurrentImageIndex(0)
  }
}

const details = data
console.log(data)


