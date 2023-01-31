import React from 'react'

const Table = () => {
  return (
    <table>
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Poduct</th>
                                <th className='payment'>Payment</th>
                                <th>Time</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Taysone11</td>
                                <td>React</td>
                                <td className='payment'>231$</td>
                                <td>2 minutes ago</td>
                            </tr>
                            <tr>
                                <td>Man</td>
                                <td>Vue</td>
                                <td className='payment'>43$</td>
                                <td>5 minutes ago</td>
                            </tr>
                            <tr>
                                <td>Monster</td>
                                <td>Javascript</td>
                                <td className='payment'>624$</td>
                                <td>6 minutes ago</td>
                            </tr>
                            <tr>
                                <td>Like</td>
                                <td>Node js</td>
                                <td className='payment'>109$</td>
                                <td>6 minutes ago</td>
                            </tr>
                            <tr>
                                <td>Women</td>
                                <td>Next js</td>
                                <td className='payment'>95$</td>
                                <td>15 minutes ago</td>
                            </tr>
                            
                            

                        </tbody>
    

                    </table>
  )
}

export default Table