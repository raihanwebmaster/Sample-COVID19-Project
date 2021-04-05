// import React from 'react';

// import { Cards , Chart, CountryPicker} from './components';
// import styles from './App.module.css';
// import { fetchData } from './api';
// import coronaImage from './images/image.png';
// class App extends React.Component {
//     state = {
//         data: {},
//         country: '',
//     }

//     async componentDidMount() {
//         const fetchedData = await fetchData();
//         this.setState({data: fetchedData});
        
//     }
//     handleCountryChange = async (country) => {
       
//         const fetchedData = await fetchData(country);
//         this.setState({data: fetchedData, country: country});
//     }
//     render() {
//         const { data, country } = this.state;
//         return (
//             <div className={styles.container}>
//                 <img className={styles.image} src={coronaImage} alt="covid-19"/>
//                 <Cards data={data} country={country}/>
//                 <CountryPicker handleCountryChange={this.handleCountryChange}/>
//                 <Chart data={data} country={country}/>
//             </div>
//         )
//     }
// }

// export default App;
import React from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import coronaImage from './images/image.png';
import { useEffect, useState } from 'react/cjs/react.development';
const App = () => {

    const [state, setState] = useState({
        data: {},
        country: '',
    })
    useEffect(() => {
        loadData()
    }, []);

    const loadData = async () => {
        const fetchedData = await fetchData();
        setState({ data: fetchedData });
    }

    const handleCountryChange = async (country) => {

        const fetchedData = await fetchData(country);
        setState({ data: fetchedData, country: country });
    }
    const { data, country } = state;
    console.log(data);
    return (
        <div className={styles.container}>
            <img className={styles.image} src={coronaImage} alt="covid-19" />
            <Cards data={data} country={country} />
            <CountryPicker handleCountryChange={handleCountryChange} />
            <Chart data={data} country={country} />
        </div>
    )
}


export default App;