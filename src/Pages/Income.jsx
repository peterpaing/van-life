import graph from '../assets/income-graph.png'

export default function Income(){
    return (
        <section className='income-container'>
            <div className="income">
            <h2>Income</h2>
            <span>Last 30 days</span>
            <p>$2,260</p>
            </div>
            <div className='income-graph'>
                <img src={graph} alt='income graph'/>
            </div>

            <div className="transactions">
                <h3>Your transactions (3)</h3>
                <p>Last 30 days</p>
                </div>
            
            <div className='transactions-records'>
                <p>$720</p>
                <span>1/12/26</span>
            </div>

            <div className='transactions-records'>
                <p>$560</p>
                <span>10/11/26</span>
            </div>

            <div className='transactions-records'>
                <p>$980</p>
                <span>23/11/26</span>
            </div>
        </section>
    )
}