import React from 'react'

const Stats =({toDolist}) =>
{
    let countList = toDolist.length;
    return <div className="stats" id="stst">
     <p className="notify"> 
     {countList === 0 ? 'You got everything!Ready to go':`You have ${countList} items on your list`}
     </p>
    </div>;
};

export default Stats;