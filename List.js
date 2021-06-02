import './List.css';
import React,{useState} from 'react';

function List(props){
    let a=[{title:0}];
    const[currentPage,setNextPage]=useState(props.title);
    const clickHandle1=(event)=>{
        setNextPage(1);
        
        a.title=1;
        console.log(a.title);
    };
    const clickHandle2=(event)=>{
        setNextPage(2);
        
        a.title=2;
        //console.log(a);
    };
    const clickHandle3=(event)=>{
        setNextPage(3);
        console.log(3);
        a.title=3;
    };
    const clickHandle4=(event)=>{
        setNextPage(4);
        console.log(4);
        a.title=4;
    };
    return (
        <div>
        <div className="nav">Welcome to Shopping page!!</div>
        <div className="outer">
            <h2>MY WALLS</h2>
            <ul>
                <li>
                    <div className="inner">
                        <a href="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhpbmclMjBzdG9yZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" onClick={clickHandle1}>Left Shopping Window</a>
                        <p>12 Accessories</p>
                        <button className="on">On</button>
                    </div>
                </li>
                <li>
                    <div className="inner">
                        <a href="https://images.unsplash.com/photo-1561122156-fe23366e47d3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhlcyUyMHNob3B8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" onClick={clickHandle2}>Right Shopping Window Front</a>
                        <p>9 Accessories</p>
                        <button className="on">On</button>
                    </div>
                </li>
                <li>
                    <div className="inner">
                        <a href="https://thumbs.dreamstime.com/z/lady-fashion-shop-window-clothing-store-front-shopping-mall-view-women-woman-mannequin-retail-147944830.jpg" onClick={clickHandle3}>Front Enterance</a>
                        <p>12 Accessories</p>
                        <button className="on">On</button>
                    </div>
                </li>
                <li>
                    <div className="inner">
                        <a href="https://i.pinimg.com/originals/43/2e/5d/432e5d7d96dae93b97c2bb682ab55ac3.jpg" onClick={clickHandle4}>Shoe Wall</a>
                        <p>20 Accessories</p>
                        <button className="off">Off</button>
                    </div>
                </li>
            </ul>
        </div>
        <div className="outer1">
          <img src="C:\Users\jalaj\Downloads\CrewareProject\src\components\CrewareProject.png" />
        </div>
        </div>
        
    );
}
export default List;