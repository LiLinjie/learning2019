import React, { useState, useMemo } from 'react'

function Exmaple7 () {
    const [xiaohong, setXiaohong]= useState('小红在等你')
    const [xiaoming, setXiaoming]= useState('小明在等你')

    return (
        <>
            <button onClick={() => setXiaohong(new Date().getTime())}>小红</button>
            <button onClick={() => setXiaoming(new Date().getTime() + '小明向你走来')}>小明</button>
            <ChildComponent name={xiaohong}>{xiaoming}</ChildComponent>
        </>
    )
}

function ChildComponent ({name, children}) {

    function changeXiaohong() {
        console.log('她来了。小红向我们走来了')
        return name + '，小红向我们走来了'
    }

    const actionXiaohong = useMemo(() => changeXiaohong(name), [name]) 

    return (
        <>
            <div>{actionXiaohong}</div>
            <div>{children}</div>
        </>
    )
}

export default Exmaple7;
