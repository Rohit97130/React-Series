import { render, screen } from '@testing-library/react';
import App from './App';

//you can also make different file for different  component in  order to keep  things clearer.
describe('Check for Image Attribute',()=>{
    test('Check for Image1 title',()=>{
  render(<App/>)
  const ImageTitle = screen.getByTitle(/Scenery/i);
  expect(ImageTitle).toBeInTheDocument();
})

test('Check for Image2 title',()=>{
  render(<App/>)
  const ImageTilte2 =  screen.getByTitle(/flowers/i);
  expect(ImageTilte2).toBeInTheDocument();
})
 })