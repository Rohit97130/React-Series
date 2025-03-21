    //1-> element || 2->props || 3->children
    // const heading = React.createElement('h1',{id:'head1', className:"heading-class"},"Hello From React");


    // const root = ReactDOM.createRoot(document.getElementById('root'))
    // root.render(heading);
    













    //////////////////
    //Q2
    // <div id = 'parent'>
    //     <div id = 'child'>
    //         <h1>Hello</h1>
    //          <h1>Bye</h1>
    //     </div>
    // </div>

    const div1 = React.createElement(
        'div',
        {id:'parent'},
         React.createElement('div',{id:'child'},
            [ React.createElement('h1',{id:"Heading-1"},'Hello'),
             React.createElement('h1',{id:"Heading-2"},'Bye')
            ])
        );

    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(div1); 


    //JSX