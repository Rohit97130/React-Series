import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i); // it is for case sensitivty '//'
//   expect(linkElement).toBeInTheDocument();
// });

// test('Check for Hello and Image title',()=>{
//   render(<App/>)
//   const checkHelloElement = screen.getByText(/Hello/i);
//   const ImageTitle = screen.getByTitle(/Scenery/i);
//   const ImageTilte2 =  screen.getByTitle(/flowers/i);
//   expect(checkHelloElement).toBeInTheDocument();
//       //check  whether image has an title or not
//   expect(ImageTitle).toBeInTheDocument();
//   expect(ImageTilte2).toBeInTheDocument();
// })






//Test for Input Field

describe.only('Check  for UI input  field',()=>{ //After writing only
    
  test('Check for Input Box' ,()=>{
  render(<App/>);
  
  //check whether input field is there or  not 
  let checkForInput  = screen.getByRole('textbox');
  let checkForPlaceHolder = screen.getByPlaceholderText(/Enter UserName/i);
  expect(checkForInput).toBeInTheDocument();
  expect(checkForPlaceHolder).toBeInTheDocument();

  expect(checkForPlaceHolder).toHaveAttribute('name','username')

  expect(checkForInput).toHaveAttribute('name','username');
  expect(checkForInput).toHaveAttribute('Id','userId');
  expect(checkForInput).toHaveAttribute('value','Adam12');

})

})



// we are going to learn  about grouping of Test cases


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

